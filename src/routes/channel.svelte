<script>
    let { id, name, serverId, selected } = $props();
</script>

<div>
    <a href={`/${serverId}/${id}`} class:selected>{name}</a>
</div>

<style>
    a {
        display: block;
        text-decoration: none;
        color: #fff;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        background-color: #201c24;
        border-radius: 15px;
        padding: 15px;
        line-height: 20px;
    }

    .selected {
        background-color: #404249;
    }
</style>
