import React from 'react'
import './products.css'

const ProductCard = ({ name, lastname, description , image , detail }) => {
	return (
		<div className="products__card card animate__animated animate__fadeIn "  >
			{`${name} ${lastname}`}
			<div className="card-body">
				 <img className='card__img' src={image} alt=""/>
				<p className="card-text">{description}</p>
				<a href={detail} className="products__buttonDetail btn" target="_blank"  >
					Ver detalle
				</a>
			</div>
		</div>
	)
}

export default ProductCard
