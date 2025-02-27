import { client } from "./clientHandler"

type Channels = {
    [serverId: string]: { id: string, name: string }[] | undefined
}
const cachedChannels: Channels = {}

export async function fetchChannels(serverId: string) {
    const channelsFound = cachedChannels[serverId]
    if (channelsFound) return channelsFound
    const guild = await client.guilds.fetch(serverId)
    const member = await guild.members.fetch(client.user!.id)
    const channels = await guild.channels.fetch()
    const textChannels = channels
        .filter(channel => channel !== null && channel.type === "GUILD_TEXT" && channel.permissionsFor(member).has("VIEW_CHANNEL"))
        .map(channel => {
            return {
                id: channel!.id,
                name: channel!.name,
            }
        })
    cachedChannels[serverId] = textChannels
    return textChannels
}