fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(response => {
        if(!response.ok){
            throw Error("hello iam error")
        }
        return response.json()
    })
    .then(imageLink => {
        document.body.style.backgroundImage = `url(${imageLink.urls.full})`
        document.getElementById('authorname').innerHTML = `${imageLink.user.username}`
    })
    .catch((err)=> {
        console.log('hi1')
        console.log(err)
        document.body.style.backgroundImage = `url("dutch.webp")`
        document.getElementById('authorname').innerText = 'local'
    })

// fetch("https://api.coingecko.com/api/v3/simple/price?ids=sfdg&vs_currencies=inr")
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(response => {
        if(!response.ok){
            throw Error("hello iam error")
        }
        return response.json()
    })
    .then(data => { 
        console.log("hh")
        console.log(data)
        // document.getElementById('crypto').innerText = 'crypto price = ' + data.dogecoin.inr + ' in Rupees hello '
    })
    .catch(error => {
        console.log("hi2")
        console.log(error)
        console.log("unable to find the given address")
    }) 