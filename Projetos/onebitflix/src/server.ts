import express from 'express';
import { sequelize } from './database';
import { adminJs, adminJsRouter } from './adminjs';

const app = express();

app.use(express.static('public'));

app.use(adminJs.options.rootPath, adminJsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("DB connection successful");
  })

  console.log(`Server is running on port ${PORT}`);
});