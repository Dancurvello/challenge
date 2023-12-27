<br>

<h1 align="center">Aplicação Frontend e Backend | Desafio Técnico </h1>

<br>
<h2>Demonstração em produção (frontend), ACESSE:</h2> <a traget="_blank" href="https://challengefrontendstefanini.vercel.app/">https://challengefrontendstefanini.vercel.app/</a>

<br>
<br>
<img src="/assetstoreadme/fibonacci.png" alt="" width="100%">
<img src="/assetstoreadme/homepage.png" alt="" width="100%">
<img src="/assetstoreadme/breakline.png" alt="" width="100%">

<h1>Sumário</h1>
<ul>
  <li><a href="#descricao">Descrição do projeto</a></li>
  <li><a href="#tecnologias">Tecnologias usadas</a></li>
  <li><a href="#fluxo">fluxo do projeto</a></li>
  <li><a href="#iniciarProjetodocker">Como iniciar o projeto com Docker</a></li>
  <li><a href="#iniciarProjetodefault">Como iniciar o projeto sem docker</a></li>
  <li><a href="#consideracoes">Considerações Finais</a></li>
</ul>

<br>

<a name="descricao">
<h1>Descrição do projeto</h1>

**<p>Backend.</p>**
<p>No desafio do backend foi pedido 2 soluções: 1 - Fibonacci e 2 - {aguardando retorno do Emerson}</p>
<br>

**<p>Frontend.</p>**
<p>No desafio do frontend foi pedido 2 soluções: 1 - Quebra de linha e 2 - Preenchimento obrigatório</p>


<br>


<a name="tecnologias">
<h1>Tecnologias usadas </h1>

### Backend: 
- [Java 17]

### Frontend:
- [Javascript];
- [ReactJS];


### Banco de dados:
- [Não foi necessário]

<br>



<a name="fluxo">
<h1>Fluxo do projeto</h1>

**<p>Backend - Fibonacci.</p>**

Classe Main (package org.example):

Contém o método main, que é o ponto de entrada do programa.
Exibe uma mensagem de boas-vindas.
Verifica se está sendo executado em um ambiente Docker.
Métodos dockerLogic() e defaultLogic():

Ambos solicitam ao usuário que insira o número máximo para a sequência de Fibonacci usando o método readUserInput.
Chamam o método calcularFibonacci da classe serviceFibonacci passando o número máximo como argumento.
Método readUserInput(String prompt):

Aceita uma mensagem de prompt como argumento.
Usa a classe Scanner para obter a entrada do usuário, seja a partir do console ou do terminal interativo.
Classe serviceFibonacci (package org.example.service):

Contém o método calcularFibonacci(int maxNumero) que calcula e exibe a sequência de Fibonacci até o número máximo especificado.
Utiliza um loop while para calcular e imprimir os termos da sequência.
Comunicação entre Main e serviceFibonacci:

Main chama os métodos dockerLogic() ou defaultLogic(), dependendo do ambiente.
Ambos os métodos chamam readUserInput para obter o número máximo do usuário.
Em seguida, chamam calcularFibonacci da classe serviceFibonacci passando o número máximo como argumento.
Este fluxo permite que a classe Main interaja com a classe serviceFibonacci, solicitando e passando informações necessárias para o cálculo e exibição da sequência de Fibonacci.

<a name="iniciarProjetodocker">
<h1>Iniciando com docker</h1> 

<br> Acessar via Docker (precisa instalar o docker):
<br> Passo 1: git clone https://github.com/Dancurvello/challenge.git
<br> Passo 2: entre no diretório clonado
<br> Passo 3: docker-compose build
<br> Passo 4: docker-compose up

<br>
OBS: Pode ser que tenha problemas de testar o backend via docker, pois o container pode encerrar automaticamente
caso ele não detecte um input do usuário (Sugiro acessar via modo convencional, sem docker)

<a name="iniciarProjetodefault">
<h1>Iniciando sem docker</h1> <br>

Acessar via clone convencional do repositório (precisa instalar java, node e git)
<br> Passo 1: git clone https://github.com/Dancurvello/challenge.git
<br> Passo 2: entre no diretório clonado
<br> Passo 3: escolha qual aplicação você quer testar (frontend ou backend) <br>
     Passo 3.1: frontend - "npm install" e depois "npm start" <br>
     Passo 3.2: backend - abra uma IDE e rode a aplicação backend <br>






