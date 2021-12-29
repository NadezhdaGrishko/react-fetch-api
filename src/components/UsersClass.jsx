import React, { Component } from 'react'
import axios from 'axios'

export default class UsersClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    async fetchData() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({
            users: res.data
                })
            }


    render() {
        const users = this.state.users
        return (
            <div className='mt-4 p-4 text-yellow-300'>
                <h2>Class</h2>
                {
                    users.length > 0 &&
                    users.map((users, index) => (
                        <h3 key = {index}>
                            {users.name}
                        </h3>
                    ))
                }
            </div>
        )
            }
}
