//https://eth-ropsten.alchemyapi.io/v2/qHjjq4j6DLcwsh2p97CEPuSCjnnPjR5H

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/qHjjq4j6DLcwsh2p97CEPuSCjnnPjR5H",
      accounts: [
        "d800b2de46ef5c495c72d89de708367d3f7e67f1e6983e87deeaf4e9a9e778db",
      ],
    },
  },
};
