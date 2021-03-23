import React from 'react';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';
import Table from './Table';
import Header from './Header';
import Metrics from './Metrics';

/* Assets */
import dummy from './assets/images/product_dummy.svg';


const Main = () => {
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
                        		<Category />
                        		<Category />
                        		<Category />
                        		<Category />
                        		<Category />
                        		<Category />
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

export default Main;
