require("dotenv").config();
const { ethers, getAddress } = require("ethers");
const { getSigner } = require("../utils/provider");
const contractAbi = require("../../artifacts/src/gas-model/VaultIn.sol/VaultIn.json");
const erc20Abi = require("../../artifacts/src/gas-model/ERC20Mock.sol/ERC20Mock.json");

async function main() {
  const signer = getSigner(process.env.PRIVATE_KEY_MEMBER);

  deployedContract = new ethers.Contract(
    process.env.VAULT_CONTRACT,
    contractAbi.abi,
    signer
  );
  const ERC20Address = process.env.ERC20_CONTRACT;
  // approve token transfer
  const token = new ethers.Contract(ERC20Address, erc20Abi.abi, signer);

  const approveTx = await token.approve(
    process.env.VAULT_CONTRACT,
    ethers.parseUnits("1000", 18)
  );
  console.log(`Transaction hash: ${approveTx.hash}`);
  await approveTx.wait();

  console.log(`${erc20Abi.contractName} approved token`);

  //only member can lock the token on contract
  const mintTx = await deployedContract.lockToken(
    getAddress(ERC20Address),
    ethers.parseUnits("100", 18)
  );

  console.log(`Transaction hash: ${mintTx.hash}`);
  await mintTx.wait();
  console.log(`${contractAbi.contractName} member locked token`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
