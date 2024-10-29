import cors from "cors";
import express from "express";
import { PrismaClient } from "@prisma/client"; // Prisma
import jwt from "jsonwebtoken";

const app = express();
const prisma = new PrismaClient(); // Prisma
const PORT = 8081

app.use(express.json());
app.use(cors());
const SECRET = "seu_segredo_aqui";

//const users = []; // Comentar se for usar Prisma
/*
app.use('/', (req,res) => {
    res.json({
        status: "API working fine",
        code: 200
    })
})*/

// **USUÁRIOS**

// Criar usuário

app.post('/users', async (req,res) => {
    //users.push(req.body);
    await prisma.user.create({ // Prisma
        data: {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        }
    });

    res.status(201).json(req.body);
})

app.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        // Encontre o usuário pelo e-mail
        const user = await prisma.user.findUnique({
            where: { email: email }
        });

        // Verifique se o usuário existe
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Verifique se a senha está correta (comparação direta)
        if (user.password !== senha) { // Corrigido para 'password' em vez de 'senha'
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        // Gere um token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1h' });

        // Retorne o token de autenticação
        res.status(200).json({ message: 'Login bem-sucedido', token: token });
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
});

// Consultar usuário
app.get('/users', async (req,res) => {
    let users = [];

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                email: req.query.email,
            }
        }); // Prisma
    } else {
        users = await prisma.user.findMany();
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
            password: req.body.password
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
            duration: req.body.duration,
            description: req.body.description
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
                id: req.query.id
            }
        }); // Prisma
    } else {
        courses = await prisma.course.findMany();
    }
    
    res.status(200).json(courses);
});

// Editar curso
app.put('/courses/:id', async (req,res) => {
    //users.push(req.body);
    await prisma.course.update({ // Prisma
        data: {
            name: req.body.name,
            duration: req.body.duration,
            description: req.body.description
        }
    });

    res.status(201).json(req.body);
})

// Deletar courso
app.delete('/courses/:id', async (req,res) => {
    //users.push(req.body);
    await prisma.course.delete({ // Prisma
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({message: 'Curso deletado com Sucesso!'});
})


// **MATRÍCULAS**

// Criar matrícula
app.post('/matriCourse', async (req,res) => {
    await prisma.matriCourse.create({ // Prisma
        data: {
            userId: req.body.userId,
            courseId: req.body.courseId
        }
    });

    res.status(201).json(req.body);
})

// Consultar matrícula
app.get('/matriCourse', async (req,res) => {
    let matriCourses = [];

    if(req.query){
        matriCourses = await prisma.matriCourse.findMany({
            where: {
                id: req.query.id
            }
        }); // Prisma
    } else {
        matriCourses = await prisma.matriCourse.findMany();
    }
    
    res.status(200).json(matriCourses);
});

// Editar matrícula
app.put('/matriCourse/:id', async (req,res) => {
    //users.push(req.body);
    await prisma.matriCourse.update({ // Prisma
        data: {
            userId: req.body.userId,
            courseId: req.body.courseId
        }
    });

    res.status(201).json(req.body);
})

// Deletar matrícula
app.delete('/matriCourse/:id', async (req,res) => {
    //users.push(req.body);
    await prisma.matriCourse.delete({ // Prisma
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({message: 'Matrícula deletada com Sucesso!'});
})

app.listen(() => app.listen(PORT, () => console.log(`Running on port ${PORT}`)));
