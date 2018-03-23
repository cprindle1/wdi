-- enter your schema for apartments, offices and storefronts below
drop table if exists apartment;
drop table if exists office;
drop table if exists storefront;

create table apartment(
	id serial primary key,
	apt_number integer not null,
	bedrooms integer,
	bathrooms integer,
	address varchar(255) not null,
	tennant boolean,
	sqft integer,
  price integer
);

create table office(
	id serial primary key,
	office_number integer,
	floors integer,
	sqft integer,
	cubicles integer,
  bathrooms integer,
  address varchar(255) not null,
  company_name varchar (30),
  occupied boolean,
  price integer
);

create table storefront(
	id serial primary key,
  address varchar(255) not null,
  occupied boolean,
  price integer,
  kitchen boolean,
  sqft integer,
  owner varchar(40),
  outdoor boolean default false
);
