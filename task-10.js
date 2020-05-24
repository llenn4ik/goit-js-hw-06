'use strict'
import users from './users.js';
const getSortedUniqueSkills = arr => arr
        .reduce((acc, {skills}) => [...acc, ...skills], [])
        .filter((element, index, array) => array.indexOf(element) === index) 
        .sort((a, b) => a.localeCompare(b, 'en', {sensitivity: 'base'}));



console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'no