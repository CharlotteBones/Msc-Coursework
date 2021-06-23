-- Q1
-- Find the name and status of all suppliers who supply part P4.
select Sname, status from Supplier, Supply
where Supplier.Snum = Supply.Snum and Supply.Pnum = 'P4';
