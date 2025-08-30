// loading toolbox with labrary ethers
require("@nomicfoundation/hardhat-toolbox");
// loading library dotenv and config for look and load ".env" file
require("dotenv").config();

// create constants and loading this consts from .env file 
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// object: export hardhat configuration
// {} object [] list () function
module.exports = {
  // loading and defining Solidity and his version
  solidity: {
    compilers: [
      {
        version: "0.8.28",
      },
      {
        version: "0.8.29",
      },
    ],
  },
  // loading and defining network and his address plus defining private key from my metamask wallet
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};
