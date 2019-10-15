SELECT count(*) as total_assitances, name
FROM students
JOIN assistance_requests ON (students.id=assistance_requests.student_id)
WHERE students.name='Elliot Dickinson'
GROUP BY name;
