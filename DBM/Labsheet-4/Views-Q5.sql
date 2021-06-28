-- Q5
-- Create a view named “convenientSupply” that returns the parts and projects in the
-- same city.
create view convenientSupply(Pnum, Pname, Jnum, Jname, City)
as select Pnum, Pname, Jnum, Jname, Part.City from Part, Project
where Part.City = Project.City;

select * from convenientSupply;
