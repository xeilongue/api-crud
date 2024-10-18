import express from "express";
import { PrismaClient } from "@prisma/client"; // Prisma

const app = express();
const prisma = new PrismaClient(); // Prisma

app.use(express.json());

//const users = []; // Comentar se for usar Prisma

// **USUÁRIOS**

// Criar usuário
app.post('/users', async (req,res) => {
    //users.push(req.body);
    await prisma.user.create({ // Prisma
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
    let users = [];

    if(req.query){
        users = await prisma.course.findMany({
            where: {
                name: req.query.name
            }
        }); // Prisma
    } else {
        users = await prisma.users.findMany();
    }
    
    res.status(200).json(users);
});

// Editar usuário
app.put('/users/:id', async (req,res) => {
    //users.push(req.body);
    await prisma.user.update({ // Prisma
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    });

    res.status(201).json(req.body);
})

// Deletar usuário
app.delete('/users/:id', async (req,res) => {
    //users.push(req.body);
    await prisma.user.delete({ // Prisma
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({message: 'Usuário deletado com Sucesso!'});
})

// **CURSOS**

// Criar curso
app.post('/courses', async (req,res) => {
    await prisma.course.create({ // Prisma
        data: {
            name: req.body.name,
            hours: req.body.hours
        }
    });

    res.status(201).json(req.body);
})

// Consultar curso
app.get('/courses', async (req,res) => {
    let courses = [];

    if(req.query){
        courses = await prisma.course.findMany({
            where: {
                name: req.query.name
            }
        }); // Prisma
    } else {
        courses = await prisma.course.findMany();
    }
    
    res.status(200).json(users);
});

// Editar curso
app.put('/courses/:id', async (req,res) => {
    //users.push(req.body);
    await prisma.course.update({ // Prisma
        data: {
            name: req.body.name,
            hours: req.body.hours
        }
    });

    res.status(201).json(req.body);
})

// Deletar usuário
app.delete('/courses/:id', async (req,res) => {
    //users.push(req.body);
    await prisma.course.delete({ // Prisma
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({message: 'Usuário deletado com Sucesso!'});
})


app.listen(8081);
