-- Q6
-- Create a procedure which takes a category value or the value '*' as input. When the procedure is called, it returns 
-- for each item description the number of users who bought the item and the number of users who rated it. For items 
-- which were not bought or not rated, zero should be returned. The output should be restricted to the category passed
-- to the procedure, or be unrestricted if the category value passed was '*'. The procedure should make use of both of 
-- the views created above.
delimiter //
create procedure countBuysRates ( in usercat varchar(45) )

begin

    set usercat = IF(usercat = '*', '%', usercat); 
    -- Used if statement to check if '*' was passed so '%' wildcard could be set

    select buycount.description, NumUsersBought, NumUsersRated from
        (select distinct item.description, count(purchases.buyer) as NumUsersBought from purchases, item
        where category like usercat and purchases.description = item.description
        group by item.description) buycount
        -- Where category like to filter the categories where needed

    inner join

        (select distinct ratings.description, count(rates.rating) as NumUsersRated from rates, ratings, item
        where category like usercat and item.id = rates.item and ratings.description = item.description and ratings.reviewer = rates.user
        group by description

        union
        
        select distinct ratings.description, count(reviewer) from ratings, item
        where category like usercat and reviewer is null and item.description = ratings.description
        group by ratings.description) ratecount
        -- third query was needed to find the null ratings as user was also null and union was used to add them to the 
        -- other main ratings query

    on ratecount.description = buycount.description
    order by ratecount.description;


end; //

delimiter ;

call countBuysRates();


