const express = require('express');

app = express();
 
app.use(express.static('public'));

app.listen(8080, () => console.log(`Server rodando na porta: 8080`));