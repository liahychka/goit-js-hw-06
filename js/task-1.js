const getUserNames = (users) => {
const name1 = users.map(user => user.name)
return users.flatMap(user => user.name);
};
