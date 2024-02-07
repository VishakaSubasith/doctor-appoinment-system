var router = require('express').Router();
const appoinmentService = require('../../services/appoinment');
const _categoryService = require('../../services/category');
const _userSerice = require('../../services/user');

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
        console.log("REQQQQQ", req.query);
        const { appoinmentId = null } = req.query
        const response = await appoinmentService.getAppoinment(appoinmentId);
        res.status(201).send({response:{message:'Appoinment successfully fetched'}, content: response})
    }catch (e: any) {
        console.log('Appoinment get error: ',e)
        res.status(500).send({error:'Appoinment Create error',description:e.message })
    }
    res.send()
});

router.get('/get-all-appoinments', async (req: any, res: any) => {
    try{
        const response = await appoinmentService.getAppoinments();
        console.log("Response", response);
        for(const appoinment of response) {
            console.log("appoinment", appoinment);
            const category = await _categoryService.getCategoryById(appoinment?.categoryId);
            const doctor = await _userSerice.getUserById('doctor', appoinment?.doctorId);

            delete appoinment.categoryId;
            delete appoinment.doctorId;

            appoinment.category = category
            appoinment.doctor = doctor

            console.log("category", category);
            console.log("doctor", doctor);

        }
        res.status(201).send({response:{message:'Appoinment successfully fetched'}, content: response})
    }catch (e: any) {
        console.log('Appoinment get error: ',e)
        res.status(500).send({error:'Appoinment Create error',description:e.message })
    }
    res.send()
});

module.exports = router; 