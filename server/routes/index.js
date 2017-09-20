import express from 'express';
import ssr from './ssr';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/*', ssr);

app.get('/employer', (req, res) => {
  console.log("Received a request");
});
app.listen((process.env.PORT || 3000), () => {
  console.log(`Hello World listening on port: ${process.env.PORT}`);
});
