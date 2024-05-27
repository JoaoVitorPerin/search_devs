<h1>Search Devs</h1>
<h2>Descrição</h2>
<p>Este projeto é uma aplicação Angular que permite a busca de desenvolvedores e seus repositórios no GitHub. A aplicação utiliza as bibliotecas PrimeNG e PrimeFlex para construir a interface do usuário e proporcionar uma experiência rica e responsiva.</p>

<h2>Como Executar o Projeto</h2>
<h3>1 - Pré-requisitos</h3>
<h4>1.1 - Node.js v20.12.1 instalado ou superior</h4>
<h4>1.2 - Angular CLI instalado globalmente</h4>

<h3>2 - Instalação</h3>
<h4>2.1 - Clone o repositório:</h4>
<p><i>git clone https://github.com/JoaoVitorPerin/search_devs.git</i></p>
<h4>2.2 - Navegue até o diretório do projeto:</h4>
<p><i>cd search-devs</i></p>
<h4>2.3 - Instale as dependências:</h4>
<p><i>npm install</i></p>

<h3>Executando a Aplicação</h3>
<h4>Para iniciar o servidor de desenvolvimento, execute:</h4>
<p><i>ng serve</i></p>
<h4>Para rodar a build de deploy da aplicação, execute:</h4>
<p><i>ng build --configuration production</i></p>

<h2>Bibliotecas Utilizadas</h2>
<h3>PrimeNG</h3>
Utilizei o PrimeNG como a biblioteca principal de componentes devido à sua robustez e facilidade de uso. PrimeNG é uma biblioteca popular em aplicações corporativas e acadêmicas, oferecendo uma vasta gama de componentes prontos para uso.

<h3>PrimeFlex</h3>
PrimeFlex é uma biblioteca de utilitários CSS que complementa o PrimeNG, fornecendo funcionalidades como sistema de grade, flexbox, espaçamento, elevação e muito mais. Isso facilita a construção de layouts responsivos e modernos de maneira eficiente.

<h3>PrimeIcons</h3>
PrimeIcons é a biblioteca de ícones padrão do PrimeNG com mais de 250 ícones de código aberto desenvolvidos pela PrimeTek.

<h3>date-fns</h3>
Fornece o conjunto de ferramentas mais abrangente, porém simples e consistente para manipular datas JavaScript em um navegador e Node.js

<h2>Estrutura do Projeto</h2>
O projeto está organizado em uma estrutura modular para facilitar a manutenção e escalabilidade. Abaixo está a descrição das principais pastas e seus conteúdos:

<h3>Core</h3>
<p>Armazena funcionalidades centrais da aplicação que são utilizadas em todo o aplicativo.</p>

<h4>- models:</h4>
<p>Os modelos (models) representam as entidades da aplicação e definem a estrutura dos dados que serão manipulados.</p>
<p>users: Define a estrutura de dados para os usuários</p>

<h4>- pipes:</h4>
<p>Os pipes são utilizados para transformar dados em templates Angular</p>
<p>truncate: Este pipe é usado para truncar textos longos, adicionando reticências (...) ao final se o texto exceder um comprimento específico.</p>

<h4>- services:</h4>
<p>Os serviços encapsulam a lógica de negócios e a comunicação com APIs externas, facilitando a manutenção e reutilização do código.</p>
<p>ApiService: Centraliza todas as chamadas HTTP para a API do GitHub, facilitando a manutenção e a reutilização do código.</p>
<p>UserService: Encapsula a lógica relacionada a usuários, como busca de detalhes e repositórios, separando a lógica de negócios da lógica de apresentação.</p>

<h3>Pages</h3>
<p>O diretório pages contém componentes que representam páginas completas da aplicação.</p>

<p>error-404: Página que o usuário é redirecionado caso tenha entrado em uma url invalida.</p>
<p>home: Página inicial que contém a barra de pesquisa.</p>
<p>search-results: Página que exibe os resultados da pesquisa.</p>

