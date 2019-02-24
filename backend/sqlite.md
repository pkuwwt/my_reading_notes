
#  Sqlite

## Basic commands

  * Open database file: `sqlite3 file.db`
  * Dump database to sql: `sqlite3 file.db .dump >out.sql`
  * Import sql to database:
    * in sqlite prompt: `> .read out.sql`
    * in command: `cat out.sql | sqlite3 newfile.db`
  *
