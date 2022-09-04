const { Router } =  require('express')
const router =  Router()

const {getAllGuest, getGuest, registerGuest, deleteGuest, updateGuest} = require('../controllers/guest.controller')

router.get('/', (req, res) => {
    res.send("Hello World")
})

router.get('/guest', getAllGuest);

router.get('/guest/:id', getGuest);

router.post('/guest', registerGuest);

router.delete('/guest/:id', deleteGuest);

router.put('/guest/:id', updateGuest)

module.exports = router