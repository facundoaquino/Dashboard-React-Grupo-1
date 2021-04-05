import React from 'react'
import './products.css'

const ProductCard = ({ title, lastname, description , image }) => {
	return (
		<div className="products__card card animate__animated animate__fadeIn "  >
			{`${title} ${lastname}`}
			<div className="card-body">
				 <img className='card__img' src={`http://localhost:3050/${image}`} alt=""/>
				<p className="card-text">{description}</p>
				<a href="/" className="products__buttonDetail btn  "  >
					Ver detalle
				</a>
			</div>
		</div>
	)
}

export default ProductCard
