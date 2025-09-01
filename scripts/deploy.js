// constant no modificate in future for object "ethers" from hardhat loading 
const { ethers } = require("hardhat");

// asynchronous function to no await like in chronological processes one by one
async function main() {
  // My contract "MyFirstContract" is a constant and no modificate in future. Constant "MyFirstContract" is asigned to: 
  // wait when "getContractFactory" method in "ethers" for "MyFirstContract" 
  // In result "getContractFactory" method create factory "MyFirstContract" object ready to deploy on blockchain. 
  // This factory is ready to deploy the contract on blockchain
  const MyFirstContract = await ethers.getContractFactory("MyFirstContract");

  // constant for ready object = wait to deploy ready new contract from factory contract 
  const myFirstContract = await MyFirstContract.deploy();

  // wait until the contract is fully deployed on blockchain
  await myFirstContract.deployed();

  // show me my contract address after deployed
  console.log("MyFirstContract deployed to:", myFirstContract.address);

}

// start my asynchronized function and when appear any error then start code in {}
main().catch((error) => {
  // show me which error appear
  console.error(error);
  // (set exit code) exit method for all this (prosess) "deploy.js" file and when this all process finish with error show 1
  process.exitCode = 1;
});

