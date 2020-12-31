import React, { Component } from 'react';
import './App.css';
import Result from './Result';

class App extends Component {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(async () => {
      // every time the store updates, grab the state from drizzle
      let drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading) return 'Loading Drizzle...';

    return (
      <Result
        drizzle={this.props.drizzle}
        drizzleState={this.state.drizzleState}
      />
    );

    // const { drizzleState, loading } = this.state;
    // const { accounts = [] } = drizzleState || {};
    // console.log(
    //   'debug drizzleState',
    //   loading,
    //   drizzleState,
    //   this.props.drizzle
    // );

    // if (!loading) {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <h1 className="App-title">Ali Token</h1>
    //         <p>
    //           <strong>Total Supply</strong>:{' '}
    //           {/* <ContractData
    //             contract="AliToken"
    //             method="totalSupply"
    //             methodArgs={[{ from: accounts[0] }]}
    //           />{' '}
    //           <ContractData contract="AliToken" method="symbol" hideIndicator /> */}
    //         </p>
    //         <p>
    //           <strong>My Balance</strong>:{' '}
    //           {/* <ContractData
    //             contract="AliToken"
    //             method="balanceOf"
    //             methodArgs={[accounts[0]]}
    //           /> */}
    //         </p>
    //         <h3>Send Tokens</h3>
    //       </header>
    //       <div className="App-intro">
    //         {/* <ContractForm
    //           contract="AliToken"
    //           method="transfer"
    //           labels={['To Address', 'Amount to Send']}
    //         /> */}
    //       </div>
    //     </div>
    //   );
    // }

    // return <div>Loading dapp...</div>;
  }
}

export default App;
