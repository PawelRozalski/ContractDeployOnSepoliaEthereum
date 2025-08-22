require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // ładuje zmienne z .env

module.exports = {
  solidity: "0.8.29",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,      // np. Infura/Alchemy URL
      accounts: [process.env.PRIVATE_KEY] // Twój klucz prywatny
    },
  },
};