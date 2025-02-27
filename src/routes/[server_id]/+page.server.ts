import { fetchChannels } from '$lib/channelsHandler.js'
import { servers } from '$lib/serversHandler'

export const load = (async ({ params }) => {
    return {
        servers,
        channels: await fetchChannels(params.server_id),
        serverId: params.server_id
    }
})
