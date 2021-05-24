const http = require('http');
const url = require('url');

function comprobarPalindromo(palabra){
    let palabra2="";
    for(i=palabra.length-1; i>=0; i--){
        palabra2+=palabra[i];
    };
    
    console.log("La palabra al revés es: "+palabra2);
    
    return (palabra==palabra2);
};

const app = http.createServer((req, res)=>{
    console.log("Petició rebuda");
    var adr = req.headers.host + req.url;
    console.log(adr);
    var q = url.parse(adr, true);
    if(q.query.palabra && req.url.includes("/comprobar")){
        res.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"});
        if(comprobarPalindromo(q.query.palabra)){
            res.write(`La palabra ${q.query.palabra} es un palíndromo!`);
        }else{
            res.write(`La palabra ${q.query.palabra} no es un palíndromo!`);
        }  
    }else if(req.url=="/"){
        console.log("Esto es el pinche req.url"+req.url);
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
        res.write(`
        <form action="/comprobar" method="get">
            <input type="text" name="palabra">
            <input type="submit">
        </form>`   
            );
        }
    res.end();
});

app.listen(3000);