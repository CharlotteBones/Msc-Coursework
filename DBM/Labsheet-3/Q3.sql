-- Q3
-- List the numbers (JNUM), names and cities of all projects which either have an āeā in 
-- their name or have an āaā in their name and are based in London.
select Jnum, Jname, City from Project
where Jname like '%e%' or (City = 'London' and Jname like '%a%');
