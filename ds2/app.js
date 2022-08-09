const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https');
const { json } = require('body-parser');
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))


function hashCode(string) {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        var code = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + code;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function (req, res) {
    //const mytext = req.body.mytext;
    //console.log(mytext);
    //const hashValue = Math.abs(hashCode(mytext));
    //console.log(hashValue);
    console.log(res.statusCode);
    const mytext1=req.body.mytext1;
    const mytext2=req.body.mytext2;
    const hashValue1 = Math.abs(hashCode(mytext1));
    const hashValue2 = Math.abs(hashCode(mytext2));
    const ans=(hashValue1===hashValue2);
    res.write(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Digital Signature</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap" rel="stylesheet">
    </head>
    <style>
        body{
            font-family: 'Inconsolata', monospace;
        }
        textarea{
            width: 50%;
            margin: auto;
        }
        h2 {
            margin-top:4px;
            text-align: center; 
        }
        .mya{
            text-align: center;
            font-size: 1.2rem;
        }
    </style>
    
    <body>
    
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">DigitalSignature</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="https://guarded-river-53608.herokuapp.com/">Generate Hash</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#compare">Compare</a>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    
        <h2>Two strings equal? ${ans}</h2>
        <a href="" class="mya">Go Back</a>
        <script src="app.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`);
    res.send();
    // var visible=mytext1==="" && mytext2==="";
    // console.log(visible)
    // if (l1==0 && l2==0) {
    //     res.send();
    // }
    // else{
    //     const hashValue1 = hashCode(mytext1);
    //     const hashValue2 = hashCode(mytext2);
    //     //console.log("g"+hashValue1)
    //     var result = (hashValue1 === hashValue2);
    //     res.write(`Are the two strings equal ?? ${result}</h1>`);
        
    // }
    
});

// let aa=hashCode("Shreyasa");
// console.log(aa);

// var a="Shreyasa is a good boy Definition and Usage. The hashCode() method returns the hash code of a string. The hash code for a String object is computed like this: Shreyasa is a good boy Definition and Usage. The hashCode() method returns the hash code of a string. The hash code for a String object is computed like this: Shreyasa is a good boy Definition and Usage. The hashCode() method returns the hash code of a string. The hash code for a String object is computed like this: Shreyasa is a good boy Definition and Usage. The hashCode() method returns the hash code of a string. The hash code for a String object is computed like this:";
// var b="Shreyasa is a good boy Definition and Usage. The hashCode() method returns the hash code of a string. The hash code for a String object is computed like this: Shreyasa is a good boy Definition and Usage. The hashCode() method returns the hash code of a string. The hash code for a String object is computed like this: Shreyasa is a good boy Definition and Usage. The hashCode() method returns the hash code of a string. The hash code for a String object is computed like this: Shreyasa is a good boy Definition and Usage. The hashCode() method returns the hash code of a string. The hash code for a String object is computed like this:";
// console.log(hashCode(a));
// console.log(hashCode(b));

// console.log(hashCode(a)===hashCode(b));       


app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("Port is running at 3000");
});