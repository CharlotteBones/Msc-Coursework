-- Q7
-- For each project name (jname), find the total quantities of parts supplied to it.
-- Arrange the results in descending order of their total quantities.
select Jname, sum(QTY) from Supply, Project 
where Supply.Jnum = Project.Jnum
group by JNAME
Order by sum(QTY) DESC;
