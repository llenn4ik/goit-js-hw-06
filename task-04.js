'use strict';
import users from './users.js';
const getInactiveUsers = users =>users.filter( ({isActive})=>!isActive) 
  
  console.log(getInactiveUsers(users)); 