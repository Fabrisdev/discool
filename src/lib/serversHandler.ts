import { client } from "./clientHandler"

export const servers = await fetchServers()

export async function fetchServers() {
    const servers = await client.guilds.fetch()
    return servers.map(server => {
        return {
            name: server.name,
            icon_src: server.iconURL(),
            id: server.id,
        }
    })
}

export async function fetchServer(id: string){
    return await client.guilds.fetch(id)
}