CREATE TABLE acreage (
	Index INTEGER PRIMARY KEY,
	County VARCHAR,
	Producing_Acres INTEGER,
	Planted_Acres INTEGER
);

CREATE TABLE annualsince71(
	Index INTEGER PRIMARY KEY,
	Year VARCHAR (7),
	Bearing_Acres INTEGER,
	Avg_Profit_Per_Acre INTEGER,
	Avg_Pounds_Per_Acre INTEGER
);

CREATE TABLE WeeklyAvoReport2019(
	Index INTEGER PRIMARY KEY,
	Week VARCHAR (10),
	Historical4YearForecast INTEGER,
	AMRICProjection INTEGER,
	AMRICActualHarvest INTEGER,
	AMRICActualShipments INTEGER,
	CropSizeIndicator INTEGER
);

CREATE TABLE AvoDiseases (
	Index INTEGER PRIMARY KEY,
	Common_Name VARCHAR (200),
	Scientific_Name VARCHAR (1000),
	Cause VARCHAR (200)
