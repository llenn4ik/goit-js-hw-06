'use strict'
import users from './users.js';

const getNamesSortedByFriendsCount = array => array
  .sort((a, b) => a.friends.length - b.friends.length)
  .map(arr => arr.name);
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 
