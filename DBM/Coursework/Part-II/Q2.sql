-- Q2
-- Find the descriptions of items bought by the user with name "Smith".
select distinct description, name from item, user, buys
where user.name like '%Smith' and item.id = buys.item and user.id = buys.user
order by name;
