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

<h2>Contribuição</h2>
<h3>Sinta-se à vontade para contribuir com o projeto. Basta abrir uma issue ou enviar um pull request com suas melhorias ou correções.</h3>
