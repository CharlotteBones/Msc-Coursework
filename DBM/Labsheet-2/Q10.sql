-- Q10
-- List the names of all suppliers with a status lower than 20 along with the name of all
-- projects they have supplied, if there are any, and the quantity supplied in each case.
select distinct Sname, Jname, QTY from Supplier, Supply, Project
where Supply.Snum = Supplier.Snum and Project.Jnum = Supply.Jnum and Status < 20;
