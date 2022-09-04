const client = require('../db')

const  getAllGuest = async (req, res) => {
    const result = await client.query('SELECT * from guest')
    console.log(result)
    res.json(result.rows)
}

const getGuest = (req, res) => {
    res.send('Get a guest')
}

const registerGuest = (req, res) => {
    const {nama, address, phone, note} = req.body

    client.query(`INSERT INTO guest(nama, address, phone, note) VALUES ('${nama}', '${address}', '${phone}', '${note}')`, (err, result) => {
        if(!err){
            console.log(result)
            res.json("Insert Success")
        }else{
            res.status(500).send(err.message)
        }
    })
}

const deleteGuest = (req, res) => {
    client.query(`DELETE FROM guest WHERE id = '${req.params.id}'`, (err, result) => {
        if(!err){
            res.json("Deleted!")
        }else{
            res.status(500).send(err.message)
        }
    })
}

const updateGuest = (req, res) => {
    const {nama, address, phone, note} = req.body

    client.query(`UPDATE guest set nama = '${nama}', address = '${address}', phone = '${phone}', note = '${note}')`, (err, result) => {
        if(!err){
            console.log(result)
            res.json("Update Success")
        }else{
            res.status(500).send(err.message)
        }
    })
}

module.exports = {getAllGuest, getGuest, registerGuest, deleteGuest, updateGuest}