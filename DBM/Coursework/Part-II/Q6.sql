-- Q6
-- List the category and current price for all items costing more than 100, ordered by ascending category and, within 
-- category, by descending price.
select category, price from item
where price > 100 
order by category ASC, price DESC;
