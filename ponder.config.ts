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
        }
      ],
      address: "0x4dae5c3E091dF81F3900a961d14ae74848998a63",
      network: "baseSepolia",
      startBlock: 28715800,
    },
  },
  database: {
    kind: "postgres",
    connectionString: DATABASE_URL,
  },
});