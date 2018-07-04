const _  = require('lodash');

const Foo = {
    a: 1,
    b: 2,
    c: 3,
}

let result = [];
   
  _.forIn(Foo, function(value, key) {
    result.push(value);
  });

  console.log(result);

