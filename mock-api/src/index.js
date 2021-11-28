import cors from 'cors';
import express from 'express';
import { AuthController } from './controllers/auth.controller.js';
import { ContactController } from './controllers/contact.controller.js';

import { authRequired } from './middlewares/auth.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/auth/login', AuthController.login);
app.post('/api/auth/register', AuthController.register);

app.get('/api/auth/me', authRequired, AuthController.me);

app.get('/api/contacts', authRequired, ContactController.index);

app.post('/api/contacts', authRequired, ContactController.create);
app.get('/api/contacts/:id', authRequired, ContactController.read);
app.patch('/api/contacts/:id', authRequired, ContactController.update);
app.delete('/api/contacts/:id', authRequired, ContactController.delete);

app.listen(5000, () => {
    console.log('listening on port 5000');
});
