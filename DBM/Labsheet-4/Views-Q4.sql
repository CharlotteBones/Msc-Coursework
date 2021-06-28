-- Q4
-- Using the “screw_part” view, update the colour of each screw part to green if its
-- weight is known.
update screw_parts set Colour = 'Green'
where Weight is not null;

select * from screw_parts;
