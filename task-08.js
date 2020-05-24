'use strict';

import users from './users.js';
const getUsersWithFriend = (array, friendName) => array
  .filter(({ friends }) => friends.some(e => e === friendName))
  .map(({name}) => name);


console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

