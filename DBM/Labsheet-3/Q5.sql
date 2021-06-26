-- Q5
-- Find the number of different parts (not their quantities) supplied to the J2 project.
select distinct Count(Pnum) from Supply
where Jnum = 'J2';
