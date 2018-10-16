# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

`SELECT * FROM artists;`

2. Write the SQL to select the artist with the name "Black Sabbath"

`SELECT * FROM artists WHERE name="Black Sabbath";`
`SELECT name FROM artists WHERE name="Black Sabbath";`

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans (
    id INTEGER PRIMARY KEY, 
    name TEXT);
```

4. Write the SQL to alter the fans table to have a ArtistId column type integer

```sql
ALTER TABLE fans ADD COLUMN ArtistID INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

```sql

INSERT INTO fans (name, ArtistID) VALUES ("Jenny", 169)
```

6. Write the SQL to update your name in the fans table to be a new name

```sql

UPDATE fans SET name = "Nick" where id=1

```

7. Write the SQL to return fans that are not fans of the Black Eyed Peas.

8. Write the SQL to display an artist's name next to their album title


## BONUS

9. Write the SQL to display artist name, album name and number of tracks on that album


10. Write the SQL to return the name of all of the artists in the 'Pop' Genre


11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

