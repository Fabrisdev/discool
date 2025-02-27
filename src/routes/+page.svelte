<script lang="ts">
    import ServersSidebar from "./servers-sidebar.svelte";
    import type { PageProps } from "./$types";
    const { data }: PageProps = $props();
    const { servers } = data;
</script>

<div>
    <title>Discool!</title>
    <ServersSidebar {servers} />
</div>

<style>
    div {
        display: flex;
        width: 100%;
        height: 100%;
        gap: 15px;
    }
</style>
