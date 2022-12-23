import React from 'react'
import { useState } from 'react'
import MasterPage from './MainPage/MasterPage'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const EdithPage = () => {
  const [edithData, setEdithData] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const SingleFetch = () => {
      axios
        .get(`http://127.0.0.1:8000/api/single_user/${params.id}`)
        .then((res) => {
          setEdithData(res.data)

          setDescription(res.data.description)
          setEmail(res.data.email)
          setName(res.data.name)
          setFile(res.data.file_name)
        })
    }
    SingleFetch()
  }, [params.id])

  let handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('description', description)
    formData.append('file_name', file)
    axios
      .post(`http://127.0.0.1:8000/api/update_user/${params.id}`, formData)
      .then((res) => {})
      .catch((err) => {
        console.log(err)
      })
    navigate('/')
  }

  return (
    <MasterPage>
      <div className='container w-50'>
        <form className='row g-3' onSubmit={handleSubmit}>
          <div className='col-12'>
            <label for='inputEmail4' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              defaultValue={edithData.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='col-12'>
            <label for='inputAddress' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              placeholder='barn@gmail.com'
              defaultValue={edithData.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='col-12'>
            <label for='inputAddress2' className='form-label'>
              description
            </label>
            <input
              type='text'
              className='form-control'
              placeholder='About your Bio'
              defaultValue={edithData.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className='col-mb-3'>
            <label for='formFile' className='form-label'>
              Default file input example
            </label>
            <input
              className='form-control'
              type='file'
              defaultValue={edithData.file_name}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div class='col-12'>
            <img
              src={`http://localhost:8000/${edithData.file_name}`}
              style={{ width: 100, height: 60 }}
              alt='pix'
            />
          </div>
          <div class='col-12'>
            <button type='submit' className='btn btn-primary'>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </MasterPage>
  )
}
export default EdithPage
