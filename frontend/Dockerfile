# Usa a imagem oficial do Node.js como base
FROM node:14-alpine

# Define o diretório de trabalho do aplicativo dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e o arquivo yarn.lock para o diretório de trabalho
COPY package.json yarn.lock ./

# Instala as dependências do aplicativo
RUN yarn install

# Copia o código-fonte do aplicativo para o diretório de trabalho
COPY . .

# Constrói a aplicação React
RUN yarn build

# Expõe a porta 80 para acesso externo
EXPOSE 80

# Define o comando a ser executado quando o contêiner for iniciado
CMD ["yarn", "start"]
