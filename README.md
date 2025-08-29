It's project deploy my first contract on the Ethereum Sepolia (testnet). 

My steps:
1. I have installed Metamask wallet on my Google Chrome web browser.
https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn
2. I have installed Visual Studio Code, because my PyCharm is so big and very slowly, and Remix on the web browser not have all options. VSC it's great.
https://code.visualstudio.com/Download
3. I had synchronic my VSC with my Github account.
4. It's installed Node.js for environment starter to going to write scripts in JavaScript. 
https://nodejs.org/en/download
5. Its opened new project in VSC "SolidityExperiences". 
6. I was created new contract "MyFirstContract.sol".
7. Its created new reposytory on GitHub.
VSC: Source Control > Publish to GitHub
8. Its created .gitignore file when I was pushed my new repository on GitHub.
9. Instaled Solidity in Extensions VSC.
VSC: Extensions > Solidity (I was choised "juanblanco.solidity")
10. I opened terminal bash and I go to my "Contracts" folder in "SolidityExperiences" folder. 
BASH: cd ~/SolidityExperiences/contracts
11. I was checked contents my folder "contracts" in "Solidity Experiences"
BASH: ls 
12. How I check mine correct folder?
BASH: pwd
13. I always install all necessary tools in the project folder. 
14. I had installed Node.js, then I could install my first pack for my project in correct folder.
15. I started with harmonogram for my project. 
BASH: npm init -y 
(Node.js create new file "package.json" with default setting about my project, exp. name project, version project, scrypts in project etc.)
16. Node.js install "hardhat" toolbox.
BASH: npm install --save-dev hardhat 
(This install is only tool box, not production code. It's only for dev.)
17. I want automatic connection with network testnet Ethereum Sepolia. 
BASH: npm install -D @nomicfoundation/hardhat-toolbox
(This toolbox give me "ethers" plug, it give automatic connection between my code and Sepolia. It easy deploy new contract.)
18. Now I must install "ethers" library. It's to appear in "devdependencies" in package.json file.
BASH: npm install --save ethers 
(It's need it for me to going to deploy contract.)
19. I was installed "dotenv" library in next step.
BASH: npm install --save dotenv
(Thanks to this I can load my ".env" secret file.)
20. I have created my ".env" file in VSC in project. In this file, I have my two variables: "SEPOLIA_RPC_URL" and "PRIVATE_KEY".
21. I need tokens testnet for my Ethereum Sepolia blockchain in Metamask wallet.
22. I know a lot of places, where I can download tokens testnet.
23. I had choiced Google Cloud Web3 delivery when I download my testnet tokens.  
https://cloud.google.com/application/web3/faucet/ethereum/sepolia
(This is only 5% ETH but it is enough.)
24. Now I sign up on the platform:
https://cloud.google.com
When I have my profile, I create on this site new project for me, and it is similar name what I was created in VSC on my computer. I going to copy API address for connect my libraries "Hardhat" and "ethers" with Sepolia Ethereum.
I search: "Blockchain RPC", in up central side. I was chase "Blockchain RPC: product".
I copy JSON-ERC endpoint for Ethereum Sepolia > location: "us-central1", and I paste it in .env file to "SEPOLIA_RPC_URL=".
25. I had written ".env" in ".gitignore" file, before I downloaded my "PRIVATE_KEY" from Metamask.
26. I have downloaded "PRIVATE_KEY" from Metamask and I was wrote it in ".env".
METAMASK: select account > tap three dots > account details > private key > password > and I copy to ".env" file
Now when I going to deploy new contract hardhat automatic send it to blockchain.  Hardhat deploy contract and download gas fee from this transaction. This transact perform in background.
27. Create "hardhat.config.cjs".












Other commits: 
[23.08.2025] Document config filename changes
[24.08.2025] Hardhat error HH8

 
