--enter your seed data below
INSERT INTO apartment (apt_number, bedrooms, bathrooms, address, tennant, sqft, price) VALUES (100, 2, 1, '100 fake st', true, 700, 1200);
INSERT INTO apartment (apt_number, bedrooms, bathrooms, address, tennant, sqft, price) VALUES (207, 3, 1, '205 fake st', false, 1200, 1900);
INSERT INTO office (office_number, floors, sqft, cubicles, bathrooms, address, company_name, occupied, price) VALUES (305, 2, 10000, 100, 4, '1001 business st', 'Acme', false, 19000);
INSERT INTO office (office_number, floors, sqft, cubicles, bathrooms, address, company_name, occupied, price) VALUES (1006, 1, 5000, 50, 2, '500 inc st', 'Google', true, 5000);
INSERT INTO storefront (address, occupied, price, kitchen, sqft, owner, outdoor) VALUES ('1234 shopping st', true, 3500, false, 12000, 'drug store', false);
INSERT INTO storefront (address, occupied, price, kitchen, sqft, owner, outdoor) VALUES ('1235 shopping st', true, 25000, true, 100000, 'grocery store', false);
