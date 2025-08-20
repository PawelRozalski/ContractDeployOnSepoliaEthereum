import { ethers } from "hardhat";

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();
  await hello.waitForDeployment();

  console.log("HelloWorld deployed to:", await hello.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});