-- Q2
-- Find the name, colour and weight of each part, which is supplied to project J2.
select Pname, Colour, Weight from Part, Supply
where Part.Pnum = Supply.Pnum and Supply.Jnum = 'J2';
