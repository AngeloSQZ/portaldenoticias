const mysql=require('mysql');//importação do módulo mysql

module.exports=function(){
return mysql.createConnection({//um parametro, cada chave é um objeto jason, e só tem um entre os parenteses, sendo apenas um parametro
	host:'localhost',
	user:'root',
	password:'ifms',
	database:'portal_noticias'
});//criando a conexão com o banco de dados no workbench
}