import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit : "38mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "38mb", extended : true}));
app.use(cors());

//connect to mongodb cloud atlas
const CONNECTION_URL = 'mongodb+srv://yusuf:asdfasdfasdf@cluster0.b6qttmu.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})  
    .then(() => app.listen(PORT, ()=> console.log(`listening on port ${PORT}`)))
    .catch((error) => console.log(error.message) );

//mongoose.set('useFindAndModify', false);