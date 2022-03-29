const app=require('./config/server.js');
const rotaHome=require('./app/routes/home')(app);//<-- execução da rotahome com app como parametro //criação do caminho da home/ tela principal
const rotaAdmin=require('./app/routes/admin')(app);
const rotaNoticias=require('./app/routes/noticias')(app);


//Cria um servidor rodando na porta 3000
app.listen('3000',function(){//criação do servidor/execução do app
	console.log('Servidor rodando na porta 3000');
});
