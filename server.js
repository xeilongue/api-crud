import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

//const users = [];

// Criar usuário
app.post('/users', async (req,res) => {
    //users.push(req.body);
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    });

    res.status(201).json(req.body);
})

// Consultar usuário
app.get('/users', async (req,res) => {
    const users = await prisma.user.findMany();
    
    res.status(200).json(users);
});

app.listen(8081);
