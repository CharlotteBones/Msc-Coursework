-- Q1
-- Assume that the price values stored in the database do not include VAT. Create a function which, 
-- given a price, will return the VAT amount (assumed to be fixed at 20%).
delimiter //
create function VAT ( val Decimal(6, 2) )
returns Decimal(6, 2)

begin
    declare result Decimal(6, 2);
    set result = 0;
    set result = val * 0.2;

    return result;

end;//

delimiter ;
