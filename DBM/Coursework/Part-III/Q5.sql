-- Q5
-- Create another view called 'ratings' which associates each item description with the user ids who rated the item. 
-- Even items which were not rated should appear.
create view ratings as
select distinct description, user as reviewer from item
left join rates on 
item.id = rates.item
order by user;
