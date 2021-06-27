-- Q1
-- For the supplier whose SNUM is S3, change the status to 10.
update Supplier set status = 10
where Snum = 'S3';

select * from Supplier; -- To check afterwards
