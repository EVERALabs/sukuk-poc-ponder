import { onchainTable } from "@ponder/core";

export const SukukCreation = onchainTable("sukuk_creation", (t) => ({
  id: t.text().primaryKey(),
  tokenAddress: t.text().notNull(),
  name: t.text().notNull(),
  symbol: t.text().notNull(),
  issuer: t.text().notNull(),
  manager: t.text().notNull(),
  maxSupply: t.text().notNull(),
  maturityTimestamp: t.bigint().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));