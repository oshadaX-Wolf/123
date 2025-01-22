const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
   SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID, 
   DATABASE_URL: process.env.DATABASE_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.DATABASE_URL,
   PREFIX: process.env.PREFIX || ".",
   JID: process.env.JID || `94755773910@s.whatsapp.net` , 
   FOOTER: process.env.FOOTER === undefined ? 'TC TEAM MOVIE DL' : process.env.FOOTER

};
