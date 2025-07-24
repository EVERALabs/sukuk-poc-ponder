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

export const SukukPurchase = onchainTable("sukuk_purchase", (t) => ({
  id: t.text().primaryKey(), // Will be txHash + logIndex
  buyer: t.text().notNull(),
  sukukAddress: t.text().notNull(), // The sukuk token address
  paymentToken: t.text().notNull(),
  amount: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const RedemptionRequest = onchainTable("redemption_request", (t) => ({
  id: t.text().primaryKey(), // Will be txHash + logIndex
  user: t.text().notNull(),
  sukukAddress: t.text().notNull(), // The sukuk token address
  amount: t.text().notNull(),
  paymentToken: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));