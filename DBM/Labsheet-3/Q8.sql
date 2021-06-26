-- Q8
-- Find the name and city of each project not supplied with a ‘Red’ part.
select Jname, City from Project 
where Jnum not in
    (select Jnum from Supply 
    where Pnum in
        (select Pnum from Part 
        where colour = 'red'));
