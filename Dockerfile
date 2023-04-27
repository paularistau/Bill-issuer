FROM ubuntu:latest

# Atualiza os pacotes existentes e instala as dependências necessárias
RUN apt-get update && apt-get install -y curl git gnupg2

# Instala o Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

# Instala o Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

# Instala o NestJS CLI globalmente
RUN yarn global add @nestjs/cli

# Instala o Postman
RUN wget https://dl.pstmn.io/download/latest/linux64 -O postman.tar.gz && \
    tar -xzf postman.tar.gz -C /opt && \
    rm postman.tar.gz && \
    ln -s /opt/Postman/Postman /usr/bin/postman

# Instala o React CLI globalmente
RUN yarn global add react-scripts

# Copia o código do front-end para o diretório /app
COPY ./frontend /app

# Instala as dependências do front-end
RUN cd /app && yarn install

# Copia o código do back-end para o diretório /api
COPY ./api /api

# Instala as dependências do back-end
RUN cd /api && yarn install

# Configura o Mailtrap no back-end
ENV MAILTRAP_HOST smtp.mailtrap.io
ENV MAILTRAP_PORT 2525
ENV MAILTRAP_USER <your_mailtrap_username>
ENV MAILTRAP_PASS <your_mailtrap_password>

# Expor as portas 3000 (front-end) e 4000 (back-end)
EXPOSE 3000 4000

# Inicia o back-end
CMD ["yarn", "start:api"]

# Inicia o front-end em segundo plano
CMD ["yarn", "start:frontend"]
