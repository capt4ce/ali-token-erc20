import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Drizzle } from '@drizzle/store';

// Import contract
import AliToken from './ali-eth/build/contracts/AliToken.json';

// console.log('debug AliToken', AliToken);

const options = {
  web3: {
    // block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:7545',
    },
  },
  contracts: [AliToken],
  // events: {},
};

const drizzle = new Drizzle(options);

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));
