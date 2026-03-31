create table post(
	id serial primary key,
	title varchar(100)not null,
	content text,
	author varchar(50) not null,
	modify_date varchar(20)
);



