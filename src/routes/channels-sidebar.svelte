<script>
    import Channel from "./channel.svelte";

    let { channels, serverId, channelId } = $props();
</script>

<div>
    {#each channels as channel}
        {#if channel.id === channelId}
            <Channel {...channel} {serverId} selected />
        {:else}
            <Channel {...channel} {serverId} />
        {/if}
    {/each}
</div>

<style>
    div {
        background-color: #383a40;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 15px;
        overflow-y: scroll;
        width: 300px;
    }
</style>
