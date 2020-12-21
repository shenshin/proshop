import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Alex Shenshin',
    email: 'shenshin@me.com',
    password: bcrypt.hashSync('acxsfh', 10),
    isAdmin: true,
  },
  {
    name: 'Luna the Cat',
    email: 'luna@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
