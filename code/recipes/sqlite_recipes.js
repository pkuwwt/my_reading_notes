var sqlite3 = require('sqlite3');
var Promise = require('bluebird');

const handle_error = (err,msg) => err ? Promise.reject(err.message) : Promise.resolve(msg);

const wrap_db_func = (funcname, msg) => (db, ...params) => new Promise((res,rej) => {
    db[funcname].apply(db, [...params, (err,arg) => handle_error(err, arg||msg).then(res).catch(rej)]); 
});

const execute_sql_get_first = wrap_db_func('get');
const execute_sql_get_all = wrap_db_func('all');
const execute_sql_run = wrap_db_func('run');

const column_to_spec = ({name,type,property}) => {
    if(!name) console.error('null name in column_spec');
    if(!type) console.error('null type in column_spec');
    var spec = `${name} ${type}`;
    if(property) spec = spec + ' ' + property;
    return spec;
};
const columns_to_spec = columns => columns.map(column_to_spec).join(',');
const value_to_sql = value => (typeof(value)==='string') ? `'${value}'` : '' + value;
const columns_names = columns => columns.map(c => c.name).join(',');
const row_to_sql = row => row.map(value_to_sql).join(',');

const sql_search_table = tbname => `SELECT name FROM sqlite_master WHERE type='table' AND name='${tbname}';`;
const sql_create_table = (tbname, columns) => `CREATE TABLE IF NOT EXISTS ${tbname} (${columns_to_spec(columns)});`;
const sql_delete_table = tbname => `DROP TABLE IF EXISTS ${tbname};`;
const sql_insert_row = (tbname, columns, row) => `INSERT INTO ${tbname} (${columns_names(columns)}) VALUES (${row_to_sql(row)});`;

const open_db = file => new sqlite3.Database(file);
const close_db = wrap_db_func('close', 'close finished');
const has_table = (db, tbname) => execute_sql_get_first(db, sql_search_table(tbname));
/**
  * @param {Object[]} columns - Specify the definition of each column, 
  *                             in the form of [{name,type,property}], where the `property` is optional
  **/
const create_table = (db,tbname,columns) => execute_sql_run(db, sql_create_table(tbname, columns));
const delete_table = (db, tbname) => execute_sql_run(db, sql_delete_table(tbname));
/**
  * @param {Array} row - the list of the values for each column
  **/
const insert_row = (db,tbname,columns,row) => execute_sql_run(db, sql_insert_row(tbname, columns, row));

module.exports = {
    open_db,
    close_db,
    create_table,
    delete_table,
    insert_row,
    has_table,
};
