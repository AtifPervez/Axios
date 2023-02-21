const express=require('express')
const router=express.Router()
const cowinController=require('../controller/cowinController')
const weatherController=require('../controller/weatherController')
const memesController=require('../controller/memesController')
//cowin api
router.get('/getStates',cowinController.getStates)
router.get('/getDistricts/:stateId',cowinController.getDistrict)
router.get('/getDistrictsById',cowinController.getDistrictById)
router.get('/getVaccinationByPinAndDate',cowinController.getVaccinationByPinAndDate)
router.post('/postGenerateOtp',cowinController.postGenerateOtp)

//weather api
router.get('/getWeatherOfCity',weatherController.getWeatherOfCity)
router.get('/getTempOfCity',weatherController.getTempOfCity)
router.get('/sortCities',weatherController.sortCities)

//memes api
router.get('/getMemes',memesController.getMemes)
router.post('/postMemes',memesController.postMemes)



module.exports=router