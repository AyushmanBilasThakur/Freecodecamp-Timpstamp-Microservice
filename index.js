const Express = require('express');
const path = require('path');

const app = Express();
const PORT = process.env.PORT || 3000;


app.use('/static',Express.static('static'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/api/timestamp', (req,res) => {
    let time_now = new Date();
    res.send({
       "unix": time_now.getTime(),
       "utc": time_now.toUTCString()
    })
});

app.get('/api/timestamp/:id',(req,res) => {
    let time_requested = new Date(req.params.id)
    if(time_requested.toString() == "Invalid Date"){
        time_requested =  new Date(parseInt(req.params.id));
        if(time_requested.toString() == "Invalid Date"){
            res.send({"error": "Invalid Date"})
        }   
    }
    res.send(
        {
            "unix": time_requested.getTime(),
            "utc": time_requested.toUTCString()
        }
    ) 
    }
);

app.listen(PORT);