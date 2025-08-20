import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

if (!process.env.PRIVATE_KEY || !process.env.SEPOLIA_RPC_URL) {
  throw new Error("Please set PRIVATE_KEY and SEPOLIA_RPC_URL in .env file");
}

const config: HardhatUserConfig = {
  solidity: "0.8.29",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
};

export default config;