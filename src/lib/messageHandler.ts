import type { Message } from "discord.js-selfbot-v13";
import { fetchServer } from "./serversHandler";
import DOMPurify from "isomorphic-dompurify"
import { client } from "./clientHandler";

export async function fetchLastNMessages(serverId: string, channelId: string, amount: number) {
    const channel = await client.channels.fetch(channelId)
    if (channel === null || channel.type !== "GUILD_TEXT") return
    const messages = await channel.messages.fetch({ limit: amount })
    return messages.reverse().map(message => {
        return formatMessage(message)
    })
}

export function formatMessage(message: Message) {
    const rtf = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
    const dtf = new Intl.DateTimeFormat("es", { hour: '2-digit', minute: '2-digit' })
    const now = new Date()
    const differenceInMiliseconds = message.createdAt.getTime() - now.getTime()
    const differenceInDays = Math.floor(differenceInMiliseconds / (1000 * 60 * 60 * 24)) + 1
    const createdAt = `${rtf.format(differenceInDays, 'day')} a las ${dtf.format(message.createdAt)}`
    const messageWithEmojis = message.content.replace(/<a?:(\w+):(\d+)>/g, (_: string, name: string, id: string) => {
        const isAnimated = message.content.includes(`<a:${name}:${id}>`);
        const src = `https://cdn.discordapp.com/emojis/${id}.${isAnimated ? 'gif' : 'png'}`
        return `<img src=${src} height="50px" alt="Emoji ID ${id}">`;
    });
    const sanitizedMessage = DOMPurify.sanitize(messageWithEmojis)
    return {
        content: sanitizedMessage,
        author: {
            username: message.author.tag,
            profile_image: message.author.avatarURL({ size: 128 })
        },
        createdAt
    }
}