SELECT students.name AS "name", AVG(assignment_submissions.duration) AS "Average Duration"
FROM students
  JOIN assignment_submissions ON (assignment_submissions.student_id = students.id)
WHERE students.end_date IS NULL
GROUP BY students.name
ORDER BY "Average Duration" DESC;
