import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import './products.css'

const Products = () => {
	const [productGroup, setProducts] = useState({ products: [] })
	const [page, setPage] = useState(0)
	const { next, previous, products } = productGroup

	useEffect(() => {
		fetch(`http://localhost:3050/api/products/all?page=${page}`)
			.then((res) => res.json())
			.then((products) => {
				setProducts(products)
			})
	}, [page])

	return (
		<div id="content-wrapper" className='products__container'>
			<h3 className='products__title'>PRODUCTS</h3>
			<div className='products__buttons'>
				<button className='btn btn-success' disabled={!previous} onClick={() => setPage(page - 1)}>
					anterior
				</button>
				<button className='btn btn-primary' disabled={!next} onClick={() => setPage(page + 1)}>
					siguiente
				</button>
			</div>
			<div className="d-flex flex-wrap  ">
				{products.map(({ name, lastname, description, image }, i) => (
					<ProductCard
						key={`${name}${i}`}
						title={name}
						lastname={lastname}
						description={description}
						image={image}
					/>
				))}
			</div>
		</div>
	)
}

export default Products
