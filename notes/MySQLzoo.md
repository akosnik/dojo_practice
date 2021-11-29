# MySQL

## Basics

### SELECT
```sql
SELECT name, population/1,000,000 FROM world
```

* select chooses what you display as your output.
* you can edit and operate on what you select such as population/million


### WHERE
```sql
SELECT population FROM world
  WHERE name = 'Germany'
```

* it shows the population from entries where name is germany.
* the output is the population column with a number under it (no name)


### IN
```sql
SELECT name, population FROM world
  WHERE name IN ('Sweden', 'Norway', 'Denmark');
```

* IN tag, allows for multiple acceptible values of name


### BETWEEN
```sql
SELECT name, area FROM world
  WHERE area BETWEEN 200000 AND 250000
```

* BETWEEN offers a range of acceptable values

### LIKE
```sql
SELECT name FROM world
WHERE name LIKE '%United%'
```

* LIKE uses % to find any value with United somewhere in it
* LIke 'United%' would need to start with United
* Like '%stan' would need to end with stan.

### NOT
```sql
SELECT yr, subject, winner
FROM nobel
WHERE yr = '1980' AND subject NOT IN ('Chemistry', 'Medicine')
```


### FUNCTIONS
```sql
SELECT name, ROUND(population, -3) FROM world
WHERE population > 300000000
```

* ROUND(number, decimal place) 
  * use -3 to round to 1000s
* LENGTH(name) returns length of word
* LEFT(name, 1) returns first character of string
* COUNT(item) displays the amount of hits in your result
* DISTINCT(yr) if multiple yr's are the same, it will only use each one once

```sql
SELECT COUNT(DISTINCT yr) FROM nobel
 WHERE yr NOT IN (SELECT DISTINCT yr FROM nobel WHERE subject = 'Medicine')
```

* This will select each year that was not in a distinct list of years that medicine prize was awarded

### ORDER BY
```sql
SELECT winner, subject
  FROM nobel
 WHERE yr=1984
 ORDER BY subject IN ('Physics', 'Chemistry') ASC, subject,winner
 ```

* This applies a value 0 to those not in physics/chemisty and 1 for the alternative
  * Then ASC sorts the 0's ahead of the 1's and you get physics/chem last in the list
* DESC would put the most recent year first