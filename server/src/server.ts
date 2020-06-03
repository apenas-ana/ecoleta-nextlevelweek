// para executar, instalar ts-node com npm install ts-node -D, pois o node só executa arquivos .js.
// Criar arquivo de configuração do TypeScript com npx tsc --init 
// npx -> executar pacotes instalados. -> npx 

// npm install @types/express -D
// npm install typescript -D
// npm install ts-node -D
// npx tsc --init
// npx ts-node src/server.js
// npm install ts-node-dev -D
// npx ts-node-dev src/server.js
import express from 'express'; // essa biblioteca tem apenas o código, não tem a definição de tipo.
// instalar biblioteca de definição de tipos com npm install @types/express, mas apenas para dev (-D), pois em produção não será necessário pois o código já terá sido convertido para JavaScript.
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.json()); // forma do express entender o corpo da nossa requisição em formato json
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // express.static -> servir arquivos estáticos de uma pasta específica    

app.listen(3333);

