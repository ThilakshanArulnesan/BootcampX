const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args= process.argv.splice(2);
const coh = args[0] || 'FEB12';

console.log("connected");

pool.query(`
SELECT  DISTINCT(teachers.name) as teacher,cohorts.name as cohort
FROM assistance_requests
JOIN teachers on (teachers.id = teacher_id)
JOIN students on (students.id=student_id)
JOIN cohorts on (cohorts.id = cohort_id)
WHERE cohorts.name='${coh}'
ORDER BY teachers.name;

`).then(res=>{
  res.rows.forEach((obj)=>{
    console.log(`${obj.cohort}: ${obj.teacher}`);
  })
})
.catch(err =>{
  console.error('query error', err.stack);
})

