import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MasterPage from './MainPage/MasterPage'

const AddPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')
  const url = 'http://127.0.0.1:8000/api/add/user'
  const userNavigate = useNavigate()

  let handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('description', description)
    formData.append('file_name', file)
    axios.post(url, formData).then((res) => {})
    userNavigate('/')
  }

  return (
    <MasterPage>
      <div className='container'>
        <form className='row mb-3' onSubmit={handleSubmit}>
          <div className='col-sm-8'>
            <label for='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              aria-label='first name'
              name='surname'
              className='form-control'
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='row mb-3'>
            <label for='email' class='col-mb col-form-label col-form-label-sm'>
              Email
            </label>
            <div className='col-sm-8'>
              <input
                type='email'
                className='form-control form-control-sm'
                id='email'
                placeholder='name@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className='form-floating'>
            <textarea
              className='form-control'
              placeholder='description'
              id='floatingTextarea2'
              style={{ height: '100px', width: '500px' }}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label for='floatingTextarea2'>description</label>
          </div>
          <div className='col-sm-6'>
            <label for='formFile' className='form-label'>
              file_name
            </label>
            <input
              className='form-control'
              type='file'
              id='formFile'
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div class='col-12 mt-4'>
            <button type='submit' className='btn btn-primary'>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </MasterPage>
  )
}

export default AddPage
