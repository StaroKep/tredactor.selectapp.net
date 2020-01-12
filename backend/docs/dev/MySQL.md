[use Editor.md](https://pandao.github.io/editor.md/en.html "Editor.md")

# How run MySQL local using docker
### [MySQL server for Docker](https://hub.docker.com/r/mysql/mysql-server/ "MySQL server for Docker")



### [Example of running](https://www.youtube.com/watch?v=w_aVnMmrASE "Example of running")

[More one example](https://www.youtube.com/watch?v=KbscoyyXJ2Q "More one example")

`docker run --name=TredactorMySQL -d -e MYSQL_ROOT_PASSWORD=trdev -p 60125:3306 mysql/mysql-server`

- Need add `-p <some_port>:3306` to expose port



### Need update root user host from `localhost` to `%` 

- `docker exec -it TredactorMySQL mysql -uroot -ptrdev`
- `select host, user from mysql.user;`
- `update mysql.user set host='%' where user='root';`
- `ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'trdev';`
- `commit;`
- `exit;`



### Need add `bind-address = 0.0.0.0` to my.cnf 

- `docker exec -it TredactorMySQL bash`
- `cd etc`
- `cat my.cnf`
- `echo "bind-address = 0.0.0.0" >> my.cnf`



### Need restart container `docker restart TredactorMySQL`



### Connection:

- host:  127.0.0.1
- port: 3306
- use: root
- password: *your*



### [Use MySQL Workbench](https://www.mysql.com/products/workbench/ "Use MySQL Workbench")