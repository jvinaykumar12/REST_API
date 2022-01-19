fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(response => response.json())
    .then(data => {
        console.log(data.urls)
        return new Promise((resolve)=>{
            resolve(data)
        })
    })
    .then(imageLink => {
        document.body.style.backgroundImage = `url(${imageLink.urls.full})`
        document.getElementById('authorname').innerHTML = `${imageLink.user.username}`
    })
