<script lang="ts">
    import type { Action } from "svelte/action";
    import Message from "./message.svelte";
    import { onMount } from "svelte";
    let { messages, channelId } = $props()
    
    const scrollToBottom: Action = div => {
        div.scrollTo(0, div.scrollHeight)
    }
    
    onMount(() => {
        const ws = new WebSocket("ws://localhost:8080")
        ws.addEventListener("message", event => {
            const parsedData = JSON.parse(event.data)
            if(channelId != parsedData.channelId) return
            console.log(parsedData.message)
            messages = [...messages, parsedData.message]
        })
    })
</script>

<div use:scrollToBottom>
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
