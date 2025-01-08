# Aula 2
- Node Modeule
- Obs sobre as Bibliotecas - `package.json`
- Arquivo de configuração do projeto - `angular.json`
- environments
- iniciar projeto
- Angular material


> ## Node Modeule
>> A pasta node modele pode ser vista na pasta raiz de um projeto angular, essa pasta tem como finlidade ter todos os pacotes necessarios para fazer a aplicação angular funcionar.
>>E todas as depencias estão listadas no `package.json` listada na pasta raiz do projeto.

> ## Obs sobre as Bibliotecas - `package.json`
>> Quando um projeto angular é iniciado pode ser visto alguns dependencias padroes, alem do proprio angular sendo elas:
>> - *rxjs:*
>>      - a rxjs tem a função de realizar chamadas http, observables...
>> - *tslib:*
>>      - Biblioteca destinada a liguagem de prgramação (typescript) do projeto.
>> - *zone.js*
>>      - Bibliote de uso interno do angular.

> ## Arquivo de configuração do projeto - `angular.json`
>> Aqui pode ser encontrada diversas configuraçoes do projeto como por exeplo 
>> - tipo da estilização do projeto (css, scss etc);
>> - estado do strict (ele é reponsavel por forçar a tipagem de variaveis)
>> - prefixo (o padrao é app)
>> - pasta raiz do projeto (o padrao é src)

> ## environments
>> configuração de desenevolvimento e produção.

> ## iniciar projeto
>> Para iniciar o projeto deve ser utilizado o seguinte comando.
>> `ng serve`

> ## Angular material
>> O angular material é uma biblioteca de ui que sera utilizada nos projetos.
>> Para realizar a instalação basta utilizar o comando `ng add @angular/material` na pasta raiz do projeto, e seguir com a instalação da forma que desejar.