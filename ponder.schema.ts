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
  totalSupply: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

// SukukFactory Events
export const ManagerUpdate = onchainTable("manager_update", (t) => ({
  id: t.text().primaryKey(),
  oldManager: t.text().notNull(),
  newManager: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const VaultUpdate = onchainTable("vault_update", (t) => ({
  id: t.text().primaryKey(),
  oldVault: t.text().notNull(),
  newVault: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

// SukukManager Events
export const YieldDistribution = onchainTable("yield_distribution", (t) => ({
  id: t.text().primaryKey(),
  sukukAddress: t.text().notNull(),
  distributionId: t.bigint().notNull(),
  paymentToken: t.text().notNull(),
  amount: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const YieldClaim = onchainTable("yield_claim", (t) => ({
  id: t.text().primaryKey(),
  user: t.text().notNull(),
  sukukAddress: t.text().notNull(),
  distributionId: t.bigint().notNull(),
  amount: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const RedemptionApproval = onchainTable("redemption_approval", (t) => ({
  id: t.text().primaryKey(),
  user: t.text().notNull(),
  sukukAddress: t.text().notNull(),
  amount: t.text().notNull(),
  totalSupply: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const SaleStatusChange = onchainTable("sale_status_change", (t) => ({
  id: t.text().primaryKey(),
  sukukAddress: t.text().notNull(),
  active: t.boolean().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const SukukStatusUpdate = onchainTable("sukuk_status_update", (t) => ({
  id: t.text().primaryKey(),
  sukukAddress: t.text().notNull(),
  newStatus: t.integer().notNull(), // uint8 mapped to integer
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const Snapshot = onchainTable("snapshot", (t) => ({
  id: t.text().primaryKey(),
  sukukAddress: t.text().notNull(),
  snapshotId: t.bigint().notNull(),
  totalSupply: t.text().notNull(),
  holderCount: t.bigint().notNull(),
  eligibleCount: t.bigint().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const SnapshotCriteriaUpdate = onchainTable("snapshot_criteria_update", (t) => ({
  id: t.text().primaryKey(),
  sukukAddress: t.text().notNull(),
  minAmount: t.text().notNull(),
  minDuration: t.text().notNull(),
  startDate: t.bigint().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const HolderAddition = onchainTable("holder_addition", (t) => ({
  id: t.text().primaryKey(),
  sukukAddress: t.text().notNull(),
  holder: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const HolderUpdate = onchainTable("holder_update", (t) => ({
  id: t.text().primaryKey(),
  sukukAddress: t.text().notNull(),
  holder: t.text().notNull(),
  newBalance: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

// YieldVault Events
export const YieldDeposit = onchainTable("yield_deposit", (t) => ({
  id: t.text().primaryKey(),
  sukukAddress: t.text().notNull(),
  paymentToken: t.text().notNull(),
  amount: t.text().notNull(),
  distributionId: t.bigint().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const YieldVaultManagerAddition = onchainTable("yield_vault_manager_addition", (t) => ({
  id: t.text().primaryKey(),
  manager: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const YieldVaultManagerRemoval = onchainTable("yield_vault_manager_removal", (t) => ({
  id: t.text().primaryKey(),
  manager: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

// SukukToken Events
export const MinterAddition = onchainTable("minter_addition", (t) => ({
  id: t.text().primaryKey(),
  tokenAddress: t.text().notNull(),
  minter: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const MinterRemoval = onchainTable("minter_removal", (t) => ({
  id: t.text().primaryKey(),
  tokenAddress: t.text().notNull(),
  minter: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));

export const StatusChange = onchainTable("status_change", (t) => ({
  id: t.text().primaryKey(),
  tokenAddress: t.text().notNull(),
  oldStatus: t.integer().notNull(), // uint8 mapped to integer
  newStatus: t.integer().notNull(), // uint8 mapped to integer
  blockNumber: t.bigint().notNull(),
  txHash: t.text().notNull(),
  timestamp: t.integer().notNull(),
}));