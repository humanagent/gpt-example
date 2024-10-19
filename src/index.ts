import { run, HandlerContext } from "@xmtp/message-kit";
import { handler as agent } from "./handler/agent.js";

run(async (context: HandlerContext) => {
  // Get the message and the address from the sender

  await agent(context);
});
