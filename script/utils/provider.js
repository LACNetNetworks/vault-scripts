require("dotenv").config();
const { ethers } = require("ethers");
const {
  LacchainProvider,
  LacchainSigner,
} = require("@lacchain/gas-model-provider");

function getSigner(privateKey) {
  const now = new Date();
  const expiration_date = now.getTime() + 5 * 60 * 1000;

  const provider = new LacchainProvider(process.env.RPC_NODE);

  return new LacchainSigner(
    privateKey,
    provider,
    process.env.NODE_ADDRESS,
    expiration_date
  );
}

module.exports = { getSigner };
