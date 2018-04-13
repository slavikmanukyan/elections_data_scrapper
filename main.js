import { init as initDb } from 'lib/db';
import phantom from 'phantom';
import { stat } from 'fs';

async function scrapLetterData(page, fl, ll) {
    
}

async function loadData() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    let nameLetter  
    page.on('onLoadFinished', function(status, page) {
        console.log(status)
    });
    const status = await page.open('http://www.elections.am/votersreg/');
    const s = await page.evaluate(function() {
        const name = document.getElementById('ctl00_centerHolder_tbFName');
        const surename = document.getElementById('ctl00_centerHolder_tbLName');
        const searchButton = document.getElementById('ctl00_centerHolder_search');
        name.value = 'ա';
        surename.value = 'ա';
        searchButton.click();

    });
    console.log(s)
    
}

async function main() {
 //   await initDb();
    console.log('Database is ready.');
    await loadData();
}

main();