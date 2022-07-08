import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const SEC_PORT = 443;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const DB_URL = 'mongodb+srv://postexpired2022:briankevin2022@postexpired-cluster.tmzegp2.mongodb.net/?retryWrites=true&w=majority';

app.use((req, res, next) => {
    const allowedOrigins = ['https://api.postexpired.com'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
    }
);

const __dirname = path.resolve();

// const sslServer = https.createServer(
//     {
    
//     "key" : fs.readFileSync(path.join(__dirname, 'ssl', 'private.pem')),
//         "cert": fs.readFileSync(path.join(__dirname, 'ssl', 'cert_chain.pem'))
//     },
//     app
// );

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
        // sslServer.listen(SEC_PORT, () => console.log(`HTTPS Server running on port: ${SEC_PORT}`));
    })
    .catch((error) => console.log(error.message));
    
mongoose.set('useFindAndModify', false);