import express from "express";
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const users = [];

app.post('/users', (req,res) => {
    users.push(req.body);

    res.status(201).json(req.body);
})

app.get('/users', (req,res) => {
    res.status(200).json(users);
});

app.listen(8081);
