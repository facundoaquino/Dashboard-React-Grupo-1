import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Link = ({ classIcon, title, active, route }) => {
	let classItem = `nav-item ${active ?? ''}`

	return <NavLink className='text-light m-2' to={route} >
        <i className={classIcon}></i>
        {title}</NavLink>
}

Link.defaultProps = {
	title: 'Dashboard',
}

Link.propTypes = {
	classIcon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	active: PropTypes.string,
	route: PropTypes.string,
}

export default Link
