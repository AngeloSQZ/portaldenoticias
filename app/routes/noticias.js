const dbConnection = require('../../config/dbConnection'); //pegando o arquivo dbconnection dentro de config, ../ é o comando para voltar uma pasta,
module.exports=function(app){
	var connection=dbConnection();// executando a variavel dbconnection.
	app.get('/noticias',function(req,res){
	const mysql=require('mysql');//importação do modo mysql
	

	connection.query('select * from noticias', function(error,result){
		if(error){
			console.log(error);
		}
		res.render('noticias/noticias.ejs',{noticias:result});//renderização da tela noticias.ejs juntamente com o envio da variavel result
	});
	//res.render('noticias/noticia.ejs')
});//rota para a página de notícia
}