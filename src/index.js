import Express from 'express';
//import mongoose from 'mongoose';
import './db.js';
import * as dotenv from 'dotenv';
dotenv.config();

import routerUser from './routes/user.routes.js'; 
import routerPreProject from './routes/preProject.routes.js';

const app = Express();
const port = process.env.port || 4000;


//middleware
app.use(Express.json());
app.use('/api/users', routerUser);
app.use('/api/Project', routerPreProject);


app.use((req,res,next) =>{
    res.status(404).json({
        message: "endpoint no found"
    })
})

app.listen(port, () => console.log(`server litening on port ${port}`));
