import React, { Component } from 'react';
import Transfer from './Transfer';

import { newContextComponents } from '@drizzle/react-components';
const { AccountData, ContractData, ContractForm } = newContextComponents;

class Result extends Component {
  state = { dataKey: {} };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.AliToken;
    const dataKey = {};

    // let drizzle know we want to watch the `myString` method
    dataKey.name = contract.methods['name'].cacheCall();
    dataKey.totalSupply = contract.methods['totalSupply'].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    const { drizzleState } = this.props;
    // get the contract state from drizzleState
    const { AliToken } = drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const name = AliToken.name[this.state.dataKey.name];
    const totalSupply = AliToken.totalSupply[this.state.dataKey.totalSupply];

    const { accounts = {}, accountBalances } = drizzleState || {};
    const accountsArray = Object.values(accounts);
    console.log('debug, accounts', accounts);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{name && name.value}</h1>
          <p>
            <strong>Total Supply</strong>: {totalSupply && totalSupply.value}
          </p>
          <p>
            <strong>My Balances</strong>:{' '}
            <div>
              {Array.isArray(accountsArray) &&
                accountsArray.map((acc) => (
                  <div>
                    {acc}: {accountBalances[acc]}
                  </div>
                ))}
            </div>
          </p>
          <h3>Send Tokens</h3>
        </header>
        <div className="App-intro">
          <ContractForm
            drizzle={this.props.drizzle}
            drizzleState={this.props.drizzleState}
            contract="AliToken"
            method="transfer"
            labels={['To Address', 'Amount to Send']}
          />
          <Transfer
            drizzle={this.props.drizzle}
            drizzleState={this.props.drizzleState}
          />
        </div>
      </div>
    );
  }
}

export default Result;
