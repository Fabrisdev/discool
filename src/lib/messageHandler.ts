import { fetchServer } from "./serversHandler";

export async function fetchLastNMessages(serverId: string, channelId: string, amount: number){
    const server = await fetchServer(serverId)
    const channel = await server.channels.fetch(channelId)
    if(channel === null || channel.type !== "GUILD_TEXT") return
    const messages = await channel.messages.fetch({ limit: amount })
    return messages.reverse().map(message => {
        const rtf = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
        const dtf = new Intl.DateTimeFormat("es", { hour: '2-digit', minute: '2-digit' })
        const now = new Date()
        const differenceInMiliseconds = message.createdAt.getTime() - now.getTime()
        const differenceInDays = Math.floor(differenceInMiliseconds / (1000 * 60 * 60 * 24)) + 1
        const createdAt = `${rtf.format(differenceInDays, 'day')} a las ${dtf.format(message.createdAt)}`
        return {
            content: message.content,
            author: {
                username: message.author.tag,
                profile_image: message.author.avatarURL({ size: 128 })
            },
            createdAt
        }
    })
}
