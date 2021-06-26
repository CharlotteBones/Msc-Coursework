-- Q9
-- Find the name and the quantity of the parts that have been supplied in the smallest
-- quantities by a supplier to a project
select Pname, QTY from Part, Supply 
where Part.Pnum = Supply.Pnum and QTY = 
    (select min(QTY) from Supply);
