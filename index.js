const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello From Bangladesh')
});

const users = [
  {id: 1, name: 'Osman', email: 'os@gmail.com'},
  {id: 2, name: 'Kiren', email: 'kier@gmail.com'},
  {id: 3, name: 'kuddus', email: 'kd@gmail.com'},
  {id: 4, name: 'Rahim', email: 'rah@gmail.com'},
  {id: 5, name: 'Abdul', email: 'abd@gmail.com'},
]

app.get('/users', (req, res) => {
  console.log('Query', req.query);
  if(req.query.name) {
    const search = req.query.name;
    const matched = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(matched);
  }
  else {
    res.send(users)
  }
});

app.get('/user/:id', (req, res) => {
  console.log(req.params);
  const id = req.params.id;

  const user = users.find(u => u.id == id);

  res.send(user)
})

app.post('/user', (req, res) => {
  console.log('Request', req.body);
  const user = req.body;
  user.id = users.length + 1;

  res.send(user)
})

app.listen(port, () => {
  console.log('Listening from port', port);
})