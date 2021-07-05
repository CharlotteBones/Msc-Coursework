-- Q4
-- Create a view called 'purchases' which associates each item description with the user ids who bought the item. 
-- Even items which were not bought should appear.
create view purchases as
select distinct description, user as buyer from item
left join buys on 
item.id = buys.item
order by user;
