import React, {Component} from 'react';
import axios from 'axios';

import Card from './Card';
import Category from './Category';
import Footer from './Footer';
import Table from './Table';
import Header from './Header';
import Metrics from './Metrics';

/* Assets */
import dummy from './assets/images/product_dummy.svg';


class Main extends Component {
	constructor(){
        super();
        this.state={
            categories:[]
        };
	}

	async componentDidMount() {
		try{
			const res=await axios.get(`http://localhost:3050/api/category`)	
			{ console.log(res.data) }
			this.setState({ 
				categories:res.data
			})
		}		
		catch(e){
			console.log(e)
		}
	  }


	render(){
    return (
        <div id="content-wrapper" className="d-flex flex-column">

			<div id="content">

				<Header />

				<div className="container-fluid">
					<Metrics 
						title="App dashboard"
					/>

					<div className="row">
						{/* Cards - prueba de childrens */}
						
						<Card
							title="Last product in Data Dase"
						>
							<div className="text-center">
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={dummy} alt="dummy" />
							</div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
							<a target="_blank" rel="nofollow" href="/">View product detail</a>
						</Card>

						<Card 
							title="Categories in Data Base"
						>
							<div className="row">
								{ this.state.categories.map((category) => <Category title={category.name}/>) }
							</div>	
						</Card>

					</div>
					<Table />
				</div>
			</div>

			<Footer />

		</div>
    );
}
}

export default Main;
