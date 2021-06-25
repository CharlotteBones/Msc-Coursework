-- Q12
-- List the name and status of any supplier who has never supplied to any project.
select Sname, Status from Supplier
left join Supply on
Supplier.Snum = Supply.Snum
where Jnum is null;
