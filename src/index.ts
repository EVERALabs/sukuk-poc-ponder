import { ponder } from "@/generated";
import { 
  SukukCreation, 
  SukukPurchase, 
  RedemptionRequest,
  ManagerUpdate,
  VaultUpdate,
  YieldDistribution,
  YieldClaim,
  RedemptionApproval,
  SaleStatusChange,
  SukukStatusUpdate,
  Snapshot,
  SnapshotCriteriaUpdate,
  HolderAddition,
  HolderUpdate,
  YieldDeposit,
  YieldVaultManagerAddition,
  YieldVaultManagerRemoval,
  MinterAddition,
  MinterRemoval,
  StatusChange
} from "../ponder.schema";

ponder.on("SukukFactory:SukukTokenCreated", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  
  await context.db.insert(SukukCreation).values({
    id: event.args.sukukToken,
    tokenAddress: event.args.sukukToken,
    name: event.args.name,
    symbol: event.args.symbol,
    issuer: event.args.issuer,
    manager: event.args.manager,
    maxSupply: event.args.maxSupply.toString(),
    maturityTimestamp: event.args.maturityTimestamp,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed new Sukuk: ${event.args.name} (${event.args.symbol})`);
});

ponder.on("SukukManager:SukukPurchased", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(SukukPurchase).values({
    id: id,
    buyer: event.args.buyer,
    sukukAddress: event.args.sukuk,
    paymentToken: event.args.paymentToken,
    amount: event.args.amount.toString(),
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Sukuk Purchase: ${event.args.buyer} bought ${event.args.amount} sukuk at ${event.args.sukuk}`);
});

ponder.on("SukukManager:RedemptionRequested", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(RedemptionRequest).values({
    id: id,
    user: event.args.user,
    sukukAddress: event.args.sukuk,
    amount: event.args.amount.toString(),
    paymentToken: event.args.paymentToken,
    totalSupply: event.args.totalSupply.toString(),
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Redemption Request: ${event.args.user} requested redemption of ${event.args.amount} sukuk at ${event.args.sukuk}`);
});

// SukukFactory Events
ponder.on("SukukFactory:ManagerUpdated", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(ManagerUpdate).values({
    id: id,
    oldManager: event.args.oldManager,
    newManager: event.args.newManager,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Manager Update: ${event.args.oldManager} -> ${event.args.newManager}`);
});

ponder.on("SukukFactory:VaultUpdated", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(VaultUpdate).values({
    id: id,
    oldVault: event.args.oldVault,
    newVault: event.args.newVault,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Vault Update: ${event.args.oldVault} -> ${event.args.newVault}`);
});

// SukukManager Events
ponder.on("SukukManager:YieldDistributed", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(YieldDistribution).values({
    id: id,
    sukukAddress: event.args.sukuk,
    distributionId: event.args.distributionId,
    paymentToken: event.args.paymentToken,
    amount: event.args.amount.toString(),
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Yield Distribution: ${event.args.amount} distributed for sukuk ${event.args.sukuk}`);
});

ponder.on("SukukManager:YieldClaimed", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(YieldClaim).values({
    id: id,
    user: event.args.user,
    sukukAddress: event.args.sukuk,
    distributionId: event.args.distributionId,
    amount: event.args.amount.toString(),
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Yield Claim: ${event.args.user} claimed ${event.args.amount}`);
});

ponder.on("SukukManager:RedemptionApproved", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(RedemptionApproval).values({
    id: id,
    user: event.args.user,
    sukukAddress: event.args.sukuk,
    amount: event.args.amount.toString(),
    totalSupply: event.args.totalSupply.toString(),
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Redemption Approval: ${event.args.user} approved for ${event.args.amount}`);
});

ponder.on("SukukManager:SaleStatusChanged", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(SaleStatusChange).values({
    id: id,
    sukukAddress: event.args.sukuk,
    active: event.args.active,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Sale Status Change: ${event.args.sukuk} sale ${event.args.active ? 'started' : 'ended'}`);
});

ponder.on("SukukManager:SukukStatusUpdated", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(SukukStatusUpdate).values({
    id: id,
    sukukAddress: event.args.sukuk,
    newStatus: event.args.newStatus,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Sukuk Status Update: ${event.args.sukuk} -> status ${event.args.newStatus}`);
});

