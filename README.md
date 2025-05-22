# Vault Scripts

Utility scripts to interact with the `VaultIn` smart contract, used on the LACChain network (or any EVM-compatible chain).

## 📁 Project Structure

```
.
├── artifacts/                # Compiled artifacts from Hardhat
├── build-info/              # Build information from Hardhat
├── node_modules/            # NPM dependencies
├── script/
│   ├── gas-model/           # Scripts to interact with the VaultIn contract
│   │   ├── getMaxTransaction.js
│   │   ├── getTokenBalance.js
│   │   ├── memberLockToken.js
│   │   ├── ownerBurnToken.js
│   │   ├── ownerPause.js
│   │   ├── ownerSetMemberAddress.js
│   │   ├── ownerUnpause.js
│   │   └── setMaxTransaction.js
│   └── utils/
│       └── provider.js      # Provider, RPC, and wallet setup
├── src/                     # Additional source code or contracts
├── .env                     # Environment variables (private key, RPC, etc.)
├── hardhat.config.js        # Hardhat configuration
├── package.json             # NPM dependencies and scripts
└── README.md                # Project documentation
```

## ⚙️ Requirements

- Node.js >= 16
- NPM or Yarn
- Hardhat (`npx hardhat`)
- Owner's private key and the `VaultIn` contract address

## 📦 Installation

```bash
git clone https://github.com/LACNetNetworks/vault-scripts.git
cd vault-scripts
npm install
```

Create a `.env` file with the following variables:

```env
RPC_URL=http://<your-lacchain-node>:8545
PRIVATE_KEY=0x...
CONTRACT_ADDRESS=0x...
```

## 🧪 Available Scripts

### Read-Only

| Script                 | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `getMaxTransaction.js` | Fetch the maximum allowed transactions per period |
| `getTokenBalance.js`   | Query the token balance on the VaultIn contract   |

### Member Actions

| Script               | Description                         |
| -------------------- | ----------------------------------- |
| `memberLockToken.js` | Lock tokens in the VaultIn contract |

### Owner Actions

| Script                     | Description                          |
| -------------------------- | ------------------------------------ |
| `ownerPause.js`            | Pause the contract                   |
| `ownerUnpause.js`          | Unpause the contract                 |
| `ownerSetMemberAddress.js` | Set a new member address             |
| `ownerBurnToken.js`        | Burn stored tokens                   |
| `setMaxTransaction.js`     | Change the monthly transaction limit |

## ▶️ Running a Script

```bash
node script/gas-model/memberLockToken.js
```

All scripts use the provider and signer configured in `script/utils/provider.js`.
