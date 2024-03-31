const cheerio = require('cheerio')
const https = require('https'); 
const axios = require('axios')
const agent = new https.Agent({
    rejectUnauthorized: false,
});
async function scrapNotices(){
const url = 'https://iost.tu.edu.np/notices';
const response = await axios.get(url,{httpsAgent:agent});
const html = response.data
const $ = cheerio.load(html);
const noticesHtml = $('.recent-post-wrapper.shdow'); 
let notices = [];
for (const noticeElement of noticesHtml) {
        const notice = $(noticeElement);
        const date = notice.find('.date h4').text().trim();
        const title = notice.find('.detail h5').text().trim();
        const link = notice.find('a').attr('href').trim(); 

        const noticeObj = {
                date,
                title,
                link,
        };
        notices.push(noticeObj);
}
}

try {
        scrapNotices().then(()=>{
            console.log("Successful")
            })

        }
catch(err){
        console.log(err)
        }
