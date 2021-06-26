-- Q2
-- List the name, status and city of all suppliers who have a status greater than 15 and
-- are not based in London or, regardless of status, are based in Paris. 
select Sname, Status, City from Supplier
where (Status > 15 and City != 'London') or City = 'Paris';
