# Exemplo de Micro Frontend (MFE) com Angular

Este guia mostra como criar um projeto de Micro Frontend (MFE) utilizando Angular, incluindo a criação de um micro frontend remoto e um host dinâmico.

## 1. Criar o Projeto Base

Crie um novo projeto Angular sem a aplicação inicial:

```bash
ng new microfrontendExemplo --create-application="false"
```

## 2. Adicionar projeto mfe-app
```bash
    ng g application mfe-app
```
## 3. adicionar o pacote do federation no mfe-app
```bash
ng add @angular-architects/module-federation --project mfe-app --port 4201 --type remote
```

## 4. Adicionar projeto mfe-host
```bash
ng g application host-app
```
## 5. adicionar o pacote do federation no mfe-host
```bash
ng add @angular-architects/module-federation --project host-app --port 4200 --type dynamic-host
```
## 6. importar o mfe-app dentro do mfe-host, arquivo esta dentro da pasta public/mf.manifest.json
importar o mfe-app dentro do mfe-host, arquivo esta dentro da pasta public/mf.manifest.json
```json
{
	"mfe1": "http://localhost:4201/remoteEntry.js"
}
```

## 7. configurar a rota do mfe-app que foi importado dentro do mfe-host 
```javascript
 {
        path: 'profile',
        loadComponent: () => loadRemoteModule('mfe1', './Component')
        .then((m) => m.AppComponent)
 }
```