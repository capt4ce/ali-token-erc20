import React, { Component } from 'react';

import { newContextComponents } from '@drizzle/react-components';
const { ContractData, ContractForm } = newContextComponents;

class Result extends Component {
  render() {
    const { drizzleState } = this.props;
    const { accounts = {} } = drizzleState || {};

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <ContractData
              drizzle={this.props.drizzle}
              drizzleState={this.props.drizzleState}
              contract="AliToken"
              method="name"
            />
          </h1>
          <p>
            <strong>Total Supply</strong>:{' '}
            <div>
              <ContractData
                drizzle={this.props.drizzle}
                drizzleState={this.props.drizzleState}
                contract="AliToken"
                method="totalSupply"
                methodArgs={[{ from: accounts[0] }]}
              />{' '}
            </div>
          </p>
          <h3>Send Tokens</h3>
          <div className="App-intro">
            <ContractForm
              drizzle={this.props.drizzle}
              drizzleState={this.props.drizzleState}
              contract="AliToken"
              method="transfer"
              labels={['To Address', 'Amount to Send']}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default Result;
