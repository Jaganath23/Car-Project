const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    if(req.url == "/"){
        fs.readFile('./login.html','utf-8',function(error,data){
            if(error){
                res.writeHead(404,{'Content-Type': 'text/html'});
                res.write("File not found");
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
            }
            console.dir(res, {depth:0});
           res.end();
        });
    }else if (req.url == "/home"){
        fs.readFile('./home.html','utf-8',function(error,data){
            if(error){
                res.writeHead(404,{'Content-Type': 'text/html'});
                res.write("File not found");
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
            }
            console.dir(res, {depth:0});
           res.end();
        });
    }else if(req.url == "/new"){
        fs.readFile('./new.html','utf-8',function(error,data){
            if(error){
                res.writeHead(404,{'Content-Type': 'text/html'});
                res.write("File not found");
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
            }
            console.dir(res, {depth:0});
           res.end();
        });
    }else if(req.url == "/research"){
        fs.readFile('./research.html','utf-8',function(error,data){
            if(error){
                res.writeHead(404,{'Content-Type': 'text/html'});
                res.write("File not found");
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
            }
            console.dir(res, {depth:0});
           res.end();
        });
    }else if(req.url == "/tools"){
        fs.readFile('./tools.html','utf-8',function(error,data){
            if(error){
                res.writeHead(404,{'Content-Type': 'text/html'});
                res.write("File not found");
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
            }
            console.dir(res, {depth:0});
           res.end();
        });
        
    }else if(req.url == "/contact"){
        fs.readFile('./contact.html','utf-8',function(error,data){
            if(error){
                res.writeHead(404,{'Content-Type': 'text/html'});
                res.write("File not found");
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
            }
            console.dir(res, {depth:0});
           res.end();
        });
        
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('Page doesnt exist');
    }
});

server.listen(9091, () =>{
    console.log("Listening at port 9091");
});