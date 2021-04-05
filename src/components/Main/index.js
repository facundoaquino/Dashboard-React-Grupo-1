import React, {Component} from 'react';
import axios from 'axios';

import Card from './Card';
import Category from './Category';
import Footer from './Footer';
 
import Header from './Header';
import Metrics from './Metrics';

/* Assets */
import dummy from './assets/images/product_dummy.svg';

import  './assets/styles.css';


class Main extends Component {
	constructor(){
        super();
        this.state={
            categories:[],
			count:'',
        };
	}

	async componentDidMount() {
		try{
			const res=await axios.get(`http://localhost:3050/api/categories`)	
			const {data}=await axios.get(`http://localhost:3050/api/products/all`)	
			  
			this.setState({ 
				categories:res.data,
				count:data.count
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
						count={this.state.count}
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
							title="Categorias"
						>
							<div className="row">
								{ this.state.categories.map((category, i) => <Category key={category.name} title={category.name}/>) }
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
