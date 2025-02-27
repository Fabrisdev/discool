import { client } from "./clientHandler"

export const servers = await getServers()

export async function getServers() {
    const servers = await client.guilds.fetch()
    return servers.map(server => {
        return {
            name: server.name,
            icon_src: server.iconURL(),
            id: server.id
        }
    })
}