import React from 'react'

const ProductCard = ({ title, lastname, description }) => {
	return (
		<div className="card m-2" style={{width:'200px'}}>
			{`${title} ${lastname}`}
			<div className="card-body">
				 
				<p className="card-text">{description}</p>
				<a href="/" className="btn btn-primary" style={{position:'absolute',left:'0',bottom:'0'}}>
					Ver detalle
				</a>
			</div>
		</div>
	)
}

export default ProductCard
