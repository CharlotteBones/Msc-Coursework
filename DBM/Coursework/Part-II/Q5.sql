-- Q5
-- Find the descriptions of items which have not been rated by any user.
select description from item
where not exists
    (select * from rates
    where item.id = rates.item and rating is not null);
