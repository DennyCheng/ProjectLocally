CREATE TABLE businessAddress(
    id SERIAL PRIMARY KEY,
    bName character varying(100),
    bPhone integer,
    bAddress character varying(150),
    bLatitude NUMERIC(8,6),
    bLongitude NUMERIC(8,6),
    bWebsite character varying(100),
    bDelivery BOOLEAN,
    bCuisine character varying(30),
    bPhoto character varying(150)
);


INSERT INTO businessaddress (bName,bPhone,bAddress,bLatitude,bLongitude,bWebsite,bDelivery,bCuisine)
VALUES(('Perkins Bakery and Restaurant'),
('(952) 835-5298'),
('9805 Normandale Blvd, Minneapolis, MN 55437'),
(44.825039),
(-93.349485),
('www.perkins.com'),
(True),
('American'));
