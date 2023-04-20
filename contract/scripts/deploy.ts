import { ethers } from "hardhat";
import "dotenv/config";
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  //URL from where we can extract the metadata for a crypto dev nft
  const metadataURL=METADATA_URL;
  const cryptoDevContract = await ethers.getContractFactory("CryptoDevs");
  const cryptodev = await cryptoDevContract.deploy(
    metadataURL,
    whitelistContract
  );

  await cryptodev.deployed();

  console.log(`Crypto devs deployed to ${cryptodev.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
