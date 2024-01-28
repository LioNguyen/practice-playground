# SQL

- [SQL](#sql)
  - [Resources](#resources)
  - [Section 2: How to query data?](#section-2-how-to-query-data)
    - [Select all columns](#select-all-columns)
    - [Select specific columns](#select-specific-columns)
    - [Perform calculation and create new column with alias](#perform-calculation-and-create-new-column-with-alias)
    - [Summary](#summary)
  - [Section 3: How to sort data?](#section-3-how-to-sort-data)
    - [Sort 1 column](#sort-1-column)
    - [Sort multiple columns](#sort-multiple-columns)
    - [Summary](#summary-1)
  - [Section 4: How to filter data?](#section-4-how-to-filter-data)
    - [How to remove duplicate results?](#how-to-remove-duplicate-results)
    - [How limit the number of rows returned?](#how-limit-the-number-of-rows-returned)
      - [Some cases to use](#some-cases-to-use)
      - [Using FETCH instead of LIMIT in some db](#using-fetch-instead-of-limit-in-some-db)
    - [How to query db based on specific condition?](#how-to-query-db-based-on-specific-condition)
      - [How to query db based on specific condition (full date)?](#how-to-query-db-based-on-specific-condition-full-date)
      - [How to query db based on specific condition (only YEAR)?](#how-to-query-db-based-on-specific-condition-only-year)
    - [SQL Logical Operators](#sql-logical-operators)
      - [AND](#and)
      - [OR](#or)
      - [Combine AND, OR](#combine-and-or)
      - [IS NULL](#is-null)
      - [IS NOT NULL](#is-not-null)
      - [BETWEEN](#between)
      - [NOT BETWEEN](#not-between)
      - [IN](#in)
      - [NOT IN](#not-in)
      - [LIKE](#like)
      - [NOT LIKE](#not-like)
      - [NOT](#not)
    - [Summary](#summary-2)

## Resources

- [SQL Playground](https://www.sqltutorial.org/seeit/)
- [SQL Tutorial](https://www.sqltutorial.org)
- [Nodejs MySQL - W3schools](https://www.w3schools.com/nodejs/nodejs_mysql.asp)
- [MySQL Workbench Download](https://dev.mysql.com/downloads/file/?id=525970)

## Section 2: How to query data?

- [SQL Select](https://www.sqltutorial.org/sql-select/)

`SELECT select_list FROM table_name;`

### Select all columns

```sql
SELECT * FROM employees;
```

### Select specific columns

```sql
SELECT
    employee_id,
    first_name,
    last_name,
    hire_date
FROM
    employees;
```

### Perform calculation and create new column with alias

```sql
SELECT
    first_name,
    last_name,
    salary,
    salary * 1.05 AS new_salary
FROM
    employees;
```

### Summary

- Use the SQL `SELECT` statement to `select data` from a table.
- To select data from a table, specify the `table name in the FROM` clause and a `list of column in the SELECT` clause.
- The `SELECT *` is the shorthand of the SELECT `all columns` in a table.

## Section 3: How to sort data?

- [SQL Order By](https://www.sqltutorial.org/sql-order-by/)
- `ASC` (default) or `DESC`
- Sort can apply for `data`, `number`, `string`

### Sort 1 column

```sql
SELECT
	employee_id,
	first_name,
	last_name,
	hire_date,
	salary
FROM
	employees
ORDER BY
	first_name;
```

### Sort multiple columns

```sql
SELECT
	employee_id,
	first_name,
	last_name,
	hire_date,
	salary
FROM
	employees
ORDER BY
	first_name,
	last_name DESC;
```

### Summary

- Use the `ORDER BY` clause to `sort rows returned by the SELECT clause`.
- Use the `ASC` option to sort rows in `ascending` order and `DESC` option to sort rows in `descending` order.

## Section 4: How to filter data?

### How to remove duplicate results?

- [SQL Distinct](https://www.sqltutorial.org/sql-distinct/)

```sql
SELECT DISTINCT
    column1, column2, ...
FROM
    table1;
```

```sql
SELECT DISTINCT
	job_id,
	salary
FROM
	employees
ORDER BY
	job_id,
	salary DESC;
```

### How limit the number of rows returned?

- [SQL Limit](https://www.sqltutorial.org/sql-limit/)
- The `LIMIT` row_count `determines the number of rows` (row_count) returned by the query.
- The `OFFSET` offset clause `skips the offset rows before beginning` to return the rows (`optional`).
- Shortcut: `LIMIT 5 OFFSET 3` = `LIMIT 3, 5`

```sql
SELECT
    column_list
FROM
    table1
ORDER BY column_list
LIMIT row_count OFFSET offset;
```

```sql
SELECT
    employee_id, first_name, last_name
FROM
    employees
ORDER BY first_name
LIMIT 5 OFFSET 3
;
```

#### Some cases to use

- Using SQL LIMIT to `get the top N rows` with the `highest or lowest value`
- `Getting the rows` with the `Nth highest value`

#### Using FETCH instead of LIMIT in some db

- [SQL Fetch](https://www.sqltutorial.org/sql-fetch/)

### How to query db based on specific condition?

- [SQL Where](https://www.sqltutorial.org/sql-where/)
- [SQL Comparison Operators](https://www.sqltutorial.org/sql-comparison-operators/)

```
Operator	Meaning
=	        Equal to
<> (!=)	    Not equal to
<	        Less than
>	        Greater than
<=	        Less than or equal
>=	        Greater than or equal
```

#### How to query db based on specific condition (full date)?

```sql
SELECT
	employee_id,
	first_name,
	last_name,
	hire_date
FROM
	employees
WHERE
	hire_date >= '1999-01-01'
ORDER BY
	hire_date DESC;
```

#### How to query db based on specific condition (only YEAR)?

```sql
SELECT
	employee_id,
	first_name,
	last_name,
	hire_date
FROM
	employees
WHERE
	YEAR (hire_date) = 1999
ORDER BY
	hire_date DESC;
```

### SQL Logical Operators

- [SQL Logical Operators](https://www.sqltutorial.org/sql-logical-operators/)

#### AND

- [SQL AND](https://www.sqltutorial.org/sql-and/)
- The `AND` operator is a logical operator that combines two Boolean expressions `in the WHERE` clause `of the SELECT, UPDATE, or DELETE` statement.

```sql
SELECT
    first_name, last_name, salary
FROM
    employees
WHERE
    salary > 5000 AND salary < 7000
ORDER BY salary;
```

#### OR

- [SQL OR](https://www.sqltutorial.org/sql-or/)
- The `OR operator` is typically used `in the WHERE` clause `of the SELECT, UPDATE, or DELETE statement` to form a flexible condition.

```sql
SELECT
    first_name, last_name, salary
FROM
    employees
WHERE
    salary = 7000 OR salary = 8000
ORDER BY salary;
```

#### Combine AND, OR

```sql
SELECT
	first_name,
	last_name,
	hire_date,
	department_id
FROM
	employees
WHERE
	department_id = 3
AND (
	hire_date > "1999/01/01"
	OR hire_date < "1998/01/01"
)
ORDER BY
	first_name,
	last_name;
```

#### IS NULL

- [SQL IS NULL](https://www.sqltutorial.org/sql-is-null/)

```sql
SELECT
    first_name, last_name, phone_number
FROM
    employees
WHERE
    phone_number IS NULL
ORDER BY first_name , last_name;
```

#### IS NOT NULL

- [SQL IS NULL](https://www.sqltutorial.org/sql-is-null/)

```sql
SELECT
	employee_id,
	first_name,
	last_name,
	phone_number
FROM
	employees
WHERE
	phone_number IS NOT NULL;
```

#### BETWEEN

- [SQL BETWEEN](https://www.sqltutorial.org/sql-between/)
- There are 2 ways to express condition BETWEEN ~ AND ~

```sql
SELECT
    first_name, last_name, salary
FROM
    employees
WHERE
    salary BETWEEN 9000 AND 12000
    salary >= 9000 AND salary <= 12000
ORDER BY salary;
```

#### NOT BETWEEN

- [SQL BETWEEN](https://www.sqltutorial.org/sql-between/)

```sql
SELECT
    employee_id,
    first_name,
    last_name,
    salary
FROM
    employees
WHERE
    salary NOT BETWEEN 2500 AND 2900
ORDER BY salary DESC;
```

#### IN

- [SQL IN](https://www.sqltutorial.org/sql-in/)
- Use the `IN` with a subquery to `combine two queries` into a single query.

```sql
SELECT
    first_name, last_name, department_id
FROM
    employees
WHERE
    department_id IN (8, 9)
ORDER BY department_id;
```

```sql
SELECT *
FROM employees
WHERE department_id IN
    (SELECT department_id
    FROM departments
    WHERE department_name LIKE "A%" )
```

#### NOT IN

- [SQL IN](https://www.sqltutorial.org/sql-in/)

```sql
SELECT
	employee_id,
	first_name,
	last_name,
	job_id
FROM
	employees
WHERE
	job_id NOT IN (7, 8, 9)
ORDER BY
	job_id;
```

#### LIKE

- [SQL LIKE](https://www.sqltutorial.org/sql-like/)
- The `percent sign (%)` represents `zero, one, or multiple characters`.

```sql
SELECT
    employee_id, first_name, last_name
FROM
    employees
WHERE
    first_name LIKE 'jo%'
ORDER BY first_name;
```

- The `underscore sign (_)` represents a `single character`.

```sql
SELECT
    employee_id, first_name, last_name
FROM
    employees
WHERE
    first_name LIKE '_h%'
ORDER BY first_name;
```

#### NOT LIKE

- [SQL LIKE](https://www.sqltutorial.org/sql-like/)

```sql
SELECT
	employee_id,
	first_name,
	last_name
FROM
	employees
WHERE
	first_name LIKE 'S%'
AND first_name NOT LIKE 'Sh%'
ORDER BY
	first_name;
```

#### NOT

- [SQL NOT](https://www.sqltutorial.org/sql-not/)
- You have learned how to use various logical operators such as A`ND, OR, LIKE, BETWEEN, IN, and EXISTS`. These operators help you to form flexible conditions in the WHERE clause. To `negate the result` of any Boolean expression, you use the `NOT operator`.

```sql
SELECT
	employee_id,
	first_name,
	last_name
FROM
	employees e
WHERE
	NOT EXISTS (
		SELECT
			employee_id
		FROM
			dependents d
		WHERE
			d.employee_id = e.employee_id
	);
```

### Summary

- Use `DISTINCT operator` in the SELECT clause to `remove duplicate` rows from the result set.
- Use `LIMIT & OFFSET` clauses to `limit the number of rows` returned by a query.
- `LIMIT & OFFSET` is `not SQL standard`.
- The `BETWEEN` operator returns `true` if a value is `within a specific range`.
- Use the `NOT` operator to `negate the BETWEEN` operator.
- Use the SQL `IN` operator to `check if a value is in a set` of values.
- Use the `NOT` operator to n`egate the IN` operator, `NOT IN`.
- Use the `IN` with a subquery to `combine two queries` into a single query.
- The LIKE operator returns true if a value matches a pattern or false otherwise.
- Use the `NOT` operator to `negate the LIKE` operator.
- Use the `%` wildcard to `match one or more characters`
- Use the `_` wildcard to `match a single character`.
