# Define a imagem base
FROM ubuntu:latest

# Atualiza a lista de pacotes
RUN apt-get update && apt-get upgrade -y && apt-get install -y curl

# Instala o Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Instala o NestJS CLI globalmente
RUN npm install -g @nestjs/cli

# Instala o PostgreSQL
RUN apt-get install -y postgresql postgresql-contrib

# Cria um usuário e um banco de dados para a aplicação
RUN service postgresql start && su postgres -c "psql -c \"CREATE USER myuser WITH PASSWORD 'mypassword';\""
RUN service postgresql start && su postgres -c "psql -c \"CREATE DATABASE mydatabase OWNER myuser;\""

# Copia os arquivos do backend para a imagem e instala as dependências
COPY backend/ /app/backend/
WORKDIR /app/backend
RUN npm install

# Copia os arquivos do frontend para a imagem e instala as dependências
COPY frontend/ /app/frontend/
WORKDIR /app/frontend
RUN npm install

# Configura o serviço do mailtrap no backend
ENV MAIL_HOST=smtp.mailtrap.io
ENV MAIL_PORT=2525
ENV MAIL_USERNAME=username
ENV MAIL_PASSWORD=password

# Expõe as portas para a aplicação
EXPOSE 3000
EXPOSE 5432

# Inicia tanto o backend quanto o frontend com suas respectivas dependências
CMD service postgresql start && cd /app/backend && npm run start:dev & cd /app/frontend && npm start
