import express, { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.disable('x-powered-by');
app.use(helmet());                 // Header bảo mật
app.use(express.json({ limit: '10kb' })); // Giới hạn payload JSON
app.use(
    morgan(
        ":remote-addr :remote-user :user-agent :method :url HTTP/:http-version :status :res[content-length] - :response-time ms"
    )
);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Trang, this is Talka in TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
