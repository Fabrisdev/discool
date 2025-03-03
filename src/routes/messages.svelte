<script lang="ts">
    import type { Action } from "svelte/action";
    import Message from "./message.svelte";
    import { onDestroy, onMount, tick } from "svelte";
    let { messages, channelId } = $props();
    let div: HTMLDivElement = $state()!;

    const scrollToBottom: Action = (div) => {
        div.scrollTo(0, div.scrollHeight);
    };

    onMount(() => {
        const ws = new WebSocket("ws://localhost:8080");
        ws.addEventListener("message", (event) => {
            const parsedData = JSON.parse(event.data);
            if (channelId != parsedData.channelId) return;
            if (div.scrollTop + div.clientHeight === div.scrollHeight) {
                messages = [...messages, parsedData.message];
                tick().then(() => scrollToBottom(div));
                return;
            }
            messages = [...messages, parsedData.message];
        });
        onDestroy(() => {
            ws.close();
        });
    });
</script>

<div use:scrollToBottom bind:this={div}>
    {#each messages as message}
        <Message {...message} />
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
