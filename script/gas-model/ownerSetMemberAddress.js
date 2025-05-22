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

  const memberAddress = process.env.MEMBER_ADDRESS;
  //only contractOwner can set the member address
  const mintTx = await deployedContract.setMemberAddress(
    getAddress(memberAddress)
  );

  console.log(`Transaction hash: ${mintTx.hash}`);
  await mintTx.wait();
  console.log(`${contractAbi.contractName} contract member address set`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
