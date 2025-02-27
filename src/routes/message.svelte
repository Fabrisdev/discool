<script>
    let { content, author, createdAt } = $props()
</script>

<div id="message">
    <img src={author.profile_image} alt="Avatar de {author.tag}">
    <div id="inner-message">
        <div id="info">
            <p id="username">{author.username}</p><p id="created-at">{createdAt}</p>
        </div>
        <p>{content}</p>
    </div>
</div>

<style>
    img{
        height: 50px;
        width: 50px;
        border-radius: 15px;
    }

    #message{
        display: flex;
        gap: 15px;
        background-color: #201c24;
        border-radius: 15px;
        padding: 15px;
    }

    #inner-message{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    #info{
        display: flex;
        justify-content: space-between;
    }

    #created-at{
        font-size: 12px;
        opacity: 0.7;
    }
</style>