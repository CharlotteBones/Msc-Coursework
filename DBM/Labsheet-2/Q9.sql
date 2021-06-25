-- Q9
-- Find the details of all projects, which have a known value for city and are not based in
-- Athens.
select * from Project
where City != 'Athens';
