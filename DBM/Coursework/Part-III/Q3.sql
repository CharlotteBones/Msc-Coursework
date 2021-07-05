-- Q3
-- Use the two functions above in a query which lists for each purchase the user name, item description, 
-- stored item price, VAT amount and total price.
select name, description, item.price as stored_price, VAT(item.price) as VAT, IncVAT(item.price) as total_price 
from user, item, buys
where buys.user = user.id and item.id = buys.item
order by name;
