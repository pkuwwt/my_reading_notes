
# MySQL

## Basic Usages

  * Login: `mysql -h 127.0.0.1 -uroot -p`
  * Show Databases: `SHOW Databases;`
  * Show Current Database: `SELECT Database() FROM DUAL;`
  * Change Current Database: `USE database_name`;
  * Create Database: `CREATE DATABASE database_name;`
  * Show Tables: `SHOW Tables;`
  * Show Views: `SHOW FULL TABLES [IN database_name] WHERE TABLE_TYPE LIKE 'VIEW';
  * Show Table's Columns:
    * `DESCRIBE table_name;`
    * `SHOW COLUMNS FROM table_name;`

## Backup MySQL by `mysqldump`

We can use following script `backup_mysql.sh` to backup the remote MySQL database:
```bash
script_path=`readlink -f $0`
script_dir=`dirname $script_path`
path=$script_dir/backup-`date +%Y%m%d-%H:%M:%S.sql`
mysqldump -h 192.168.1.100 -u mysql_username -pmysql_password database_name >$path
```

And then use `crontab` to execute it daily:
```crontab
0 0 * * * /your/path/to/backup_mysql.sh
```

## Usage in Docker

  * Install image: `docker pull mysql`
  * Start Container: `docker run --name mysql-test -e MYSQL_ROOT_PASSWORD=mysql-test -p 3309:3306 -d mysql:latest --default-authentication-plugin=mysql_native_password`
  * Stop Container: `docker stop mysql-test`
  * Remove Container: `docker rm mysql-test`
  * Connect MySQL: `mysql -h 127.0.0.1 -P 3309 -uroot -pmysql-test`
  
