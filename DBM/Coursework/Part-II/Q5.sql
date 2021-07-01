-- Q4
-- For each category, find the average current price of items in that category.
select category, round(avg(price), 2) as average_price from item
group by category
order by average_price DESC;
