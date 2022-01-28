fetch("https://api.weatherapi.com/v1/current.json?key= 0373c183e04248c898d55224222701&q=London&aqi=no")
    .then(response => response.json())
    .then(data => console.log(data))