import React, {useState, Fragment} from 'react'

import dummy from '../assets/images/product_dummy.svg';
import Card from '../Card';

const LastProduct = (props)=>{

    
        return(
            <>
                <Card title="Last product in Data Dase">
						<div className="text-center">
							<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}}  src={`http://localhost:3050/${props.image}`}  alt="El usuario no posee foto" />
						</div>
						<p>El ultimo es {props.name} {props.lastname}</p>
						<a target="_blank" rel="nofollow" href="/">View product detail</a>
				</Card>
            </>
        )
    
}

export default LastProduct;