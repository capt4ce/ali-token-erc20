import React from 'react';

class Transfer extends React.Component {
  state = { stackId: null, _to: null, _value: null };

  handleKeyDown = (e) => {
    // if the enter key is pressed, set the value with the string
    if (e.keyCode === 13) {
      this.setValue();
    }
  };

  setValue = () => {
    const { drizzle, drizzleState } = this.props;
    const { _to, _value } = this.state;
    const contract = drizzle.contracts.AliToken;

    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods['transfer'].cacheSend(_value, {
      from: drizzleState.accounts[0],
      _to,
      _value,
    });

    // save the `stackId` for later reference
    this.setState({ stackId });
  };

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;
    console.log('debug transactions', transactions);

    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];

    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;

    // otherwise, return the transaction status
    return `Transaction status: ${
      transactions[txHash] && transactions[txHash].status
    }`;
  };

  render() {
    console.log('debug state', this.state);
    return (
      <div>
        <div>
          To:{' '}
          <input
            type="text"
            onChange={(e) => this.setState({ _to: e.target.value })}
          />
        </div>
        <div>
          Amount:{' '}
          <input
            type="text"
            onChange={(e) => this.setState({ _value: e.target.value })}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        <div>{this.getTxStatus()}</div>
      </div>
    );
  }
}

export default Transfer;
