// This file is used to map API calls (Presentation Layer) with the
// Business-Logic layer

const router = require('express').Router()
const locationsService=require("./locations.service")

router.get('/locations', async (req, res) => {
	return res.status(200).send({locations: await locationsService.findAll()})
})
router.get('/locations/:id', async(req,res) => {
	return res.status(200).send({locations: await locationsService.findId(req.params.id)})
})

router.post('/locations', async(req,res) => {
	return res.status(200).send({locations: await locationsService.create(req.body)})

})
router.put('/parkings/:id', async(req,res) => {
	return res.status(200).send({locations: await locationsService.update(req.params.id,req.body)})

})

router.delete('/locations/:id', async(req,res) => {
	return res.status(200).send({locations: await locationsService.del(req.params.id)})

})







//app.listen(3000, () => {    console.log("Serveur à l'écoute")})

module.exports = router