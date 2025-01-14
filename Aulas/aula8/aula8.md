# Aula 8
- Gerando Serviço
- Configuração de serviço
- Instancia de serviço

> ## Gerando Serviço
>> para fazer a geração de um serviço se deve utilizar o seguinte comando
>> `ng g s caminho/nomeservico`

> ## Configuração de um serviço
>> a principal diferença quando falamos da criação de um serviço a um componente é que um serviço nao possue um decorador `@Componente` mas sim um `@Injectable`.
>> com o `@Injectable` nos queremos dizer que as dependencias serao injetadas por um outro lugar (Nomalmente sendo utilizado o root/raiz do projeto)

> ## Instancia de serviço
>> para ser feita a criação de uma instancia de um serviço no agular basta apenas criar dentro do componente na parte do contrutor da senguinte forma
>>```TS
>>export class  nome implements onInit{
>>    dataSource: CoursesInterface[] = [];
>>
>>    constructor(private coursesService: CoursesService) { }
>>    ngOnInit(): void {
>>       this.dataSource = this.coursesService.getList();
>>    }
>>}
>>```
>>