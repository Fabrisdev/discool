import { fetchChannels, sendMessage } from '$lib/channelsHandler.js'
import { fetchLastNMessages } from '$lib/messageHandler.js'
import { servers } from '$lib/serversHandler'
import type { Actions } from "./$types"

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

export const actions = {
    send: async ({ request, params }) => {
        const data = await request.formData()
        const text = data.get("text")
        if (text === null) return
        sendMessage({
            channelId: params.channel_id,
            message: text.toString()
        })
    }
} satisfies Actions