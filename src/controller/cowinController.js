const axios = require("axios")
const { options } = require("../router/route")

let getStates = async (req, res) => {

    try {
        let options =
        {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ status: true, statesLists: data })
    }
    catch (error) {
        res.status(500).send({ status: false, msg: "Internal server error" })
    }
}

const getDistrict = async (req, res) => {
    try {
        let stateId = req.params.stateId
        let options =
        {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ status: true, msg: data })

    } catch (error) {
        res.status(500).send({ status: false, msg: error.msg })
    }
}

const getDistrictById = async (req, res) => {
    try {
        let district = req.query.districtId
        let date = req.query.date
        let options =
        {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ status: true, msg: data })

    } catch (error) {
        res.status(500).send({ status: false, msg: error.msg })

    }

}

const getVaccinationByPinAndDate = async (req, res) => {
    try {
        let pincode = req.query.pincode
        let date = req.query.date

        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`
        }

        let result = await axios(options)

        let data = result.data
        res.status(200).send({ status: true, msg: data })

    } catch (error) {
        res.status(500).send({ status: false, msg: error.msg })
    }
}

//Post Api
//https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP
const postGenerateOtp = async (req, res) => {
    try {
        let info = req.body
        let options =
        {
            method: 'post',
            url: 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
            data: info
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ status: true, msg: data })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.msg })
    }
}
module.exports = { getStates, getDistrict, getDistrictById, getVaccinationByPinAndDate, postGenerateOtp }

































