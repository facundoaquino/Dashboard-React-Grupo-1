import React from 'react';
import Card from './Card';

const Metrics = ({title,count}) => {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 main__title">{title}</h1>
			</div>

			<div className="row">

				<Card 
                    border="primary"
                    text="primary"
                    icon="fas fa-clipboard-list"
                    title="Total de productos"
                    value={count}
                />
                <Card 
                    border="success"
                    text="success"
                    icon="fas fa-dollar-sign"
                    title="Cantidad de usuarios"
                    value=""
                />
                <Card 
                    border="warning"
                    text="warning"
                    icon="fas fa-user-check"
                    title="Cantidad de categorias"
                    value=""
                />
			</div>
        </>
    );
}

export default Metrics;
