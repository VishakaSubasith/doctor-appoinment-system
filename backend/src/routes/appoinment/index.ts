var router = require('express').Router();
const appoinmentService = require('../../services/appoinment');

router.post('/create', async (req: any, res: any) => {
    try{
        const response = await appoinmentService.createAppoinment(req.body);
        res.status(201).send({response:{message:'Appoinment successfully created'}})
    }catch (e: any) {
        console.log('Appoinment create error: ',e)
        res.status(500).send({error:'Appoinment create error',description:e.message })
    }
    res.send()
});

router.get('/get', async (req: any, res: any) => {
    try{
        const response = await appoinmentService.getAppoinment(req.body);
        res.status(201).send({response:{message:'Appoinment successfully fetched'}, content: response})
    }catch (e: any) {
        console.log('Appoinment get error: ',e)
        res.status(500).send({error:'Appoinment Create error',description:e.message })
    }
    res.send()
});

module.exports = router; 