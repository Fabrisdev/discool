<script>
    import ChannelsSidebar from "./channels-sidebar.svelte";
    import Messages from "./messages.svelte";
    let { channels, serverId, channelId = "" } = $props();
</script>

<span>
    <ChannelsSidebar {channels} {serverId} {channelId} />
    <div>
        <Messages />
        <input type="text" />
    </div>
</span>

<style>
    span {
        width: 100%;
        height: 100%;
        display: flex;
        background-color: #201c24;
        border-radius: 15px;
        padding: 15px;
        gap: 15px;
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    input {
        width: 100%;
        background-color: #383a40;
        height: 50px;
        border-radius: 15px;
        bottom: 0;
        border: none;
    }

    input:focus {
        outline: none;
    }
</style>
