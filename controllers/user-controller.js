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

