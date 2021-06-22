-- Q5
-- Find the part number, weight and colour of each non-blue part.
select Pnum, Weight, Colour from Part
where Colour != 'blue';
