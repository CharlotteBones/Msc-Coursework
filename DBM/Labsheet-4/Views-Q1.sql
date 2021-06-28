-- Views

-- Q1
-- Create a view named “screw_part” that contains only the screws.
create view screw_parts as 
select * from Part 
where Pname = 'Screw';

select * from screw_parts;
