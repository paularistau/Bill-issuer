## Kanastra Hiring Challenge 🛫

Este projeto foi desenvolvido utilizando algumas das mais populares tecnologias do mercado: Nestjs, TypeORM, PostgreSQL e React. A escolha dessas tecnologias foi baseada em dois principais fatores: familiaridade e facilidade de implementação de múltiplos ambientes.

O Nestjs é um framework para Node.js que permite a criação de aplicações escaláveis e eficientes. Ele utiliza uma arquitetura modular baseada em módulos, o que torna o código mais organizado e fácil de manter. Além disso, o Nestjs é altamente configurável e extensível, permitindo que os desenvolvedores personalizem a aplicação de acordo com suas necessidades.

O TypeORM é um ORM (Object Relational Mapping) para TypeScript e JavaScript que permite a interação com bancos de dados de forma mais intuitiva e eficiente. Ele suporta diversos bancos de dados, incluindo o PostgreSQL, e possui uma sintaxe fácil de entender, o que torna o desenvolvimento mais rápido e produtivo.

O PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto e um dos mais populares no mercado. Ele é conhecido por sua estabilidade, segurança e desempenho, e é amplamente utilizado em aplicações empresariais.

Por fim, o React é uma biblioteca JavaScript para construção de interfaces de usuário. Ele permite a criação de componentes reutilizáveis e oferece uma forma eficiente de atualizar a interface de acordo com as mudanças de estado da aplicação. O React também é altamente personalizável e possui uma vasta comunidade de desenvolvedores.

Em resumo, a escolha dessas tecnologias para o desenvolvimento deste projeto foi baseada em sua qualidade, popularidade e facilidade de uso. Além disso, a familiaridade dos desenvolvedores com essas tecnologias permitiu um desenvolvimento mais rápido e eficiente. O resultado final é uma aplicação robusta, escalável e de alta qualidade.

## Prototipagem

