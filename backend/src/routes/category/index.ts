var router = require('express').Router();
const __categoryServices = require('../../services/category');

router.post('/create', async (req: any, res: any) => {
    try{
        await __categoryServices.createCategory(req.body);
        res.status(201).send({response:{message:'Category successfully created'}})
    }catch (e: any) {
        console.log('Signup error: ',e)
        res.status(500).send({error:'Signup error',description:e.message })
    }
    res.send()
});

router.get('/getAll', async (req: any, res: any) => {
    try{
        const categories = await __categoryServices.getCategories();
        res.status(201).send({response:{message:'Login success!'}, content: categories})
    }catch (e: any) {
        console.log('Signup error: ',e)
        res.status(500).send({error:'Login error',description:e.message })
    }
    res.send()
});

module.exports = router; 