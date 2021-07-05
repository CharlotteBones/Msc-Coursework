-- Q2
-- Create another function which, given a price, will calculate the total amount to be paid, 
-- including the VAT. Make sure that you write the function in such a way that, if the VAT rate 
-- changes, this function does not need to be changed.
delimiter //
create function IncVAT ( val Decimal(6, 2) )
returns Decimal(6, 2)

begin
    declare result Decimal(6, 2);
    set result = 0;
    set VATtoadd = VAT(val);   -- Calls VAT function to calculate VAT before adding to the price
    set result = val + VATtoadd;

    return result;

end;//

delimiter ;
