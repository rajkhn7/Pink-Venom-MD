
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'PINKVENOM-MD;zUMn3JyI#KX3SM9DX4aF-pkCAAM0ZkaLKZo1mDMzP4qe2Pbh1uWY' : process.env.SESSION_ID, //
    GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? '' : process.env.GITHUB_USER_NAME, //ADD YOUR GITHUB USERNAME
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '' : process.env.GITHUB_AUTH_TOKEN, //ADD YOUR GITHUB AUTH TOKEN WITHOUT gph_ ,  example - G5OxxdvEbiBPWxm4A0xypQGlyCr4FS267ifz
    WORK_TYPE: process.env.WORK_TYPE === undefined ? 'ONLYME / ONLYGROUP OR PUBLIC' : process.env.WORK_TYPE, //ONLYME / ONLYGROUP OR PUBLIC
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? 'false' : process.env.AUTO_READ_STATUS, //TRUE OR FALSE
    PRESENCE: process.env.PRESENCE === undefined ? `available` : process.env.PRESENCE, //AVAILABLE, COMPOSING, RECORDING OR UNAVAILABLE
    ALIVE: process.env.ALIVE === undefined ? `JINDA HE RE TERA VAI 💀` : process.env.ALIVE, //YOUR ALIVE MESSAGE OR SET IT TO defeault
    OWNER: process.env.OWNER === undefined ? `917439903515` : process.env.OWNER, //BOTS OWNER NUMBER
    PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX, //BOTS PREFIX 
    MAX_SIZE: process.env.MAX_SIZE === undefined ? '200' : process.env.MAX_SIZE, //MAX UPLOAD SIZE
    LOGO: process.env.LOGO === undefined ? `https://i.postimg.cc/JzHb8pfV/IMG-20241124-WA0139.jpg` : process.env.LOGO, //ALIVE IMAGE URL
    ANTI_LINK: process.env.ANTI_LINK === undefined ? 'true' : process.env.ANTI_LINK, //TRUE
    ANTI_BAD: process.env.ANTI_BAD === undefined ? 'false' : process.env.ANTI_BAD, //TRUE OR FALSE
    ANTI_BOT: process.env.ANTI_BOT === undefined ? 'false' : process.env.ANTI_BOT, // FALSE
    READ_MESSAGE: process.env.READ_MESSAGE === undefined ? 'false' : process.env.READ_MESSAGE, //false
    ANTI_CALL: process.env.ANTI_CALL === undefined ? 'false' : process.env.ANTI_CALL, //FALSE
    AUTO_BLOCK: process.env.AUTO_BLOCK === undefined ? 'false' : process.env.AUTO_BLOCK //false
};
