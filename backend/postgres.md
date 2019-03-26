
# Postgre


## Basic Usage

  * login: `psql -h 127.0.0.1 -U postgres database`
  * show current database name: `SELECT current_database();`
  * list databases: `\l`
  * connect to a new database: `\c dbname`
  * show tables: `\dt`
  
## PostGIS

### Add a Geography column

```SQL
alter table your_table add column geom geometry(Point, 4326);
update your_table set geom=st_SetSrid(st_MakePoint(longitude, latitude), 4326);
```
