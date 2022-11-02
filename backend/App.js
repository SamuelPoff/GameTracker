const config = require('./config/config');
const express = require('express');
const cors = require('cors');
const db = require('./models');
const routes = require('./routes');


const app = express();

app.use(cors());

const sequelize = db.sequelize;
sequelize.sync().then(()=>{

    app.listen(config.PORT);
    routes(app);
    console.log(`GameTracker server started on PORT: ${config.PORT}`);

});
