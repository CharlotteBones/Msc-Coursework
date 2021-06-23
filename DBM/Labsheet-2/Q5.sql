-- Q5
-- List each supplier along with a list of the colours of the parts that supplier has supplied.
select distinct Sname, Colour from Supplier, Supply, Part
where Supplier.Snum = Supply.Snum and Part.Pnum = Supply.Pnum;
