/// <reference types="node" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      PONDER_RPC_URL_BASE_SEPOLIA: string;
    }
  }
}

export {};