-- 1. List the names of all NFL teams'
select name from teams;

Buffalo Bills
Miami Dolphins
New England Patriots
New York Jets
Baltimore Ravens
Cincinnati Bengals
Cleveland Browns
Pittsburgh Steelers
Houston Texans
Indianapolis Colts
Jacksonville Jaguars
Tennessee Titans
Denver Broncos
Kansas City Chiefs
Oakland Raiders
San Diego Chargers
Dallas Cowboys
New York Giants
Philadelphia Eagles
Washington Redskins
Chicago Bears
Detroit Lions
Green Bay Packers
Minnesota Vikings
Atlanta Falcons
Carolina Panthers
New Orleans Saints
Tampa Bay Buccaneers
Arizona Cardinals
St. Louis Rams
San Francisco 49ers
Seattle Seahawks

-- 2. List the stadium name and head coach of all NFC teams
select name, stadium, head_coach from teams;

name         |            stadium            |   head_coach
----------------------+-------------------------------+----------------
Buffalo Bills        | Ralph Wilson Stadium          | Doug Marrone
Miami Dolphins       | Sun Life Stadium              | Joe Philbin
New England Patriots | Gillette Stadium              | Bill Belichick
New York Jets        | MetLife Stadium               | Rex Ryan
Baltimore Ravens     | M&T Bank Stadium              | John Harbaugh
Cincinnati Bengals   | Paul Brown Stadium            | Marvin Lewis
Cleveland Browns     | FirstEnergy Stadium           | Mike Pettine
Pittsburgh Steelers  | Heinz Field                   | Mike Tomlin
Houston Texans       | NRG Stadium                   | Bill OBrien
Indianapolis Colts   | Lucas Oil Stadium             | Chuck Pagano
Jacksonville Jaguars | EverBank Field                | Gus Bradley
Tennessee Titans     | LP Field                      | Ken Whisenhunt
Denver Broncos       | Sports Authority Field        | John Fox
Kansas City Chiefs   | Arrowhead Stadium             | Andy Reid
Oakland Raiders      | O.co Coliseum                 | Tony Sparano
San Diego Chargers   | Qualcomm Stadium              | Mike McCoy
Dallas Cowboys       | AT&T Stadium                  | Jason Garrett
New York Giants      | MetLife Stadium               | Tom Coughlin
Philadelphia Eagles  | Lincoln Financial Field       | Chip Kelly
Washington Redskins  | FedExField                    | Jay Gruden
Chicago Bears        | Soldier Field                 | Marc Trestman
Detroit Lions        | Ford Field                    | Jim Caldwell
Green Bay Packers    | Lambeau Field                 | Mike McCarthy
Minnesota Vikings    | TCF Bank Stadium              | Mike Zimmer
Atlanta Falcons      | Georgia Dome                  | Mike Smith
Carolina Panthers    | Bank of America Stadium       | Ron Rivera
New Orleans Saints   | Mercedes-Benz Superdome       | Sean Payton
Tampa Bay Buccaneers | Raymond James Stadium         | Lovie Smith
Arizona Cardinals    | University of Phoenix Stadium | Bruce Arians
St. Louis Rams       | Edward Jones Dome             | Jeff Fisher
San Francisco 49ers  | Levis Stadium                 | Jim Harbaugh
Seattle Seahawks     | CenturyLink Field             | Pete Carroll

-- 3. List the head coaches of the AFC South
select head_coach from teams where conference = 'AFC' and division = 'South';

head_coach
----------------
Bill OBrien
Chuck Pagano
Gus Bradley
Ken Whisenhunt

-- 4. The total number of players in the NFL
select count(*) from (select * from players)a;

1532

-- 5. The team names and head coaches of the NFC North and AFC East
select name, head_coach from teams where conference = 'AFC' and division = 'East';

name         |   head_coach
----------------------+----------------
Buffalo Bills        | Doug Marrone
Miami Dolphins       | Joe Philbin
New England Patriots | Bill Belichick
New York Jets        | Rex Ryan
-- 6. The 50 players with the highest salaries
select * from players order by salary desc limit 50;

