import { createConfig } from "@ponder/core";
import { http } from "viem";
import { config } from "dotenv";

// Load environment variables from .env file
config();

const DATABASE_URL = process.env.DATABASE_URL!;
const RPC_URL = process.env.PONDER_RPC_URL_BASE_SEPOLIA!; 

export default createConfig({
  networks: {
    baseSepolia: {
      chainId: 84532,
      transport: http(RPC_URL),
    },
  },
  contracts: {
    SukukFactory: {
      abi: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukukToken",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "issuer",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "manager",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "maxSupply",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "maturityTimestamp",
              "type": "uint256"
            }
          ],
          "name": "SukukTokenCreated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldManager",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newManager",
              "type": "address"
            }
          ],
          "name": "ManagerUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldVault",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newVault",
              "type": "address"
            }
          ],
          "name": "VaultUpdated",
          "type": "event"
        }
      ],
      address: "0x2eFf56ACcFdff2f084D8E35aDD5E6641cf1D64F2",
      network: "baseSepolia",
      startBlock: 28715800,
    },
    SukukManager: {
      abi: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "paymentToken",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "SukukPurchased",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "paymentToken",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "totalSupply",
              "type": "uint256"
            }
          ],
          "name": "RedemptionRequested",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "distributionId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "paymentToken",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "YieldDistributed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "distributionId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "YieldClaimed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "totalSupply",
              "type": "uint256"
            }
          ],
          "name": "RedemptionApproved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "active",
              "type": "bool"
            }
          ],
          "name": "SaleStatusChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint8",
              "name": "newStatus",
              "type": "uint8"
            }
          ],
          "name": "SukukStatusUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "snapshotId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "totalSupply",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "holderCount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "eligibleCount",
              "type": "uint256"
            }
          ],
          "name": "SnapshotTaken",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "minAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "minDuration",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "startDate",
              "type": "uint256"
            }
          ],
          "name": "SnapshotCriteriaUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "holder",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "name": "HolderAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "holder",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newBalance",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "name": "HolderUpdated",
          "type": "event"
        }
      ],
      address: "0xCF69e5646306a8E731da22b2FB86F3b10642a2eF", // SukukManager on Base Sepolia
      network: "baseSepolia",
      startBlock: 28715800,
    },
    YieldVault: {
      abi: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "paymentToken",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "distributionId",
              "type": "uint256"
            }
          ],
          "name": "YieldDeposited",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sukuk",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "distributionId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "YieldClaimed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "manager",
              "type": "address"
            }
          ],
          "name": "ManagerAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "manager",
              "type": "address"
            }
          ],
          "name": "ManagerRemoved",
          "type": "event"
        }
      ],
      address: "0x4b3dBB838FC9F2dFdAeF356367c109dcB88C6896", // YieldVault on Base Sepolia
      network: "baseSepolia",
      startBlock: 28715800,
    },
    SukukToken: {
      abi: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            }
          ],
          "name": "MinterAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            }
          ],
          "name": "MinterRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint8",
              "name": "oldStatus",
              "type": "uint8"
            },
            {
              "indexed": true,
              "internalType": "uint8",
              "name": "newStatus",
              "type": "uint8"
            }
          ],
          "name": "StatusChanged",
          "type": "event"
        }
      ],
      address: "0x0000000000000000000000000000000000000000", // This will be multiple addresses
      network: "baseSepolia",
      startBlock: 28715800,
      includeCallTraces: true,
      filter: {
        event: ["MinterAdded", "MinterRemoved", "StatusChanged"],
      },
    },
  },
  database: {
    kind: "postgres",
    connectionString: DATABASE_URL,
  },
});