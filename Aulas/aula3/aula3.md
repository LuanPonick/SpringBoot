# Aula 3
- import de componentes de ui angular > 17 
- Importando toolbar

> ## import de componentes de ui angular > 17 
>> Para realizar imports de componentes de UI acima do angular 17 é diferente do que a versoes mais antigas porque em versoes anteriores os imports ficavam dentro de `app.module.ts` e na versão 17 esse arquivo não se faz presente.
>>Para realizar o import deve ser criada no arquivo `app.component.ts` dentro da interface `Component`
>>```ts
>>    @Component{
>>        /*(...)*/
>>        imports[/*(...)*/],
>>        /*(...)*/
>>    }
>>```
>>

> ## Importando toolbar
>> no arquivo `app.module.ts` primeiro coloque o import da API `import { MatToolbarModule } from '@angular/material/toolbar';` no cabeçalho do arquivo, e agora apenas adicione a classe importada a interface `@Component` a propriedade `imports`
>> ___
>> ### Exemplo :
>>
>>```ts
>>import { Component } from '@angular/core';
>>import { RouterOutlet } from '@angular/router';
>>import { MatToolbarModule } from '@angular/material/toolbar';
>>
>>@Component({
>>  selector: 'app-root',
>>  imports: [RouterOutlet, MatToolbarModule],
>>  templateUrl: './app.component.html',
>>  styleUrl: './app.component.scss'
>>})
>>export class AppComponent {
>>  
>>}
>>```

