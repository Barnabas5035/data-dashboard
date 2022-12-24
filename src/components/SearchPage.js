import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import MasterPage from './MainPage/MasterPage'

const SearchPage = () => {
  const [data, setData] = useState([])
  const [value, setvalue] = useState('')

  // const LoaduserData = () => {
  //   axios
  //     .get(`http://127.0.0.1:8000/api/show/user`)
  //     .then((response) => {
  //       setData(response.data)
  //       console.log(response)
  //     })
  //     .catch((err) => console.log(err))
  // }
  // useEffect(() => {
  //   LoaduserData()
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    return await axios
      .get(`http://127.0.0.1:8000/api/search/${value}`)
      .then((res) => {
        setData(res.data)
        setvalue('')
      })
      .catch((err) => console.log(err))
  }

  return (
    <MasterPage>
      <div>
        <button
          className='btn btn-success
         mt-4 b-3 border-4 '
          type='userUpdate'
        >
          <form className='d-flex' onSubmit={handleSubmit}>
            <input
              type='text'
              className='searchBtn  me-2'
              placeholder='search'
              onChange={(e) => setvalue(e.target.value)}
              style={{ width: 250, height: 40 }}
            />
            <button
              className='btn btn-outline-success text-white '
              type='submit'
            >
              search
            </button>
          </form>
        </button>

        <table className='table '>
          <thead className=' navbar-expand-lg bg-dark border'>
            <tr>
              <th className='col text-white'>S/N</th>
              <th className='col text-white'>Name</th>
              <th className='col text-white'>Emaill</th>
              <th className='col text-white'>Description</th>
              <th className='text-white'>Image</th>
              <th className='text-white'>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope='row'>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.description}</td>
                  <td>
                    <img
                      style={{ width: 100, height: 60 }}
                      src={`http://localhost:8000/${data.file_name}`}
                      alt='pic'
                    />
                  </td>
                  <button type='button' className='btn btn-outline-danger ms-2'>
                    Delete
                  </button>

                  <div>
                    <button
                      type='button'
                      className='btn btn-outline-primary ms-1'
                      data-bs-toggle='modal'
                      data-bs-target='#staticBackdrop'
                    >
                      <Link style={{ textDecoration: 'none' }}>edith</Link>
                    </button>
                  </div>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </MasterPage>
  )
}

export default SearchPage
