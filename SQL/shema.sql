DROP TABLE GuacamoleCountries;
DROP TABLE avocadoPrice;

CREATE TABLE GuacamoleCountries (
    Country VARCHAR(255),
    Produce VARCHAR(255)
);

CREATE TABLE avocadoPrice (
    Date VARCHAR(11),
    AveragePrice VARCHAR(4),
    TotalVolume VARCHAR(11),
    SmallHass VARCHAR(11),
    LargeHass VARCHAR(11),
    XLHass VARCHAR(11),
    Type VARCHAR(14),
    Region VARCHAR(20)
);

SELECT * FROM GuacamoleCountries;
SELECT * FROM avocadoPrice;