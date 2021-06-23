-- Q4
-- Find the name and status of each supplier and the name and weight of each part where the
-- supplier supplies the part to the RAID project.
select distinct Sname, Status, Pname, Weight from Supplier, Supply, Part, Project
where Part.Pnum = Supply.Pnum and Supplier.Snum = Supply.Snum 
and Supply.Jnum = Project.Jnum and Jname = 'RAID';
