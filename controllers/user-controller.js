export const getAllUser = (req, res) => {
    res.send(users); 
}

export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuidv4();

  const withUserId = { ...user, id: userId };

  users.push(withUserId);

  res.send(`data masuk dengan username ${user.firstname}`);
}

export const getUserById = (req, res) => {
    const {id} = req.params 

    const findUser = users.find((user) => user.id === id);

     res.send(findUser);
}

export const deleteUserById = (req, res) => {
    const {id} = req.params 
    
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted`);

}

export const updateUserById = (req, res) => {
    const {id} = req.params; 
    const {firstname, lasname, age} = req.body

    const user = users.find((user) => user.id === id); 

    if(firstname) user.firstname = firstname; 
    if(lasname) user.lasname = lasname; 
    if(age) user.age = age;

    res.send(`Id user ${id} update `);

}
