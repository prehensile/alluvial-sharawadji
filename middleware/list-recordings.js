const dbConfig = require("../knexfile.js")[process.env["NODE_ENV"]];
const knex = require("knex")(dbConfig);

const listRecordings = async (req, res) => {
    const soundwalkName = req.query.soundwalk;
    const soundwalk = await knex("soundwalks").where({name: soundwalkName}).first();
    const sounds = await knex("sounds").where({soundwalk_name: soundwalkName}).select();
    soundwalk["sounds"] = sounds;
    res.send(soundwalk);
}

module.exports = listRecordings;
