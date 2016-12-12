var express = require('express');

var util = require('util');

var app = express();

var bind = require('bind');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({entended: false}));

app.set('port', (process.env.PORT || 8000));

var archivio = [];

app.use('/', function(request,response){
	


	var text="";

	if(typeof request.body !== 'undefined' && request.body){

	text= "request.body: "+ util.inspect(request.body) + "\n";

	var uname;
	var sname;
	var slry;
	var lvl;
	var iid;
	var flag;
	
	

	if(typeof request.body.username !== 'undefined' && request.body.username){

		uname = request.body.username

	}else{

		uname = 'not defined';
	}

	if(typeof request.body.surname !== 'undefined' && request.body.surname){

		sname = request.body.surname

	}else{

		same = 'not defined';
	}

	if(typeof request.body.salary !== 'undefined' && request.body.salary){

		slry = request.body.salary

	}else{

		slry = 'not defined';
	}

	if(typeof request.body.level !== 'undefined' && request.body.level){

		lvl = request.body.level

	}else{

		lvl = 'not defined';
	}

	if(typeof request.body.iid !== 'undefined' && request.body.iid){

		iid = request.body.iid

	}else{

		iid = 'not defined';
	}

	if(typeof request.body.stype !== 'undefined' && request.body.stype){

		flag = 'on'

	}else{

		flag = 'false';
	}
		
	


}else{

	text = "body undefined";
}
   // response.end();
   if(flag==='on'){
       for(i=0;i<archivio.length;i++){
       	if(iid===archivio[i].Id){
       		console.log("trovato");
       		uname=archivio[i].Name;
       		sname=archivio[i].Sname;
       		slry=archivio[i].Slry;
       		lvl=archivio[i].Lvl;
            iid=archivio[i].Id;
            i=archivio.length;
       	}
       }

       bind.toFile('tpl/index.tpl',{
		Name : uname,
		Surname : sname,
		Level : lvl,
		Salary : slry,
		Id : iid,
	},function(data){

		response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);

	});


   }else{

   	var person = {Name:uname,Sname:sname,Slry:slry,Lvl:lvl,Id:iid};
    archivio.push(person);


   bind.toFile('tpl/index.tpl',{
		Name : "",
		Surname : "",
		Level : "",
		Salary : "",
		Id : "",
	},function(data){

		response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);

	});
}


});

app.listen(app.get('port'), function(){
	console.log('Node app is running at port', app.get('port'));
});

