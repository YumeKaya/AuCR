function getWeatherByCity(city) {
  return new Promise(((resolve, reject) => {
    if (!city) {
      reject('city is null')
      return
    }
    fetch('http://wthrcdn.etouch.cn/weather_mini?city=' + city)
      .then(response => {
        if (!response) {
          reject('weather not found')
          return
        }
        if (!response.ok) {
          reject('weather not found')
          return
        }
        response.json().then(responseData => {
          let weatherData = responseData.data
          if (!weatherData) {
            reject('weather not found')
            return
          }
          let maxTemperature = weatherData.forecast[0].high
          let minTemperature = weatherData.forecast[0].low
          let temperature = minTemperature.split(' ')[1] + '~' + maxTemperature.split(' ')[1]
          let weather = weatherData.forecast[0].type
          resolve({
            city,
            temperature,
            weather
          })
        })
      })
      .catch(e => {
        reject(e)
      })
  }))
}

export {
  getWeatherByCity
}
