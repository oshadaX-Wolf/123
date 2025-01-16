const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
   SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=p691CSrb#SGMgpqj7_ViW6JLFgz0EydcyZ-LhxHNrlh4A-vcx5mE' : process.env.SESSION_ID, 
   DATABASE_URL: process.env.DATABASE_URL === undefined ? 'postgres://koyeb-adm:qFWVex1dO6Mt@ep-shrill-surf-a22zn6z2.eu-central-1.pg.koyeb.app/koyebdb' : process.env.DATABASE_URL,
   PREFIX: process.env.PREFIX || '.' ,
   JID: process.env.JID || `94755773910@s.whatsapp.net` , 
   FOOTER: process.env.FOOTER === undefined ? 'TC TEAM MOVIE DL' : process.env.FOOTER

};
