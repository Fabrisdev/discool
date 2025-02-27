<script lang="ts">
    let { name, icon_src, id } = $props();
    let popupActive = $state(false);
    let popupPosition = $state({ left: 0, top: 0 });

    function showInfoPopup(event: MouseEvent) {
        popupActive = true;
        const imgRect = (
            event.target as HTMLImageElement
        ).getBoundingClientRect();
        popupPosition.left = imgRect.left + 75;
        popupPosition.top = imgRect.top + 5;
    }
</script>

<div>
    <a href={`/${id}`}>
        <img
            src={icon_src}
            alt={name}
            onmouseenter={showInfoPopup}
            onmouseleave={() => (popupActive = false)}
        />
    </a>
</div>
<p
    class:popup-active={popupActive}
    style="left: {popupPosition.left}px; top: {popupPosition.top}px"
>
    {name}
</p>

<style>
    img {
        border-radius: 15px;
        height: 50px;
        width: 50px;
    }

    img:hover {
        cursor: pointer;
    }

    .popup-active {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
    }

    p {
        display: none;
        background-color: #181414;
        border-left: 1px solid #181414;
        height: 40px;
        border-radius: 15px;
        text-wrap: nowrap;
        padding: 0 15px 0 15px;
    }

    p::before {
        content: "";
        position: absolute;
        left: -10px;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-right: 10px solid #181414;
    }

    div {
        display: flex;
        gap: 10px;
        position: relative;
        justify-content: center;
        align-items: center;
    }
</style>
