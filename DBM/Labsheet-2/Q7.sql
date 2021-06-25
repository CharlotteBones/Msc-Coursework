-- Q7
-- Find the details of all suppliers who do not have a status known to be equal to 20
select * from Supplier
where Status != 20 or Status is null;
