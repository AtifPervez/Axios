const axios = require('axios')

const getWeatherOfCity = async (req, res) => {
    try {
        let city = req.query.city
        let appid = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options)
        
        let data = result.data
        
        res.status(200).send({ status: true, weatherDataOfcity: data })

    } catch (error) {
        res.status(500).send({ status: false, msg: error.msg })
    }
}

const getTempOfCity = async (req, res) => {

    try {
        let city = req.query.city
        let appid = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options)
        
        let data = result.data
       
        res.status(200).send({ status: true, temp: data.main.temp })

    } catch (error) {
        res.status(500).send({ status: false, msg: error.msg })
    }
}

const sortCities = async (req, res) => {


try {
    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let cityObjOfArray = []
    for (let i = 0; i < cities.length; i++) {

        let obj = { city: cities[i] }

        let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=54fb3e03a555db4d2b82f345accaed0c`)
        let data=result.data
        obj.temp=data.main.temp
        
        cityObjOfArray.push(obj)
    }
    
    let sortedCities=cityObjOfArray.sort((a,b)=>{
        return a.temp - b .temp
    })
    
    res.status(200).send({status:true,msg:sortedCities})

    
} catch (error) {
    res.status(500).send({status:false,msg:error.msg})
}

}


module.exports = { getWeatherOfCity, getTempOfCity, sortCities }
  


        
        
        
        
        
        



























