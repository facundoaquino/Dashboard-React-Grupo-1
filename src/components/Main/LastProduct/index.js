import React, {useState, Fragment} from 'react'

import dummy from '../assets/images/product_dummy.svg';
import Card from '../Card';
import "./Lastproduct.css"


const details = document.querySelector("#Details")

const LastProduct = (props)=>{

    
        return(
            <>
                <Card title="Last product in Data Dase">
						<div className="text-center">
							<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}}  src={`http://localhost:3050/${props.image}`}  alt="El usuario no posee foto" />
						</div>
						<p>El ultimo es {props.name} {props.lastname}</p>
						<p className="providerDetail unShowDetails" > <u>Detalles del Ultimo proveedor</u> </p>
                        <div id="Details" className=""  > 
                            <ul>
                                <li>{props.location} </li>
                                <li>{props.cellphone} </li>
                                <li>{props.email} </li>
                            </ul>
                            
                        </div>
				</Card>
            </>
        )
    
}

export default LastProduct;