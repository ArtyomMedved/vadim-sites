const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Раздаём текущую директорию как статику
app.use(express.static(__dirname));

// Если кто-то откроет несуществующий путь — отдаём index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Сайт работает на http://localhost:${PORT}`);
});
