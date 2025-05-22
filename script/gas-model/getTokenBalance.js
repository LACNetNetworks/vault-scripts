require("dotenv").config();
const { ethers, getAddress } = require("ethers");
const { getSigner } = require("../utils/provider");
const contractAbi = require("../../artifacts/src/gas-model/VaultIn.sol/VaultIn.json");

async function main() {
  const signer = getSigner(process.env.PRIVATE_KEY_OWNER);

  const contract = new ethers.Contract(
    process.env.VAULT_CONTRACT,
    contractAbi.abi,
    signer
  );

  const tokenBalance = await contract.getTokenBalance(
    getAddress(process.env.ERC20_CONTRACT)
  );

  console.log(`Token Balance: ${tokenBalance}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
