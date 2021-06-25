-- Q13
-- List the names of any parts which have never been delivered to any project.
select Pname, Snum from Part
left join Supply on
Part.Pnum = Supply.Pnum
where Jnum is null;
