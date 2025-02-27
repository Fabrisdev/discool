<script lang="ts">
    import ServerButton from "./server-button.svelte";
    const { servers } = $props();
</script>

<div>
    {#each servers as server}
        <ServerButton {...server} />
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        background-color: #201c24;
        width: 70px;
        padding: 15px 0 15px 0;
        height: 100%;
        border-radius: 15px;
        overflow-y: scroll;
    }
</style>
