import express from 'express';
import bodyParser from 'body-parser';
import config from '../config.json';
import router from './routes/index';
const app = express();

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(config.route, router);

//3000番ポートを使ってサーバーを立ち上げ
app.listen(config.port, ()=>{
  console.log(`app listening on ${config.port}`);
});