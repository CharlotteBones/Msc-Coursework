-- Q4
-- For each PNUM that is “P7” in the Part table, update it to “P1”. For each PNUM that
-- is “P8” in the Part table, update it to “P4”. (You will need two separate SQL
-- statements to do this.)
update Part set Pnum = 'P1'
where Pnum = 'P7';

update Part set Pnum = 'P4'
where Pnum = 'P8';

select * from Part;
