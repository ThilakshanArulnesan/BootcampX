-- DO This one
SELECT cohorts.name,SUM(assistance_requests.completed_at-assistance_requests.started_at) as tot_duration
FROM assistance_requests
JOIN students ON (students.id = student_id)
JOIN cohorts on (cohorts.id= cohort_id)
GROUP BY cohorts.name
ORDER BY tot_duration ASC;
