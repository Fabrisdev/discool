import { Client, Message } from "discord.js-selfbot-v13";
import { env } from "$env/dynamic/private";
import { WebSocket, WebSocketServer } from 'ws'
import { formatMessage } from "./messageHandler";

console.log("CREANDO CLIENTE")
export const client = await setupClient()
console.log("CLIENTE PRONTO")
export const wss = setupMessageNotificatorWebsocket()
const clientsToNotify: WebSocket[] = []
function notifyNewMessage(channelId: string, message: Message) {
    clientsToNotify.forEach(client => {
        client.send(JSON.stringify({
            channelId,
            message: formatMessage(message)
        }))
    })
}

async function setupClient() {
    console.log("Empezó a crear el cliente")
    return 5
    /*const client = new Client();
    client.on('messageCreate', (message) => {
        notifyNewMessage(message.channel.id, message)
    });

    await new Promise<void>(resolve => {
        client.once("ready", () => {
            console.log("Bot pronto!")
            resolve()
        });
        client.login(env.DISCORD_TOKEN);
    })

    console.log("Saliendo de setup client...")

    return client*/
}

function setupMessageNotificatorWebsocket() {
    const wss = new WebSocketServer({ port: 8080 })
    wss.on("connection", ws => {
        clientsToNotify.push(ws)
    })
    return wss
}