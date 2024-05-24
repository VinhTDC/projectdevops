FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD root12345
ENV MYSQL_DATABASE tdc-devops

COPY database.sql /docker-entrypoint-initdb.d/

EXPOSE 3306