-- Q6
-- Find the weight, city and part name of all screw parts with a weight greater than 15.
select Weight, City, Pname from Part
where Pname = 'Screw' and Weight > 15;
