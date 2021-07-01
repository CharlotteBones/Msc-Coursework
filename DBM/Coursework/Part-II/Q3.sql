-- Q3
-- Find the names of users who have bought items with a total value of more than 1000.
select name
from buys, user
where user.id = buys.user
group by name
having sum(price) > 1000;
