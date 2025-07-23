import { createConfig } from "@ponder/core";
import { http } from "viem";

export default createConfig({
  networks: {
    baseSepolia: {
      chainId: 84532,
      transport: http("https://base-sepolia.g.alchemy.com/v2/4GpFtglvPYTbBRHabUEOk"),
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
    connectionString: "postgresql://postgres:postgres@localhost:5432/sukuk_poc",
  },
});