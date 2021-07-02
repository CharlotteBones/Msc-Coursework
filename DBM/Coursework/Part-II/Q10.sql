-- Q10
-- For each user, find the descriptions of items they have bought but not rated.
select user, description from item, rates
where item.id = rates.item and rating is null
order by user;
