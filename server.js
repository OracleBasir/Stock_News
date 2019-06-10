var express = require('express');
var app = express();
var request = require("request");
var parseString = require('xml2js').parseString;
var https = require('https');
//var parser = require('parse');
//var stringify = require('json-stringify');

//----------------------------------------------------------
//cross domain isssue 

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8089/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//----------------------------------------------------------
var port = process.env.PORT || 8089;
app.use(express.static(__dirname + "/"));// telling to the server to look for static files such as HTML CSS ... files in the public folder, with this we connected the server to the HTML file.
//----------------------------------------------------------

///////////////////////////////////////////////////
////////////////////  Indicators  /////////////////
///////////////////////////////////////////////////

//// ------ Price -------
app.get('/hw8/Indicators/Price/:Stoch_Symbol', function (req, res){
	console.log("I recived the Get request for indicators - Price!");
	var Symbol = req.params.Stoch_Symbol;
	///// NodeJS HttpGet to a URL with JSON response
	var url="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+ Symbol +"&apikey=CRXR472LZYO49Q0U&outputsize=full";
	
	console.log(url);//printing the symbols
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			//console.log(body) // Print the json response
			res.json(body); // respond the body to the front end
		}
	})

});
/// -------- SMA --------
app.get('/hw8/Indicators/SMA/:Stoch_Symbol', function (req, res){
	console.log("I recived the Get request for indicators - SMA !");
	var Symbol = req.params.Stoch_Symbol;
	///// NodeJS HttpGet to a URL with JSON response
	var url="https://www.alphavantage.co/query?function=SMA&symbol=" + Symbol + "&interval=daily&time_period=10&series_type=close&apikey=CRXR472LZYO49Q0U&outputsize=full";
	
	console.log(url);//printing the symbols
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			//console.log(body) // Print the json response
			res.json(body); // respond the body to the front end
		}
	})

});
/// -------- EMA -------- 
app.get('/hw8/Indicators/EMA/:Stoch_Symbol', function (req, res){
	console.log("I recived the Get request for indicators - EMA !");
	var Symbol = req.params.Stoch_Symbol;
	///// NodeJS HttpGet to a URL with JSON response
	var url="https://www.alphavantage.co/query?function=EMA&symbol=" + Symbol + "&interval=daily&time_period=10&series_type=close&apikey=CRXR472LZYO49Q0U&outputsize=full";
	
	console.log(url);//printing the symbols
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			//console.log(body) // Print the json response
			res.json(body); // respond the body to the front end
		}
	})

});
/// -------- STOCH ------ 
app.get('/hw8/Indicators/STOCH/:Stoch_Symbol', function (req, res){
	console.log("I recived the Get request for indicators - STOCH !");
	var Symbol = req.params.Stoch_Symbol;
	///// NodeJS HttpGet to a URL with JSON response
	var url="https://www.alphavantage.co/query?function=STOCH&symbol=" + Symbol + "&interval=daily&time_period=10&series_type=close&apikey=CRXR472LZYO49Q0U&outputsize=full";
	
	console.log(url);//printing the symbols
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			//console.log(body) // Print the json response
			res.json(body); // respond the body to the front end
		}
	})

});
/// -------- RSI -------- 
app.get('/hw8/Indicators/RSI/:Stoch_Symbol', function (req, res){
	console.log("I recived the Get request for indicators - RSI !");
	var Symbol = req.params.Stoch_Symbol;
	///// NodeJS HttpGet to a URL with JSON response
	var url="https://www.alphavantage.co/query?function=RSI&symbol=" + Symbol + "&interval=daily&time_period=10&series_type=close&apikey=CRXR472LZYO49Q0U&outputsize=full";
	
	console.log(url);//printing the symbols
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			//console.log(body) // Print the json response
			res.json(body); // respond the body to the front end
		}
	})

});
/// -------- ADX -------- 
app.get('/hw8/Indicators/ADX/:Stoch_Symbol', function (req, res){
	console.log("I recived the Get request for indicators - ADX !");
	var Symbol = req.params.Stoch_Symbol;
	///// NodeJS HttpGet to a URL with JSON response
	var url="https://www.alphavantage.co/query?function=ADX&symbol=" + Symbol + "&interval=daily&time_period=10&series_type=close&apikey=CRXR472LZYO49Q0U&outputsize=full";
	
	console.log(url);//printing the symbols
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			//console.log(body) // Print the json response
			res.json(body); // respond the body to the front end
		}
	})

});
/// -------- CCI -------- 
app.get('/hw8/Indicators/CCI/:Stoch_Symbol', function (req, res){
	console.log("I recived the Get request for indicators - CCI !");
	var Symbol = req.params.Stoch_Symbol;
	///// NodeJS HttpGet to a URL with JSON response
	var url="https://www.alphavantage.co/query?function=CCI&symbol=" + Symbol + "&interval=daily&time_period=10&series_type=close&apikey=CRXR472LZYO49Q0U&outputsize=full";
	
	console.log(url);//printing the symbols
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			//console.log(body) // Print the json response
			res.json(body); // respond the body to the front end
		}
	})

});
/// -------- BBANDS -------- 
app.get('/hw8/Indicators/BBANDS/:Stoch_Symbol', function (req, res){
	console.log("I recived the Get request for indicators - BBANDS !");
	var Symbol = req.params.Stoch_Symbol;
	///// NodeJS HttpGet to a URL with JSON response
	var url="https://www.alphavantage.co/query?function=BBANDS&symbol=" + Symbol + "&interval=daily&time_period=10&series_type=close&apikey=CRXR472LZYO49Q0U&outputsize=full";
	
	console.log(url);//printing the symbols
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			//console.log(body) // Print the json response
			res.json(body); // respond the body to the front end
		}
	})

});
/// -------- MACD -------- 
app.get('/hw8/Indicators/MACD/:Stoch_Symbol', function (req, res){
	console.log("I recived the Get request for indicators - MACD !");
	var Symbol = req.params.Stoch_Symbol;
	///// NodeJS HttpGet to a URL with JSON response
	var url="https://www.alphavantage.co/query?function=MACD&symbol=" + Symbol + "&interval=daily&time_period=10&series_type=close&apikey=CRXR472LZYO49Q0U&outputsize=full";
	
	console.log(url);//printing the symbols
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			//console.log(body) // Print the json response
			res.json(body); // respond the body to the front end
		}
	})

});

