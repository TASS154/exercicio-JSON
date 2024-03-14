
var http = require('http');
var url  = require('url')
var fs = require('fs');
const express = require('express');

const app = express();
const port = 3000;

const prodPath = path.join(__dirname, 'Produtos.json');
const clienPath = path.join(__dirname, 'Clientes.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

let produtosData = fs.readFileSync(prodPath, 'utf-8');
let produtos = JSON.parse(produtosData)

let clientesData = fs.readFileSync(prodPath, 'utf-8');
let clientes = JSON.parse(clientesData)

function salvarDados() {
	fs.writeFileSync(prodPath, JSON.stringify(produtos, null, 2));
}


function readFile(response,file) {
	
	fs.readFile(file, function(err, data) {
		response.end(data);
	});
}

function callback(request, response) {

	response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

	var parts = url.parse(request.url);
	var path = parts.path;


	if (path == '/') {
    response.writeHead(200, 'Content-type', 'text/plain');
	response.end('Coloque uma rota')


		readFile(response,"Categoria.json");
	} else if (path == '/categoria') {  
		readFile(response,"Categoria.json");
	} else if (path == '/pedidos') {  
		readFile(response,"Pedidos.json");
	 } else if (path == '/produtos') {
		readFile(response,"Produtos.json");
	  } else if (path == '/clientes'){
		readFile(response,"Clientes.json");
	  }
	  
	 
	  else {
    response.writeHead(404, {'content-type': 'text/plain'})
		response.end("Path não mapeado: " + path);
	}
}

app.get('/adicionar-produtos', (req,res) => {
	res.sendFilw(path.join(__dirname, 'adicionarcarro.html'))
})

app.post('/adicionar-produto', (req, res) => {
	const novoProduto = req.body;

})
var server = http.createServer(callback);

server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000/");