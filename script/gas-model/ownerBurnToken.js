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

  const ERC20Address = process.env.ERC20_CONTRACT;
  //only contractOwner can burn the tokens
  const mintTx = await deployedContract.burnToken(
    getAddress(ERC20Address),
    ethers.parseUnits("10", 18)
  );

  console.log(`Transaction hash: ${mintTx.hash}`);
  await mintTx.wait();
  console.log(`${contractAbi.contractName} token burned`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
