para criar o projeto que vai servir de base, nao precisa da application
ng new microfrontendExemplo --create-application="false"

para criar o primeiro micro font end app
ng g application mfe-app

para criar o primeiro micro font end host
ng g application host-app

adicionar o pacote do federation  app
ng add @angular-architects/module-federation --project mfe-app --port 4201 --type remote

adicionar o pacote do federation  host
ng add @angular-architects/module-federation --project host-app --port 4200 --type dynamic-host

importar o mfe-app dentro do mfe-host, arquivo esta dentro da pasta public/mf.manifest.json
{
	"mfe1": "http://localhost:4201/remoteEntry.js"
}

configurar a rota do mfe-app que foi importado dentro do mfe-host 
    {
        path: 'profile',
        loadComponent: () => loadRemoteModule('mfe1', './Component')
        .then((m) => m.AppComponent)
    }
