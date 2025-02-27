<script lang="ts">
    import ServersSidebar from "../../servers-sidebar.svelte";
    import Chat from "../../chat.svelte";
    import { page } from "$app/state";
</script>

<div>
    <title>Discool!</title>
    <ServersSidebar servers={page.data.servers} />
    <Chat
        channels={page.data.channels}
        serverId={page.data.serverId}
        channelId={page.data.channelId}
        messages={page.data.messages}
    />
</div>

<style>
    div {
        display: flex;
        width: 100%;
        height: 100%;
        gap: 15px;
    }
</style>
