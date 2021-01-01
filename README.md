# Getting Started with Create React App

Sample project for creating custom token on top of ethereum using ERC20 standard.
![demo](assets/demo.gif)

## How to run the project

1. Run Ganache locally
2. Build th contracts in the `src/ali-eth` by running `truffle compile`
3. Initialize the contract to Ganache by going to `src/ali-eth` and running `truffle compile`
4. Copy the address and port of ganache started to `src/index.js` in the `options` variable
5. Start serving the UI by running `yarn start`
6. Go to `http://localhost:3000` and connect your test account in metamask with the page

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
