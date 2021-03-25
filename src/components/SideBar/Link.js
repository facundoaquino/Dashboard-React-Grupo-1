import React from 'react';
import PropTypes from 'prop-types';

const Link = ({classIcon, title, active, route}) => {

    let classItem = `nav-item ${active ?? ''}`;

    return (
        <li className={classItem}>
			<a className="nav-link collapsed" href={route}>
				<i className={classIcon}></i>
                <span>{title}</span>
			</a>
		</li>       
    );
}

Link.defaultProps = {
    title: "Dashboard"
}

Link.propTypes = {
    classIcon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.string,
    route: PropTypes.string
}


export default Link;
