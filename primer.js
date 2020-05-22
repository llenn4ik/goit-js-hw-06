const users = [
    { name: 'Mango', isActive: true },
    { name: 'Poly', isActive: false },
    { name: 'Ajax', isActive: true },
  ];
  
  // Для каждого элемента коллекции (user) вернем значение поля name
  const names = users.map(user => user.name);
  
  console.log(names); // ["Mango", "Poly", "Ajax"]