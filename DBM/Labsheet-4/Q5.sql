-- Q5
-- Insert a new screw part into the Part table with PNUM “P6”, colour “Red” and city
-- “London”. The weight for this part is unknown.
insert into Part
values ('P6', 'Screw', 'Red', null, 'London');

select * from Part;
