const http = require('http');
const fs = require('fs');
const path = require('path');

const download = require('image-downloader');

http.createServer((request, response) => {
	
	let filePath = '.' + request.url;
	if (filePath == './')
		filePath = './index.html';
		
	let extname = path.extname(filePath);
	let contentType = 'text/html';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
	}
	if (request.method === 'POST') {
		let body = "";
        request.on("data", function (chunk) {
            body += chunk;
        });

        request.on("end", ()=>{
			response.writeHead(200, { "Content-Type": "text/html" });
			response.end(body);
			let data = JSON.parse(body); 
			let img = data.image // extract the image url from the object
			let key = 'image'
			delete data[key]// remove the image key from json object
			fs.writeFile('saved-data/data.json', JSON.stringify(data), 'utf8', (err)=> console.log('err',err));
			options = {// save image by url using image-loader
				url: img,
				dest: 'saved-data/photo.jpg'
			  }
			  download.image(options)
			  .then(({ filename, image }) => {
				console.log('File saved to', filename)
			  }).catch((err) => {
				throw err
			  })
        });
	}
	fs.exists(filePath, (exists)=> {
	
		if (exists) {
			fs.readFile(filePath, (error, content)=> {
				if (error) {
					response.writeHead(500);
					response.end();
				}
				else {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				}
			});
		}
		else {
			response.writeHead(404);
			response.end();
		}
	});
	
}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');