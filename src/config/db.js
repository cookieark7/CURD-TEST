import pkg from "pg";
const {Pool} = pkg;

const pool = new Pool({
    user:process.env.dbUSER,
    host:process.env.dbHOST,
    database:process.env.dbDATABASE,
    password:process.env.dbPASSWORD,
    port: process.env.dbPORT
})

pool.on("connect",()=>{
    console.log("connection pool established with database");
});

export default pool;