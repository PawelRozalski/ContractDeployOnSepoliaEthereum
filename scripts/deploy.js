const { ethers } = require("hardhat");

async function main() {
  const MyFirstContract = await ethers.getContractFactory("MyFirstContract");
  const myFirstContract = await MyFirstContract.deploy();
  await myFirstContract.deployed();
  console.log("MyFirstContract deployed to:", myFirstContract.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

