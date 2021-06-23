-- Q6
-- Find the details of all suppliers who have no (or unknown) status.
select * from Supplier
where Status is null;
