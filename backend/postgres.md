
# Postgre


## Basic Usage

  * login: `psql -h 127.0.0.1 -U postgres database`
  * show current database name: `SELECT current_database();`
  * list databases: `\l`
  * connect to a new database: `\c dbname`
  * show tables: `\dt`
  
### Add integer ID column

```
ALTER TABLE mytable ADD COLUMN id SERIAL PRIMARY KEY;
```
  
## Difference between PostgresSQL and MySQL

  * MySQL use back tick ` to quote table/column name, but Postgres use double quotes
  * MySQL use both double quotes and single quotes for string, but Postgres use only single quotes
  * MySQL use `t` or `f` for boolean, Postgres use `TRUE` or `FALSE`
  
## PostGIS

In order to use PostGIS in a database, we should execute `create extension postgis;` the first timei login the database.

### Add a Geography column

```SQL
alter table your_table add column geom geometry(Point, 4326);
update your_table set geom=st_SetSrid(st_MakePoint(longitude, latitude), 4326);
```

### Search points in a circle

Assume there is a `Geography` column called `where_is`, we can search points in a circle by

```SQL
SELECT * FROM mytable WHERE ST_DWithin(where_is, ST_Point(lon, lat), radius);
```

If we need the results to be ordered by distance, we can

```SQL
SELECT *,ST_Distance(where_is, ST_Point(lon, lat)) as dist FROm mytable WHERE ST_DWithin(where_is, ST_Point(lon, lat), radius) ORDER BY dist;
```

However, ordering results might be slow, so we should create an gist index:

```SQL
CREATE IDNEX myindex ON mytable USING gist(where_is);
```
