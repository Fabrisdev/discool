<script>
    import Message from "./message.svelte";

    let { messages } = $props()
</script>

<div>
    {#each messages as message}
        <Message {...message}/>
    {/each}
</div>

<style>
    div {
        background-color: #383a40;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        overflow-y: scroll;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>
