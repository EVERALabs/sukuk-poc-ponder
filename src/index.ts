import { ponder } from "@/generated";
import { SukukCreation } from "../ponder.schema";

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