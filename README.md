# fib-abl

``` java

// define a db table
class account extends db {
    type account;
    index_type i64;
    key_names account, name;
    key_types name;
}


// define a sturct
class account {
    string name;
    unit64 balance;
}

// define actions
interface test {
    void create(name owner, string content);
}

```
parse abi def

``` js
var abiParser = require('fib-abl');
var testParser = new abiParser();
var abi = testParser.parse(content);

console.log(abi);
```