// index, show, store, update, destroy

const Church = require('../models/Church');

module.exports = {

    async store(req, res){
        const { email } = req.body;

        let church = await Church.findOne({ email });

        if(!church){
            const church = await Church.create({ email });
        }


        return res.json(church);
    }

};