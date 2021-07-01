-- Q1
-- Find the descriptions of items in the book category which cost less than 5.99.
select description, category from item
where item.price < 5.99
order by category;
