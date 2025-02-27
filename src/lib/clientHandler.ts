import { Client } from "discord.js-selfbot-v13";
import { env } from "$env/dynamic/private";

export const client = await setupClient()

async function setupClient() {
    const client = new Client();

    await new Promise<void>(resolve => {
        client.once("ready", () => resolve());
        client.login(env.DISCORD_TOKEN);
    })

    return client
}