LIBS
Resolvi utilizar o PrimeNg pois uso atualmente como minha biblioteca de componentes principal, tanto no trabalho como para possiveis trabalhos da faculdade. 
Tambem utilizei o PrimeFlex que é uma biblioteca de utilitários CSS que disponibiliza várias features, como sistema de grade, flexbox, espaçamento, elevação e muito mais.

ESTRUTURA
Resolvi estruturar o projeto da seguinte forma:

Core
Armazena funcionalidades centrais da aplicação que são utilizadas em todo o aplicativo.

    - services:
    Resolvi separar em dois services, pois um encapsula a lógica relacionada a usuários, como busca de detalhes e repositórios, separando a lógica de negócios da lógica de apresentação e o outro centraliza todas as chamadas HTTP para a API, facilitando a manutenção e a reutilização do código.

Pages
O diretório pages contém componentes que representam páginas completas da aplicação.

    - home: Página inicial que contém a barra de pesquisa.
    - search-results: Página que exibe os resultados da pesquisa.

Shared
Contém componentes que são usados em mais de um módulo ou componente.

    -components:
        - search-bar: Barra de pesquisa reutilizável que pode ser usada em diferentes partes da aplicação.
        - user-card: Componente que exibe informações do usuário de forma consistente em diferentes partes da aplicação.
        - repository-list: Componente que lista repositórios, permitindo sua reutilização em várias páginas.