'use strict';

import users from './users.js';

const getUsersWithFriend = (users, friendName) => users.filter(users.some(users=>user.friend===friendName))

  



  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry'));