ponder.on("SukukManager:SnapshotTaken", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(Snapshot).values({
    id: id,
    sukukAddress: event.args.sukuk,
    snapshotId: event.args.snapshotId,
    totalSupply: event.args.totalSupply.toString(),
    holderCount: event.args.holderCount,
    eligibleCount: event.args.eligibleCount,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Snapshot: ${event.args.sukuk} snapshot #${event.args.snapshotId}`);
});

ponder.on("SukukManager:SnapshotCriteriaUpdated", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(SnapshotCriteriaUpdate).values({
    id: id,
    sukukAddress: event.args.sukuk,
    minAmount: event.args.minAmount.toString(),
    minDuration: event.args.minDuration.toString(),
    startDate: event.args.startDate,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Snapshot Criteria Update for ${event.args.sukuk}`);
});

ponder.on("SukukManager:HolderAdded", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(HolderAddition).values({
    id: id,
    sukukAddress: event.args.sukuk,
    holder: event.args.holder,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: Number(event.args.timestamp),
  });
  
  console.log(`✅ Indexed Holder Addition: ${event.args.holder} added to ${event.args.sukuk}`);
});

ponder.on("SukukManager:HolderUpdated", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(HolderUpdate).values({
    id: id,
    sukukAddress: event.args.sukuk,
    holder: event.args.holder,
    newBalance: event.args.newBalance.toString(),
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: Number(event.args.timestamp),
  });
  
  console.log(`✅ Indexed Holder Update: ${event.args.holder} balance -> ${event.args.newBalance}`);
});

// YieldVault Events
ponder.on("YieldVault:YieldDeposited", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(YieldDeposit).values({
    id: id,
    sukukAddress: event.args.sukuk,
    paymentToken: event.args.paymentToken,
    amount: event.args.amount.toString(),
    distributionId: event.args.distributionId,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Yield Deposit: ${event.args.amount} deposited for sukuk ${event.args.sukuk}`);
});

ponder.on("YieldVault:YieldClaimed", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(YieldClaim).values({
    id: id,
    user: event.args.user,
    sukukAddress: event.args.sukuk,
    distributionId: event.args.distributionId,
    amount: event.args.amount.toString(),
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Yield Claim (Vault): ${event.args.user} claimed ${event.args.amount}`);
});

ponder.on("YieldVault:ManagerAdded", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(YieldVaultManagerAddition).values({
    id: id,
    manager: event.args.manager,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Yield Vault Manager Addition: ${event.args.manager}`);
});

ponder.on("YieldVault:ManagerRemoved", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(YieldVaultManagerRemoval).values({
    id: id,
    manager: event.args.manager,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Yield Vault Manager Removal: ${event.args.manager}`);
});

// SukukToken Events
ponder.on("SukukToken:MinterAdded", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(MinterAddition).values({
    id: id,
    tokenAddress: event.log.address,
    minter: event.args.minter,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Minter Addition: ${event.args.minter} for token ${event.log.address}`);
});

ponder.on("SukukToken:MinterRemoved", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(MinterRemoval).values({
    id: id,
    tokenAddress: event.log.address,
    minter: event.args.minter,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Minter Removal: ${event.args.minter} for token ${event.log.address}`);
});

ponder.on("SukukToken:StatusChanged", async ({ event, context }) => {
  const blockTime = Number(event.block.timestamp);
  const id = `${event.transaction.hash}-${event.log.logIndex}`;
  
  await context.db.insert(StatusChange).values({
    id: id,
    tokenAddress: event.log.address,
    oldStatus: event.args.oldStatus,
    newStatus: event.args.newStatus,
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Status Change: ${event.log.address} ${event.args.oldStatus} -> ${event.args.newStatus}`);
});