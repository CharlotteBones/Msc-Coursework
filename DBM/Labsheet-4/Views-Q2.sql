-- Q2
-- Modify the “screw_part” view (using the “alter view” command whose syntax is the
-- same as “create view”) so that it contains only the screw parts whose weight is
-- known.
alter view screw_parts as 
select * from Part 
where Pname = 'Screw' and weight is not null;

select * from screw_parts;
