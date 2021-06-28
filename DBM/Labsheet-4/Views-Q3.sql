-- Q3
-- Using the “screw_part” view, find the names of projects that have been supplied
-- with the screw parts whose weight is known.
select distinct Jname, Pname from Project, Supply, screw_parts
where Project.Jnum = Supply.Jnum and Supply.Pnum = screw_parts.Pnum;
