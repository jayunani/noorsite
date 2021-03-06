const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    if(req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.get('*', function (request, response) {
    response.sendFile(path.resolve('public', 'index.html'))
})

app.listen(PORT, function() {
    console.log('Express server working on port ' + PORT);
});
