const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args= process.argv.splice(2);
const coh = args[0] || 'FEB';
const num = args[1] || 2;


pool.query(`
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON (cohorts.id = students.cohort_id)
WHERE cohorts.name LIKE '${coh}%'
LIMIT ${num};
`).then(res=>{
  res.rows.forEach((obj)=>{

    console.log(`${obj.name} has an id of ${obj.id} and was in the ${obj.cohort} cohort.`);
  })
})
.catch(err =>{
  console.error('query error', err.stack);
})

