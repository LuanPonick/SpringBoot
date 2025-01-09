# Rotas

- Iniciando sobre rotas  da aplicação
    - Configuração inicial E rotas de standalone
    - Rotas filhas
- Interface router
- Extends
- Logica de rotas no projeto
    - Novo
    - Antigo
- LoadComponent
- Component
- Routchield

> ## Iniciando sobre rotas da aplicação
>> As rotas da aplicação são os meios que levam a tela X para a tela Y de uma aplicação. <br/>
>> ### Configuração inicial E rotas de standalone
>>> As configuraçoes de rotas se começam sempre da pasta raiz com o arquivo `app.routes.ts` para se entender rotas nos temos 2 formas, a forma sem componentes stand alone e com componentes stand alone, basicamente a principal diferença entre eles (falando de rotas) é que com um componente NÃO stand alone você tera que apontar ao modulo referente e esse modulo falara o apontamento das rotas mas já caso ele seja stand alone voce apontara diretamente ao arquivo de rotas.
>> ### Rotas filhas
>>> Nas rotas existe a teoria de rotas filhas, por exemplo, se é criado uma rota pai no `app.routes.ts` (localizado na pasta raiz da aplicação) e no pai é apontado a ele uma rota filha chamada `courses` e dentro dessa rota filha e instanciada uma rota `new` e que por sua vez essa rota faz a chamada do componente de criação de cursos de dentro da aplicação, e com tudo isso nos temos a seguinte url `courses/new`, porem dentro da rota filha nos tambem temos a possibilidade da edição de cursos dentro da aplicação, então dentro da rota filha tambem existe a rota `uppdate` deixando a url como `courses/uppdate`. As rotas filhas são estremamentes uteis porque com apenas uma instancia de rotas no objeto de rotas raiz da aplicação se torna possivel a criação de diversas rotas e porem principalmente sendo algo estremamente escalavel.


> ## Interface router
>> Quando se esta trabalhando com rotas é impossivel não utilizar a interface Routes
>> https://angular.dev/api/router/Route