const express = require('express');

const tasksRoutes = require('./routes/tasksRoutes');

const app = express();
app.set('view engine', 'ejs');

app.use("/css",express.static("./node_modules/bootstrap/dist/css"));
app.use("/js",express.static("./node_modules/bootstrap/dist/js"));

app.listen(3000);

app.get('/', (req, res) => {    
    res.redirect('/tasks');
});

app.use('/tasks', tasksRoutes);

app.use((req, res) => {
    res.status(404).render('404');
});