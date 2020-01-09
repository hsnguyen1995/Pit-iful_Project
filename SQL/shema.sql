DROP TABLE GuacamoleCountries;
DROP TABLE avocadoPrice;

CREATE TABLE GuacamoleCountries (
    Country VARCHAR(255),
    Produce VARCHAR(255),
);

CREATE TABLE avocadoPrice (
    MonthYear VARCHAR(7),
    AveragePrice DECIMAL(3,2),
    TotalVolume DECIMAL(10,2),
    SmallHass DECIMAL(10,2),
    LargeHass DECIMAL(10,2),
    XLHass DECIMAL(10,2),
    TotalBags DECIMAL(10,2),
    SmallBags DECIMAL(10,2),
    LargeBags DECIMAL(10,2),
    XLBags DECIMAL(8,2),
    Type VARCHAR(14),
    Region VARCHAR(20)
);