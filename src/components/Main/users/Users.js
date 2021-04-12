import React, { useEffect, useState } from 'react'
import Table from '../Table'
import './users.css'
const Users = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		setTimeout(() => {
			fetch('https://azvi.herokuapp.com//api/users')
				.then((res) => res.json())
				.then(({ users: usersData }) => {
					setUsers(usersData)
				})
		}, 1000)
	}, [])
	 
	return (
		<div className="users__container">
			<h1 className="users__title">Usuarios</h1>

			<Table users={users} />
		</div>
	)
}

export default Users
