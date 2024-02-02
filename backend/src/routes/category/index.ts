var router = require('express').Router();
var categoryService = require('../../services/category');

router.post('/create', async (req: any, res: any) => {
    try{
        await categoryService.createCategory(req.body);
        res.status(201).send({response:{message:'Category successfully created'}})
    }catch (e: any) {
        console.log('Signup error: ',e)
        res.status(500).send({error:'Signup error',description:e.message })
    }
    res.send()
});

router.get('/getAll', async (req: any, res: any) => {
    try{
        const categories = await categoryService.getCategories();
        res.status(201).send({response:{message:'Login success!'}, content: categories})
    }catch (e: any) {
        console.log('Signup error: ',e)
        res.status(500).send({error:'Login error',description:e.message })
    }
    res.send()
});

module.exports = router; 