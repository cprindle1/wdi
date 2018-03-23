-- 1. The average square footage of all offices.
select avg(sqft) from office;

-- 2. The total number of apartments.
select count(*) from apartment;

-- 3. The apartments where there is no tenant
select * from apartment where tennant = false;

-- 4. The names of all of the companies
select company_name from office;

-- 5. The number of cubicles and bathrooms in the 3rd office
select cubicles, bathrooms from office offset 2;

-- 6. The storefronts that have kitchens
select * from storefront where kitchen =true;

-- 7. The storefront with the highest square footage and outdoor seating
select * from storefront where outdoor = true order by sqft desc limit 1;

-- 8. The office with the lowest number of cubicles
select * from office order by cubicles asc limit 1;

-- 9. The office with the most cubicles and bathrooms
select * from office order by cubicles desc, bathrooms desc limit 1;
