-- Q8
-- Find the names of users and descriptions of items such that the user bought the item for a 
-- price greater than the current price.
select distinct user.name, description from user, item, buys
where user.id = buys.user and item.price < buys.price and item.id = buys.item
order by user.name;
