const Church = require("../models/Church");
const Post = require("../models/Post");

module.exports = {
    async store(req, res){
        const { filename } = req.file;
        const { text } = req.body;
        const { church_id } = req.headers;

        const church = await Church.findById(church_id);

        if(!church){
            return res.status(400).json({ error: 'Church does not exists'});
        }

        const post = await Post.create({
            church: church_id,
            thumbnail: filename,
            text: text,
        });
        
        return res.json(post);
    }
};