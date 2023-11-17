Random Name Generator

1. add names to a name pool
2. generate a random name
3. remove a name from the name pool

1. Add Name: input, button
    take in name input and save it to a name array

2. Generate a random name: button
    Call random name function
        Use Math.random  to get random number between - and name array length
        use random number as an index for our name array
        return our name
    set text tag's  text to our random name

3. Remove a name: button
    take in name input and get it's index within our name array
    use .splice to remove that element