
# Postgres


## Basic Usage

  * login: `psql -h 127.0.0.1 -U postgres database`
  * show current database name: `SELECT current_database();`
  * list databases: `\l`
  * connect to a new database: `\c dbname`
  * show tables: `\dt`
  * dump databases:
    * dump single database as text: `pg_dump dbname >backup.sql`
    * dump single database as binary: `pg_dump -Fc dbname >backup.dump`
    * dump all databases as text `pg_dumpall >backup.sql`
    * restore from text: `psql -f backup.sql postgres` (it's OK to connect any database including `postgres`)
    * restore from binary: `pg_restore -d dbname backup.dump`
  
### Add integer ID column

```SQL
ALTER TABLE mytable ADD COLUMN id SERIAL PRIMARY KEY;
```

### Change primary key

```SQL
-- Firstly, remove PRIMARY KEY attribute of former PRIMARY KEY
ALTER TABLE <table_name> DROP CONSTRAINT <table_name>_pkey;
-- Then change column name of  your PRIMARY KEY and PRIMARY KEY candidates properly.
ALTER TABLE <table_name> RENAME COLUMN <primary_key_candidate> TO id;
-- Lastly set your new PRIMARY KEY
ALTER TABLE <table_name> ADD PRIMARY KEY (id);
```

### Set column based on other table

```SQL
UPDATE table1 SET col1 (SELECT table2.val FROM table2 WHERE table1.val = table2.val);
```
  
### Delete column

```SQL
ALTER TABLE mytable DROP COLUMN col;
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
