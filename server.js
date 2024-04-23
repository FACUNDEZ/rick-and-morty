import cors from "cors";

const app = express();

app.use(cors());

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});