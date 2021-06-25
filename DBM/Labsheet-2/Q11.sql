-- Q11
-- List the name and status of all suppliers along with the project numbers they have
-- supplied parts to, if any. If a supplier has not supplied a part to any project, 
-- then the returned project number for that supplier should be NULL. 
select distinct Sname, Status, Jnum from Supplier
left join Supply 
on Supplier.Snum = Supply.Snum;
