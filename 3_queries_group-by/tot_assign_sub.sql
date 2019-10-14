SELECT cohorts.name AS cohort, count(assignment_submissions.*) AS submissions
FROM students
  JOIN cohorts ON (cohorts.id = students.cohort_id)
  JOIN assignment_submissions ON (assignment_submissions.student_id = students.id)
GROUP BY cohorts.name
ORDER BY submissions DESC;
