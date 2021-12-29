import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const UsersFunc = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        }

        fetchData()

        return () => {
            console.log('Users unmounted')
        }
    }, [users])

    return (
        <div className='mt-4 p-4'>
            <h2>Functional Component</h2>
            {
                users.length > 0 &&
                users.map((user, index) => (
                    <h3 key={index} className='text-white'>
                        {user.name}
                    </h3>
                ))
            }
        </div>
    )
}

export default UsersFunc
