import React, {Component} from 'react';
import axios from 'axios';

import Card from './Card';
import Category from './Category';
import Footer from './Footer';
 
import Header from './Header';
import Metrics from './Metrics';

import LastProduct from'./LastProduct'

/* Assets */
import dummy from './assets/images/product_dummy.svg';

import  './assets/styles.css';


class Main extends Component {
	constructor(){
        super();
        this.state={
            categories:[],
			countProducts:'',
			countCategories:'',
			countUsers:''
        };
	}

	async componentDidMount() {
		try{
			const dataCategories=await axios.get(`http://localhost:3050/api/categories`)	
			const {data:{count}}=await axios.get(`http://localhost:3050/api/products/all`)
			const dataUsers=await axios.get(`http://localhost:3050/api/users`)
			//const dataProviders = await axios.get(`http://localhost:3050/apiproducts/latest`)
		
			this.setState({ 
				categories:dataCategories.data,
				countProducts:count,
				countCategories:dataCategories.data.length,
				countUsers:dataUsers.data.count,
			})
		}		
		catch(e){
			console.log(e)
		}
	  }


	render(){
    return (
        <div id="content-wrapper" className="d-flex flex-column main__container--bg">

			<div id="content " className='main__container--bg'>

				<Header />

				<div className="container-fluid">
					<Metrics
						countProducts={this.state.countProducts}
						countCategories={this.state.countCategories}
						title="App dashboard"
						countUsers={this.state.countUsers}
					/>

					<div className="row">
						{/* Cards - prueba de childrens */}

						<LastProduct/>
						

						<Card 
							title="Categorias"
						>
							<div className="row">
								{ this.state.categories.map((category, i) => <Category key={category.name} title={category.name} count={category.providers.length}/>) }
							</div>	
						</Card>

					</div>
					 
				</div>
			</div>

			<Footer />

		</div>
    );
}
}

export default Main;
