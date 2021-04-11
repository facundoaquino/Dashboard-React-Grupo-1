import React from 'react'
import LoadingTable from './LoadingTable'
import './table.css'
const Table = ({ users }) => {
	return (
		<>
			 
						<table className="table   table-striped  table-bordered table-hover"  width="100%" cellSpacing="0">
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Apellido</th>
									<th>Email</th>

									<th>Avatar</th>
								</tr>
							</thead>

							<tbody>
								{!users.length ? (
									 
										<LoadingTable /> 
									 
								) : (
									users.map((user) => (
										<tr>
											<td>{user.name}</td>
											<td>{user.lastname}</td>
											<td>{user.email}</td>
											<td>
												<img
													className="table__avatar"
													src={`http://localhost:3050/images/users/${user.image}`}
													alt=""
												/>
											</td>
										</tr>
									))
								)}
							</tbody>
						</table>
				 
		</>
	)
}

export default Table
