import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Connect from './components/Wallet/Connect';
import Home from './components/Home.js';
import Modals from './components/Modals.js';
import Cards from './components/Cards';
import Nav from './components/Nav'

import cardData from './components/data.json'
const App = () => {
	
	

	return (
		<>
		<Nav/>
		<Home/>
		<Modals/>
		<div className="card" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                {cardData.map((card, index) => (
                    <Cards key={index} title={card.title} content={card.content} />
                ))}
            </div>
		<Connect></Connect>
		</>
		
	);
};

export default App;
