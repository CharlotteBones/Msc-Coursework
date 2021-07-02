-- Q9
-- For each item which has at least two ratings, find the average rating for the item.
select distinct item, round(avg(rating)) as averagerating from rates
group by item
having count(rating) >= 2
order by item;
