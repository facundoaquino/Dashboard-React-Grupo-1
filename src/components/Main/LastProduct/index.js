import React, {Component, Fragment} from 'react'

import dummy from '../assets/images/product_dummy.svg';
import Card from '../Card';

class LastProduct extends Component{

    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        return(
            <>
                <Card title="Last product in Data Dase">
						<div className="text-center">
							<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={dummy} alt="dummy" />
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
						<a target="_blank" rel="nofollow" href="/">View product detail</a>
				</Card>
            </>
        )
    }
}

export default LastProduct;