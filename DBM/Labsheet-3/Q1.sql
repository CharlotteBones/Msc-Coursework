-- Q1
-- List the numbers (PNUM) and colours of all the screw parts based in Rome.
select Pnum, Colour from Part
where City = 'Rome' and Pname = 'Screw';
