import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

let connection;

const createConn = () => {
  connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
};

let connectionPromise;
// connection.connect((err) => {
//   if (err) throw err; // not connected!
//   console.log("MySql Connected...");
// });

async function executeQuery(query) {
  try {
    createConn();
    connectionPromise = connection.promise();
    let y;
    await connectionPromise.query(query).then((response) => {
      y = response[0];
    });
    return y;
  } catch (error) {
    throw error;
  } finally {
    connection.end((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connection Terminated");
      }
    });
  }
}

// const execute = async (qry) => {
//   try {
//       const starTime = performance.now()
//       const results = await query(qry);
//       const endTime = performance.now()
//       return [results, starTime, endTime];
//   } catch(err) {
//       throw err;
//   } finally {
//       conn.end((err)=>{
//           if(err){
//               console.log(err)
//           } else{
//               console.log("Connection Terminated")
//           }
//       });
//   }
// }

export { connectionPromise, executeQuery };
