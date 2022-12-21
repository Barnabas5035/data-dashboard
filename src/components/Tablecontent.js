import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Tablecontent() {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    app()
  }, [])

  const app = () => {
    setLoading(true)
    axios
      .get(`http://127.0.0.1:8000/api/show/user`)
      .then((response) => {
        setUserData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }

  const deletePost = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`).then(() => {
      app()
    })
  }

  return (
    <div>
      <button
        className='btn btn-success
         mt-4 b-3 border-4 '
        type='userUpdate'
      >
        <form className='d-flex'>
          <input
            type='text'
            onChange={(e) => setSearch(e.target.value)}
            className='searchBtn  me-2'
            placeholder='search'
            style={{ width: 250, height: 40 }}
          />
          <button className='btn btn-outline-success text-white ' type='search'>
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
          {loading ? (
            <h2
              className='fs-10 d-flex justify-content-center  fw-8 m-auto'
              style={{ alignItems: 'center' }}
            >
              loading........
            </h2>
          ) : (
            userData
              .filter((value) => {
                if (search === '') {
                  return value
                } else if (value.name.includes(search)) {
                  return value
                }
              })
              .map((data) => {
                return (
                  <tr key={data.id}>
                    <th scope='row'>{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.description}</td>
                    <td>
                      <img
                        style={{ width: 100, height: 60 }}
                        src={`http://localhost:8000/${data.file_name}`}
                        alt='pic'
                      />
                    </td>
                    <button
                      type='button'
                      className='btn btn-outline-danger ms-2'
                      onClick={() => deletePost(data.id)}
                    >
                      Delete
                    </button>

                    <div>
                      <button
                        type='button'
                        className='btn btn-outline-primary ms-1'
                        data-bs-toggle='modal'
                        data-bs-target='#staticBackdrop'
                      >
                        <Link
                          to={`/edithpage/${data.id}`}
                          style={{ textDecoration: 'none' }}
                        >
                          edith
                        </Link>
                      </button>
                    </div>
                  </tr>
                )
              })
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Tablecontent
