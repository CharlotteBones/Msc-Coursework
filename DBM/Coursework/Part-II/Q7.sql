-- Q7
-- Find the names of pairs of users who have bought the same item, removing pairs such as 
-- (x,x), and keeping only one of (x,y) and (y,x) for user names x and y.
select xuser.name, yuser.name from user as xuser, user as yuser, rates as xrates, rates as yrates
where xrates.item = yrates.item and xuser.name < yuser.name and xrates.user = xuser.id and yrates.user = yuser.id
order by xuser.name, yuser.name;
