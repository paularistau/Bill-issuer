## KANASTRA HIRING CHALLENGE

#### Este projeto consiste em uma aplicação que utiliza o NestJS, PostgreSQL e React.

### Pré-requisitos

Docker instalado na sua máquina.

### **Como rodar o projeto**

1.  Clone este repositório na sua máquina:  
    `git clone` [`https://github.com/seu-usuario/projeto-xyz.git`](https://github.com/seu-usuario/projeto-xyz.git)
2.  Entre na pasta do projeto:  `cd projeto-xyz`
3.  Construa a imagem Docker a partir do Dockerfile: `docker build -t projeto-xyz`
4.  Execute a imagem Docker criada: `docker run -p 3000:3000 -p 5432:5432 projeto-xyz`
5.  Acesse a aplicação em [http://localhost:3000.](http://localhost:3000)

**Informações adicionais**

O serviço do mailtrap está configurado no backend com as seguintes variáveis de ambiente:

`MAIL_HOST=smtp.mailtrap.io`

`MAIL_PORT=2525`

`MAIL_USERNAME=username`

`MAIL_PASSWORD=password`

**Certifique-se de adicionar essas informações ao arquivo .env no diretório backend antes de construir a imagem Docker.**



A porta 3000 é exposta para a aplicação web e a porta 5432 é exposta para o PostgreSQL. Certifique-se de que essas portas não estejam sendo usadas por outros serviços na sua máquina antes de executar o Docker.

Para encerrar a execução do Docker, utilize o comando CTRL+C no terminal em que o Docker está sendo executado.
