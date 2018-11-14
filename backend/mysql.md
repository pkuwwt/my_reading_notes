
# MySQL

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