<h3>Shared</h3>
<p>Contém componentes que são usados em mais de um módulo ou componente, proporcionando reutilização e consistência na aplicação.</p>

<h4>- components:</h4>
<p>header: Header padrao contendo a logo e a barra de pesquisa.</p>
<p>search-bar: Barra de pesquisa reutilizável que pode ser usada em diferentes partes da aplicação.</p>
<p>user-info: Componente que exibe informações do usuário de forma consistente em diferentes partes da aplicação.</p>
<p>user-repos: Componente que lista repositórios, permitindo sua reutilização em várias páginas.</p>

<h2>Testes unitários</h2>
<p>Realizei testes unitários utilizando o Karma v6.4.3. Decidi fazer teste unitários naqueles componentes que julguei mais importantes para o funcionamento do sistema, estao listados a baixo:</p>

<h3>SearchBarComponent</h3>
<h4>O SearchBarComponent é crucial para a funcionalidade de busca de usuários no sistema. Testar este componente garante que os usuários possam pesquisar e encontrar outros usuários de forma eficiente e precisa. Além disso, verifica se o componente lida corretamente com diferentes cenários, como a pesquisa de usuários inexistentes ou a exibição de erros ao fazer requisições. Os principais motivos para testar este componente incluem:</h4>

<p>Verificação da funcionalidade de pesquisa: Garante que a busca por usuários funciona corretamente quando o formulário é submetido.</p>
<p>Manejo de erros: Verifica se o componente lida adequadamente com erros, como usuários não encontrados ou problemas de rede.</p>
<p>Navegação: Assegura que a navegação para a página de perfil do usuário está funcionando como esperado.</p>
<p>Inicialização do formulário: Garante que o formulário de busca é inicializado corretamente e que os parâmetros da rota são considerados ao preencher o campo de busca.</p>

<h3>ApiService</h3>
<h4>O ApiService é responsável por fazer as requisições HTTP para a API do GitHub. Testar este serviço é essencial para garantir que as comunicações com a API estejam funcionando corretamente. Os testes unitários deste serviço são importantes porque:</h4>

<p>Correção das URLs de requisição: Verifica se as URLs para as requisições HTTP estão corretas, garantindo que os dados certos estão sendo solicitados.</p>
<p>Manejo de respostas: Garante que as respostas da API são tratadas corretamente e que os dados são retornados no formato esperado.</p>
<p>Manejo de erros: Assegura que o serviço lida corretamente com erros, como falhas de rede ou respostas inválidas da API.</p>

<h3>UserService</h3>
<h4>O UserService é essencial para a interação com a API de usuários. Testar este serviço garante que as chamadas para obter informações de usuários e suas repositórios funcionem corretamente. Os testes unitários deste serviço são importantes porque:</h4>

<p>Integridade das requisições API: Assegura que as requisições para buscar usuários, informações de usuários e repositórios são feitas corretamente.</p>
<p>Tratamento de dados: Verifica se os dados retornados pela API são processados corretamente antes de serem utilizados no sistema.</p>
<p>Manejo de erros: Garante que o serviço lida corretamente com erros ao fazer requisições, fornecendo feedback apropriado para o usuário.</p>

<h3>TruncatePipe</h3>
<h4>O TruncatePipe é utilizado para truncar textos longos, melhorando a visualização de dados no sistema. Testar este pipe é importante porque:</h4>

<p>Consistência na exibição de dados: Garante que textos longos são truncados de forma consistente e previsível, mantendo a interface do usuário limpa e organizada.</p>
<p>Manejo de diferentes entradas: Verifica se o pipe lida corretamente com diferentes comprimentos de texto e limites de truncamento, incluindo casos de borda como textos vazios ou limites de truncamento zero.</p>

<h2>Como Executar os testes</h2>
<h4>Execute o comando a baixo:</h4>
<p><i>ng test</i></p>

<h2>Contribuição</h2>
<h3>Sinta-se à vontade para contribuir com o projeto. Basta abrir uma issue ou enviar um pull request com suas melhorias ou correções.</h3>
