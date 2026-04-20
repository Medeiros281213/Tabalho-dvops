# 1. Baixa um servidor web leve e pronto para uso (Nginx)
FROM nginx:alpine

# 2. Copia os seus arquivos (HTML, CSS, JS) para a pasta onde o Nginx le os sites
COPY . /usr/share/nginx/html

# 3. Avisa que o container vai liberar o acesso atraves da porta 80
EXPOSE 80