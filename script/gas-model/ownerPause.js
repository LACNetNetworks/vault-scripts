require("dotenv").config();
const { ethers, getAddress } = require("ethers");
const { getSigner } = require("../utils/provider");
const contractAbi = require("../../artifacts/src/gas-model/VaultIn.sol/VaultIn.json");

async function main() {
  const signer = getSigner(process.env.PRIVATE_KEY_OWNER);

  deployedContract = new ethers.Contract(
    process.env.VAULT_CONTRACT,
    contractAbi.abi,
    signer
  );

  //only contractOwner can pause the contract
  const mintTx = await deployedContract.pause();

  console.log(`Transaction hash: ${mintTx.hash}`);
  await mintTx.wait();
  console.log(`${contractAbi.contractName} contract paused`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
