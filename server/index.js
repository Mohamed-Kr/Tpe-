const express = require('express')
const app = express()
const port = process.env.PORT === undefined || process.env.PORT === null ? 3000 : process.env.PORT3
const axios = require('axios')
const useragent = require('useragent')
const path = require('path')
let discordWebhookUrl = "https://discordapp.com/api/webhooks/552528214233448463/CD-ITCAyiHSVd4KLhZwrPOqxzboLKvxtHlAKr4npbYZ9D0qNrRkW8-NrnUAe75tZ31CZ"

let hookcord = require('hookcord');
let Hook = new hookcord.Hook()
    .login('552528214233448463', 'CD-ITCAyiHSVd4KLhZwrPOqxzboLKvxtHlAKr4npbYZ9D0qNrRkW8-NrnUAe75tZ31CZ')

app.use('/css', express.static(path.resolve('../dist/css')));
app.use('/img', express.static(path.resolve('../dist/img')));
app.use('/js', express.static(path.resolve('../dist/js')));
app.use('/icon.png', express.static(path.resolve('../dist/icon.png')));
app.use('/not-supported.html', express.static(path.resolve('../dist/not-supported.html')));

// app.get('/', (req, res) => {
//     let agent = useragent.parse(req.headers['user-agent'])
// })
app.get('/api/presence', (req, res) => {
    Hook.setPayload({
            'embeds': [{
                'title': 'New people here',
                'fields': [{
                        'name': 'Full UA',
                        'value': req.headers['user-agent'],
                        'inline': true
                    },
                    {
                        'name': 'Ip',
                        'value': req.ip,
                        'inline': true
                    }
                ],
                'timestamp': new Date()
            }]
        })
        .fire()
        .then(function (response) {})
        .catch(function (e) {})
    return res.json({
        success: true
    })
})

app.get(['/','/*'], (req, res) => {
    if (req.query.q != 1) {
        let ua = useragent.is(req.headers['user-agent'])
        //console.log(ua)
        if (ua.ie || ua.safari || ua.opera || ua.mobile_safari || ua.android) {
            // report the issue
            Hook.setPayload({
                    'embeds': [{
                        'title': 'UA rejected',
                        'fields': [
                            {
                                'name': 'Full UA',
                                'value': req.headers['user-agent'],
                                'inline': true
                            },
                            {
                                'name': 'Ip',
                                'value': req.ip,
                                'inline': true
                            }
                        ],
                        'timestamp': new Date()
                    }]
                })
                .fire()
                .then(function (response) {})
                .catch(function (e) {
                    console.log(e)
                })
            return res.sendFile(path.resolve('../dist/not-supported.html'));
        }
    }
    
    return res.sendFile(path.resolve('../dist/index.html'));
})
app.listen(port, () => console.log(`TPE app listening on port ${port}!`))


// verify the user agent
// send a log to discord