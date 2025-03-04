import { client } from "./clientHandler"

console.log("EJECUTANDO SERVERSHANDLER")
console.log(await client)

export const servers = await fetchServers()

export async function fetchServers() {
    console.log("Obteniendo servers...")
    console.log(await client)
    const a = await client
    console.log("si lo que está debajo de este mensaje tampoco se muestra me pego un tiro")
    console.log(a)
    /*const servers = await client.guilds.fetch()
    return servers.map(server => {
        return {
            name: server.name,
            icon_src: server.iconURL(),
            id: server.id,
        }
    })*/
}

export async function fetchServer(id: string) {
    return await client.guilds.fetch(id)
}