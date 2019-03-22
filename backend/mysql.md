
# MySQL

## Basic Usages

  * Login: `mysql -h 127.0.0.1 -uroot -p`
  * Show Databases: `SHOW Databases;`
  * Show Current Database: `SELECT Database() FROM DUAL;`
  * Change Current Database: `USE database_name`;
  * Create Database: `CREATE DATABASE [IF NOT EXISTS] database_name;`
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

## Import sql file

We can import sql from a dumped file:

```
mysql -h127.0.0.1 -uroot -p database <db.sql
```

In Linux, the import may be very slow. Just add `set autocommit=0;` at the beginning of sql file and `commit;` at the end of it.

## Import from .mdb

Install `mdbtools` first.

```bash
#!/bin/bash

if (( $# < 2 )); then
    echo "USAGE: $0 input.mdb database"
    exit
fi

TABLES=$(mdb-tables -1 $1)

MUSER="root"
MPASS="yourpassword"
MDB="$1"
DB="$2"

MYSQL=$(which mysql)

CMD="$MYSQL -u$MUSER -p$PASS"

EXPORT="mdb-export -D '%Y-%m-%d %H:%M:%S' -I mysql"

$CMD -e "CREATE DATABASE IF NOT EXISTS $DB"

for t in $TABLES
do
    $CMD $DB -e "DROP TABLE IF EXISTS $t"
done

mdb-schema $1 mysql | $CMD $DB

for t in $TABLES
do
    { echo "set autocommit=0;"; $EXPORT $MDB $t; echo "commit;" } | $CMD $DB
done
```

## Programming

### python

After mysql/mariadb client is installed, `pip install mysql-connector`. The usage example:

```python
from mysql import connector
con = connector.connect(user='root', password='xxxx', host='127.0.0.1')
cur = con.cursor()
cur.execute('USE mydb')
cur.execute('SHOW TABLES')
tables = cur.fetchall()
for (tbname, ) in tables: print(tbname)
con.close()
```

Example for SQLAlchemy+mysql-connector (`pip install sqlalchemy mysql-connector` first):

```python
from sqlalchemy import create_engine
engine = create_engine('mysql+mysqlconnector://user:password@127.0.0.1/mydb')
con = engine.connect()
tables = con.execute('SHOW TABLES')
for (tbname, ) in tables: print(tbname)
```

## Usage in Docker

  * Install image: `docker pull mysql`
  * Start Container: `docker run --name mysql-test -e MYSQL_ROOT_PASSWORD=mysql-test -p 3309:3306 -d mysql:latest --default-authentication-plugin=mysql_native_password`
  * Stop Container: `docker stop mysql-test`
  * Remove Container: `docker rm mysql-test`
  * Connect MySQL: `mysql -h 127.0.0.1 -P 3309 -uroot -pmysql-test`
  
