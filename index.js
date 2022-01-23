fetch("https://api.openweathermap.org/data/2.5/weather?q= London &appid= f7380ed1acfd76147a57fffb9f68fd11")
    .then(response => response.json())
    .then(data => console.log(data))