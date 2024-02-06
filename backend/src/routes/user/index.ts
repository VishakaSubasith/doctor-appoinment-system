var router = require('express').Router();
var userService = require('../../services/user');

router.post('/register', async (req: any, res: any) => {
    try{
        await userService.signUp(req.body);
        res.status(201).send({response:{message:'User successfully created'}})
    }catch (e: any) {
        console.log('Signup error: ',e)
        res.status(500).send({error:'Signup error',description:e.message })
    }
    res.send()
});

router.post('/login', async (req: any, res: any) => {
    try{
        const user = await userService.singIn(req.body);
        res.status(201).send({response:{message:'Login success!'}, content: user})
    }catch (e: any) {
        console.log('Signup error: ',e)
        res.status(500).send({error:'Login error',description:e.message })
    }
    res.send()
});

module.exports = router; 