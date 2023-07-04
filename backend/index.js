
const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Servicio GET para obtener una lista de usuarios
app.get('/users', (req, res) => {
  //  obtiene una lista de usuarios desde la base de datos o cualquier otra fuente de datos
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  
  res.json(users);
});

// Servicio POST para crear un nuevo usuario
app.post('/users', (req, res) => {
  // crear un nuevo usuario en la base de datos o cualquier otra acción requerida
  const newUser = req.body;
  
  // validación y guardar el nuevo usuario
  
  res.json(newUser);
});

// Servicio PUT para actualizar un usuario existente
app.put('/users/:id', (req, res) => {
  //  actualizar un usuario en la base de datos o cualquier otra acción requerida
  const userId = req.params.id;
  const updatedUser = req.body;

  // Aquí se puede buscar el usuario por su id y actualizar sus datos
  
  res.json(updatedUser);
});


app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
