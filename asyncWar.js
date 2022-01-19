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
    .catch((err)=>{
        console.log(err)
        console.log('hi')
        document.body.style.backgroundImage = `url("dutch.webp")`
        document.getElementById('authorname').innerText = 'local'
    })

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=INR")
    .then(response => response.json())
    .then(data => {
        console.log(data.bitcoin.inr)
        document.getElementById('crypto').innerText = 'crypto price = ' + data.bitcoin.inr + ' Rupees '
    })