const express = require('express');
const bodyParser = require('body-parser');
const { readFileSync } = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const axios = require('axios');

const ghRepo = 'solid-bassoon'
const ghUser = 'Narayanbhat166'

const getFileUrl = `https://raw.githubusercontent.com/${ghUser}/${ghRepo}/main/`

const app = express()
app.use(bodyParser.json());

app.post('/', (req, res) => {
    let { commits } = req.body;
    let filesAdded;
    commits.forEach((commit) => {
        const { id,
            message,
            timestamp,
            url,
            author,
            added,
            removed,
            modified } = commit;

        if (added.length > 0) {
            added.forEach(async (file) => {
                console.log(`Added file ${file} By ${author.name}`);
                try {
                    let res = await axios.get(getFileUrl + file);
                    let links = markdownLinkExtractor(res);
                    console.log(links);

                }
                catch (error) {
                    console.log(error);
                }

            })
        }
    })
    res.status(200);
    res.send();
})

app.listen(4567, () => console.log('Listening on port 4567'))
