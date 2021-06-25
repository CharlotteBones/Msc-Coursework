-- Q8
-- Find the details of all projects, which do not have a known value for city or are not
-- based in Athens.
select * from Project
where City is null or City != 'Athens';
