'use strict';

const obj1 = { name: 'Marcus Aurelius', city: 'Rome', born: '121-04-26' };

const mix1 = {
  toString() {
    return this.name + ' was born in ' + this.city + ' in ' + this.born;
  },
  age() {
    const year = new Date().getFullYear();
    const born = new Date(this.born).getFullYear();
    return year - born;
  }
};

Object.assign(obj1, mix1);
console.log(obj1);
console.log(obj1.toString());
console.log('His age is ' + obj1.age() + ' as of today');