import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Products = () => {
	const [productGroup, setProducts] = useState([])

	useEffect(() => {
		fetch('http://localhost:3050/api/products/all')
			.then((res) => res.json())
			.then(({ products }) => {
				setProducts(products)
			})
	}, [])

	// console.log(productGroup);
	return (
		<div>
			<h3>Products</h3>
			<div className='d-flex flex-wrap  justify-content-center'>
				{productGroup.map(({ name, lastname, description }) => (
					<ProductCard title={name} lastname={lastname} description={description} />
				))}
			</div>
		</div>
	)
}

export default Products
