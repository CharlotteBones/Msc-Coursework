-- Q3
-- Find the name of each supplier and the name of each part where the supplier supplies the
-- part to project J4.
select distinct Sname, Pname from Supplier, Part, Supply
where Supplier.Snum = Supply.Snum and Supply.Pnum = Part.Pnum and Supply.Jnum = 'J4';
