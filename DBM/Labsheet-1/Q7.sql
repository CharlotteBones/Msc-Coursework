-- Q7
-- Find the part name, weight and city of all parts with a weight greater than 12, which are
-- located in London or Paris.
select Pname, Weight, City from Part 
where Weight > 12 and (City = 'London' or City = 'Paris');
