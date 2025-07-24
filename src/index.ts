import { ponder } from "@/generated";
import { SukukCreation, SukukPurchase, RedemptionRequest } from "../ponder.schema";

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
    blockNumber: event.block.number,
    txHash: event.transaction.hash,
    timestamp: blockTime,
  });
  
  console.log(`✅ Indexed Redemption Request: ${event.args.user} requested redemption of ${event.args.amount} sukuk at ${event.args.sukuk}`);
});