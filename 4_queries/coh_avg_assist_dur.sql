
SELECT AVG(tot_duration) as average_total_duration
FROM
(SELECT SUM(assistance_requests.completed_at-assistance_requests.started_at) as tot_duration
FROM assistance_requests
JOIN students ON (students.id = student_id)
JOIN cohorts on (cohorts.id= cohort_id)
GROUP BY cohorts.name) as dur
