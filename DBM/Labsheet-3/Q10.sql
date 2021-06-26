-- Q10
-- Find the name of the projects that have been supplied with ‘Red’ colour parts. Use
-- IN to answer this question.
select Jname from Project
where Jnum in 
	(select Jnum from Supply 
	where Pnum in 
		(select Pnum from Part 
		where colour = 'red'));
