const expresss = require('express');
const cors =require('cors');
const app = exress();
const port =3000; 

app.use(cors());

app.use(express.urlencoded({extended: false}));

app.post('/upload', function(req, res){

    const params =new URLSearchParams({
        secret: '6Ldwdg8pAAAAAIYNFdinuKdM-QIwWhPYefLAJ-mI',
        response: req.bpdy['g-recaptcha-response'],
        remoteip: req.ip,
    });
    fetch ('https://www.google.com/recaptcha/api/siteverify',{
        method: "post",
        body: params,
    })
    .then(res => res.json())
    .then(data => {
        if (data.success){
            res.json({captchasuccess: true}); 
        }else {
            res.json({captchasuccess: flase})
        }
    })
});
app.listen(port,() => {
    console.log('appp running on port ${port}');
});