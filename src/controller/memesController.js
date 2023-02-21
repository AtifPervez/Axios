const axios = require('axios')

const getMemes = async (req, res) => {
    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ status: true, msg: data })

    } catch (error) {
        res.status(500).send({ status: false, msg: error.msg })
    }
}

const postMemes = async (req, res) => {
    try {
        
// https://api.imgflip.com/caption_image
        let options={
            method:'post',
            url:'https://api.imgflip.com/caption_image?template_id=247375501&text0=hello&text1=this&userName=chewie12345&password=meme@123',
            
        }
        let result=await axios(options)
        let data=result.data
        res.status(200).send({status:true,msg:data})


    } catch (error) {
        res.status(500).send({ status: false, msg: error.msg })
    }


}

module.exports = { getMemes, postMemes }











