Search Devs
Descrição
Este projeto é uma aplicação Angular que permite a busca de desenvolvedores e seus repositórios no GitHub. A aplicação utiliza as bibliotecas PrimeNG e PrimeFlex para construir a interface do usuário e proporcionar uma experiência rica e responsiva.

Bibliotecas Utilizadas
PrimeNG
Utilizei o PrimeNG como a biblioteca principal de componentes devido à sua robustez e facilidade de uso. PrimeNG é uma biblioteca popular em aplicações corporativas e acadêmicas, oferecendo uma vasta gama de componentes prontos para uso.

PrimeFlex
PrimeFlex é uma biblioteca de utilitários CSS que complementa o PrimeNG, fornecendo funcionalidades como sistema de grade, flexbox, espaçamento, elevação e muito mais. Isso facilita a construção de layouts responsivos e modernos de maneira eficiente.

Estrutura do Projeto
O projeto está organizado em uma estrutura modular para facilitar a manutenção e escalabilidade. Abaixo está a descrição das principais pastas e seus conteúdos:

Core
Armazena funcionalidades centrais da aplicação que são utilizadas em todo o aplicativo.

services:
ApiService: Centraliza todas as chamadas HTTP para a API do GitHub, facilitando a manutenção e a reutilização do código.
UserService: Encapsula a lógica relacionada a usuários, como busca de detalhes e repositórios, separando a lógica de negócios da lógica de apresentação.
Pages
O diretório pages contém componentes que representam páginas completas da aplicação.

home: Página inicial que contém a barra de pesquisa.
search-results: Página que exibe os resultados da pesquisa.
Shared
Contém componentes que são usados em mais de um módulo ou componente, proporcionando reutilização e consistência na aplicação.

components:
search-bar: Barra de pesquisa reutilizável que pode ser usada em diferentes partes da aplicação.
user-card: Componente que exibe informações do usuário de forma consistente em diferentes partes da aplicação.
repository-list: Componente que lista repositórios, permitindo sua reutilização em várias páginas.
Como Executar o Projeto
Pré-requisitos
Node.js instalado
Angular CLI instalado globalmente
