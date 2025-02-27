<script lang="ts">
    import ServersSidebar from "../servers-sidebar.svelte";
    import { page } from "$app/state";
    import Chat from "../chat.svelte";
</script>

<div>
    <title>Discool!</title>
    <ServersSidebar servers={page.data.servers} />
    <Chat channels={page.data.channels} serverId={page.data.serverId}/>
</div>

<style>
    div {
        display: flex;
        width: 100%;
        height: 100%;
        gap: 15px;
    }
</style>
