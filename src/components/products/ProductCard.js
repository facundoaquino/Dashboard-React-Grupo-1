import React from 'react'

const ProductCard = ({ title, lastname, description , image }) => {
	return (
		<div className="card m-2" style={{width:'200px'}}>
			{`${title} ${lastname}`}
			<div className="card-body">
				 <img className='card__img' src={`http://localhost:3050/${image}`} alt=""/>
				<p className="card-text">{description}</p>
				<a href="/" className="btn btn-primary" style={{position:'absolute',left:'0',bottom:'0'}}>
					Ver detalle
				</a>
			</div>
		</div>
	)
}

export default ProductCard
