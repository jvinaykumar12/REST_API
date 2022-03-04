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
fetch("https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=inr&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true")
    .then(response => {
        if(!response.ok){
            throw Error("hello iam error")
        }
        return response.json()
    })
    .then(data => { 
        console.log("hh")
        console.log(data)
        document.getElementById('crypto').innerText = 'Dogecoin crypto price = ' + data.dogecoin.inr + ' Rupees'
    })
    .catch(error => {
        console.log("hi2")
        console.log(error)
        console.log("unable to find the given address")
    }) 


function CurrentTime() {
    const d = new Date();
document.getElementById("time").innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`
}

setInterval(CurrentTime,1000);
       

navigator.geolocation.getCurrentPosition((pos)=> {
    let crd = pos.coords; 
    console.log(crd.latitude)
    console.log(crd.longitude)
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric `)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return new Promise((resolve) => {
                resolve(data)
            })
        })
        .then(data => {
            document.getElementById("wicon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)}°C <br> ${data.name}`

        })
}) 