id  |          name           | position |  salary  | team_id
------+-------------------------+----------+----------+---------
2121 | Peyton Manning          | QB       | 18000000 |      13
2787 | Drew Brees              | QB       | 15760000 |      27
1966 | Dwight Freeney          | DE       | 14035000 |      10
2122 | Elvis Dumervil          | DE       | 14000000 |      13
2402 | Michael Vick            | QB       | 12500000 |      19
2922 | Sam Bradford            | QB       | 12000000 |      30
2641 | Jared Allen             | DE       | 11619850 |      24
2687 | Matt Ryan               | QB       | 11500000 |      25
2553 | Matthew Stafford        | QB       | 11500000 |      22
2179 | Tamba Hali              | DE       | 11250000 |      14
1592 | Jake Long               | T        | 11200000 |       2
2454 | Trent Williams          | T        | 11000000 |      20
2403 | Nnamdi Asomugha         | CB       | 11000000 |      19
2830 | Vincent Jackson         | WR       | 11000000 |      28
2554 | Cliff Avril             | DE       | 10600000 |      22
2880 | Calais Campbell         | DE       | 10600000 |      29
1821 | Joe Thomas              | T        | 10500000 |       7
2688 | Brent Grimes            | CB       | 10431000 |      25
1967 | Peyton Manning (buyout) | QB       | 10400000 |      10
2923 | Chris Long              | DE       | 10310000 |      30
2263 | Philip Rivers           | QB       | 10200000 |      16
2924 | Jason Smith             | T        | 10000000 |      30
1695 | David Harris            | LB       |  9900000 |       4
1636 | Wes Welker              | WR       |  9515000 |       3
2831 | Davin Joseph            | G        |  9500000 |      28
2180 | Dwayne Bowe             | WR       |  9443000 |      14
2404 | Asante Samuel           | CB       |  9400000 |      19
2505 | Brandon Marshall        | WR       |  9300000 |      21
2555 | Ndamukong Suh           | DT       |  9250000 |      22
2305 | Tony Romo               | QB       |  9000000 |      17
2506 | Julius Peppers          | DE       |  8900000 |      21
2306 | Anthony Spencer         | LB       |  8800000 |      17
1593 | Karlos Dansby           | LB       |  8800000 |       2
2733 | Jordan Gross            | T        |  8500000 |      26
2181 | Tyson Jackson           | DE       |  8005000 |      14
2642 | Adrian Peterson         | RB       |  8000000 |      24
2123 | Champ Bailey            | CB       |  8000000 |      13
2589 | Aaron Rodgers           | QB       |  8000000 |      23
2073 | Chris Johnson           | RB       |  8000000 |      12
2405 | Jason Peters            | T        |  7900000 |      19
1696 | Santonio Holmes         | WR       |  7750000 |       4
2832 | Eric Wright             | CB       |  7750000 |      28
2734 | Steve Smith             | WR       |  7750000 |      26
2507 | Jay Cutler              | QB       |  7700000 |      21
2508 | Matt Forte              | RB       |  7700000 |      21
1749 | Ray Rice                | RB       |  7700000 |       5
2509 | Brian Urlacher          | LB       |  7500000 |      21
1921 | Johnathan Joseph        | CB       |  7250000 |       9
1968 | Gary Brackett           | LB       |  7200000 |      10
1750 | Ed Reed                 | S        |  7200000 |       5

-- 7. The average salary of all NFL players
select avg(salary) from players;

1579692.539817232376
-- 8. The names and positions of players with a salary above 10_000_000
select name, position from players where salary > 10000000;

name           | position
-------------------------+----------
Jake Long               | T
Joe Thomas              | T
Dwight Freeney          | DE
Peyton Manning (buyout) | QB
Peyton Manning          | QB
Elvis Dumervil          | DE
Tamba Hali              | DE
Philip Rivers           | QB
Michael Vick            | QB
Nnamdi Asomugha         | CB
Trent Williams          | T
Matthew Stafford        | QB
Cliff Avril             | DE
Jared Allen             | DE
Matt Ryan               | QB
Brent Grimes            | CB
Drew Brees              | QB
Vincent Jackson         | WR
Calais Campbell         | DE
Sam Bradford            | QB
Chris Long              | DE
-- 9. The player with the highest salary in the NFL
select * from players where salary = (select max(salary) from players);

id  |      name      | position |  salary  | team_id
------+----------------+----------+----------+---------
2121 | Peyton Manning | QB       | 18000000 |      13

-- 10. The name and position of the first 100 players with the lowest salaries
select name, position from players order by salary limit 100;

too long to list

-- 11. The average salary for a DE in the nfl
select avg(salary) from players where position = 'DE';

avg
----------------------
2161326.377049180328
-- 12. The names of all the players on the Buffalo Bills
select name from players where team_id = (select id from teams where name = 'Buffalo Bills');

too long to list

-- 13. The total salary of all players on the New York Giants

select sum(salary) from players where team_id = (select id from teams where name = 'New York Giants');

 74179466
-- 14. The player with the lowest salary on the Green Bay Packers
select * from players where team_id = (select id from teams where name = 'Green Bay Packers') order by salary asc limit 1;

id  |      name      | position | salary | team_id
------+----------------+----------+--------+---------
2640 | Shaky Smithson | WR       | 390000 |      23
