import { fetchChannels } from '$lib/channelsHandler.js'
import { fetchLastNMessages } from '$lib/messageHandler.js'
import { servers } from '$lib/serversHandler'

export const load = (async ({ params }) => {
    const { server_id, channel_id } = params
    return {
        servers,
        channels: await fetchChannels(server_id),
        serverId: server_id,
        channelId: channel_id,
        messages: await fetchLastNMessages(server_id, channel_id, 10)
    }
})