////////////////////////////////////////////////////
///////////////// AutoComplete /////////////////////
////////////////////////////////////////////////////

app.get('/hw8/AutoComplete/:string', function (req, res){
	console.log("I recived the Get request for AutoComplete! Duhhh");
	var StochSymbol = req.params.string;
	///// NodeJS HttpGet to a URL with JSON response
	var url = "http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input=" + StochSymbol;
	
	console.log(url);//printing the symbols
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log(body); // Print the json response
			res.header("Access-control-Allow-Origin","*");
			res.header("Access-control-Allow-Headers","X-Requested-With");
			
			res.json(body); // respond the body to the front end
		}
	})

});
//----------------------------------------------------------

////////////////////////////////////////////////////
////////////////////// News ////////////////////////
////////////////////////////////////////////////////

app.get('/hw8/News/:string', function (req, res){
	
	console.log("I recived the Get request for AutoComplete!");
	var StochSymbol = req.params.string;
	
	///// NodeJS HttpGet to a URL with JSON response
	var url = "https://seekingalpha.com/api/sa/combined/" + StochSymbol + ".xml";
	
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log(body); // Print the json response
			parseString(body,function(error,result){
				res.json(result); // respond the body to the front end
			})
		}else{
			//error handling
			res.json({"Error Message": "404 Not Found"});
		}
	})
	
	/*
	/// function for  XML to JSON
	function xmlToJson(url, callback) {
	  var req = https.get(url, function(res) {
		var xml = '';
		if(res.statusCode != 200){
		res.on('data', function(chunk) {
		   xml = "404";
		});
		}
		else{ 
		res.on('data', function(chunk) {
		  xml += chunk;
		});
		}

		res.on('error', function(e) {
		  callback(e, null);
		}); 

		res.on('timeout', function(e) {
		  callback(e, null);
		}); 

		res.on('end', function() {
		  parseString(xml, function(err, result) {
			callback(null, result);
		  });
		});
	  });
	}
	
	


	
	console.log("this is my URL-------->" + url);
	//var url = "http://www.example.com/blah.xml"
	xmlToJson(url, function(err, data) {
		if(data == "404"){
			res.json({"Error Message": "404 Not Found"});
		}else{
	  // Following just pretty-prints the object
			console.log(data);
	  var jsonFromXML = JSON.parse(JSON.stringify(data, null, 2));
	  //console.log(jsonFromXML);
	  res.json(jsonFromXML);	
			
		}

	});
	*/	
});
//----------------------------------------------------------

////////////////////////////////////////////////////
//////////////// FaceBook picture /////////////////
//////////////////////////////////////////////////

app.get('/hw8/Picture/', function (req, res){
	console.log("I recived the Get request Facebook pisture!");
	//console.log(JSON.stringify(req.params.string));
	
	//var Symbol = stringify(req.params.string);
	//var Symbol = JSON.parse(req.params.string);
	console.log(req.query.options);
	///// NodeJS HttpGet to a URL with JSON response
	var url="https://export.highcharts.com/";
	
	request({
		method: "POST",
		url: url,
		form:{
			options: req.query.options,
			//options: Symbol,
			type: "image/png",
			async:true
		}
	}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log(body);
			res.send(body); // respond the body to the front end
		}
	})

});

//----------------------------------------------------------
/////////////////////////////////////////////////////
/////////Listening on the port 3000//////////////////
/////////////////////////////////////////////////////

app.listen(port);
console.log("server is running on port 8089");
///////////////////////////