Inicialmente, desenvolvi um pequeno protótipo visual da aplicação utilizando a ferramenta Figma, que está disponível para visualização através [deste link](https://www.figma.com/file/0GnCv9UYloESzoD6aCEwws/Kanastra?node-id=0-1&t=wWplF6SJcCJo0cdP-0). O projeto tem um design minimalista e busca proporcionar uma utilização intuitiva da plataforma, além de ter sido desenvolvido utilizando princípios de design system, resultando em componentes que foram utilizados no projeto.

Abaixo, você pode conferir alguns prints do layout, que apresentam a interface limpa e organizada da plataforma, visando facilitar o gerenciamento de dívidas de forma simples e prática. Acredito que essa abordagem tornará a experiência do usuário mais agradável e eficiente.

## Rodando o projeto

Para iniciar o projeto, primeiro é necessário clonar o repositório a partir do Github. Você pode fazer isso executando o seguinte comando em seu terminal:

```css
git clone https://github.com/paularistau/kanastra-hiring.git
```

Após clonar o repositório, é necessário criar as variáveis de ambiente para o PostgreSQL e para o serviço de recebimento de e-mails. No caso deste projeto, o serviço utilizado para recebimento de e-mails foi o Mailtrap, que permite criar uma conta de teste gratuitamente.

Para criar as variáveis de ambiente, você pode adicionar diretamente no arquivo docker-compose.yml, sem utilizar um arquivo .env. Para isso, basta editar o arquivo docker-compose.yml e adicionar as seguintes variáveis de ambiente:

```css
environment:
     POSTGRES_HOST: <nome_do_host_do_postgres>
     POSTGRES_PORT: <numero_da_porta_do_postgres>
     POSTGRES_USER: <nome_do_usuario_do_postgres>
     POSTGRES_PASSWORD: <senha_do_usuario_do_postgres>
     POSTGRES_DB: <nome_do_banco_de_dados_do_postgres>
     MAILTRAP_HOST: <smtp_host_do_mailtrap>
     MAILTRAP_PORT: <smtp_port_do_mailtrap>
     MAILTRAP_USERNAME: <smtp_user_do_mailtrap>
     MAILTRAP_PASSWORD: <smtp_pass_do_mailtrap>
     PGADMIN_DEFAULT_EMAIL: <email_do_usuario_do_pgadmin>
     PGADMIN_DEFAULT_PASSWORD: <senha_do_usuario_do_pgadmin>
```

Para inicializar o projeto, utilizamos o Docker Compose. Com ele, você irá inicializar todos os containers necessários para utilizar o projeto. O Docker Compose irá criar um container para o servidor de back-end, um para o front-end, um container para o banco de dados PostgreSQL e um container para o serviço de e-mail (no caso, o Mailtrap).

Para executar o projeto com o Docker Compose, basta executar o comando abaixo no diretório raiz do projeto:

```css
docker compose up --build
```

Este comando irá construir as imagens do Docker, inicializar os containers e executar o projeto. Dependendo do desempenho da sua máquina e da velocidade da sua conexão com a internet, o processo de instalação pode demorar alguns minutos.

Após a execução do comando acima, você poderá acessar a aplicação backend em seu navegador em [http://localhost:3000](http://localhost:3000) e a front-end em [http://localhost:3434/debts](http://localhost:3434/debts).

Caso você queira executar o Docker Compose em modo "detached", ou seja, sem exibir o log dos containers no terminal, basta adicionar o parâmetro "-d" ao final do comando, como abaixo:

```css
docker compose up -d
```

Com isso, os containers serão executados em segundo plano e você poderá utilizar o terminal para executar outros comandos. Para visualizar o log dos containers, basta executar o comando abaixo:

```css
docker compose logs -f
```

Este comando irá exibir o log dos containers em tempo real no terminal.

Após a execução do comando \`docker-compose up\`, você pode acessar o pgAdmin em seu navegador em http://localhost:8080. O pgAdmin é uma ferramenta de gerenciamento de banco de dados PostgreSQL que pode ser acessada através de um navegador.

Ao acessar o pgAdmin, você será solicitado a fazer o login. Para fazer o login, utilize o e-mail e a senha declarados nas variáveis de ambiente \`PGADMIN_DEFAULT_EMAIL\` e \`PGADMIN_DEFAULT_PASSWORD\`. Essas variáveis de ambiente foram definidas no arquivo docker-compose.yml.

Após fazer o login, você precisará criar uma conexão com o banco de dados PostgreSQL. Para isso, siga os passos abaixo:

1.  Clique com o botão direito do mouse em "Servers" no painel esquerdo do pgAdmin e selecione "Create" > "Server".
2.  Na tela de criação de servidor, defina um nome para a conexão e vá para a aba "Connection".
3.  Na aba "Connection", defina as seguintes informações:

- Host name/address: \`postgres\`  
            - Port: \`5432\`  
            - Maintenance database: \`postgres\`  
            - Username: \`\<nome_do_usuario_do_postgres>\`  
            - Password: \`\<senha_do_usuario_do_postgres>\`

Lembre-se de substituir os valores entre "\<>" pelas suas informações de usuário e senha do PostgreSQL.

4. Clique em "Save" para criar a conexão.

Com a conexão criada, você poderá gerenciar o banco de dados PostgreSQL utilizando o pgAdmin.

## Utilizando a aplicação

Com o Docker Compose em execução e o pgAdmin configurado, você pode acessar o frontend da aplicação em seu navegador em http://localhost:3434/debts.

ar o frontend, você poderá utilizar os recursos da plataforma. A aplicação permite que você crie, edite, liste e delete dívidas. Além disso, a plataforma possui uma funcionalidade de envio de e-mail de notificação para os devedores.

Para criar uma nova dívida, basta clicar no botão "Novo Débito" na página /debts. Na tela de criação de dívida, você deverá informar o nome do devedor, e-mail, CPF/CNPJ, o valor da dívida e a data de vencimento. Além disso, você poderá importar um arquivo .csv para realizar um bulk upload de débitos na aplicação. Sugerimos que utilize o arquivo na pasta api/examples para facilitar a padronização dos dados na formatação adequada às entidades do TypeORM.

Após criar a dívida, o e-mail será enviado aos devedores com os débitos em aberto. É necessário configurar as variáveis de ambiente para o serviço de e-mail (no caso, o Mailtrap) conforme mencionado anteriormente.

Com essas funcionalidades, a plataforma permite que você gerencie as dívidas de forma eficiente e automatizada, aumentando a produtividade e melhorando a experiência do usuário.

Para dar baixa em um pagamento, você pode escanear o QRCode do e-mail ou acessar a URL. Dessa forma, o pagamento será adicionado à tabela e concluído no sistema. Na tela Pagamentos, é possível visualizar todos os pagamentos que foram concluídos.

Com isso, concluímos o tutorial de instalação e utilização da plataforma. Espero que você possa aproveitar ao máximo as funcionalidades disponíveis e que possa utilizar a plataforma para gerenciar suas dívidas de forma eficiente e automatizada.

Gostaria de aproveitar para agradecer a oportunidade de participar do desafio e pela chance de contribuir com este projeto. Caso tenha alguma dúvida ou sugestão, não hesite em entrar em contato.

Mais uma vez, muito obrigada pela oportunidade.
