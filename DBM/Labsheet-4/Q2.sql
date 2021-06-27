-- Q2
-- For projects whose name was “Tape” originally, change the name to “VCR”
update Project set Jname = 'VCR'
where Jname = 'Tape';

select * from Project;
