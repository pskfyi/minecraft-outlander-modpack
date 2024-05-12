import { ENV } from "../../datagen/constants.ts";

const command = new Deno.Command("code", {
  args: [ENV.INSTANCE_DIR],
  stdin: "piped",
  stdout: "piped",
});

const child = command.spawn();
await child.status;
