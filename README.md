# Clonando e preparando ambiente

```sh
git clone https://github.com/pedroportales/api-crud.git # Usando Git
gh repo clone pedroportales/api-crud # Usando GitHub Cli
cd api-crud
npm i
```

# HTTP Methods
```txt
* Get -> Listar
* Post -> Criar
* Put -> Editar vários
* Patch -> Editar um
* Delete -> Deletar
```

# HTTP Status
```txt
* 2xx -> Success
* 4xx -> Client error
* 5xx -> Server error
```

# Tipos de Requisição

## Query Params (GET)
* Consultar;
* Exemplos:
* * `servidor.com/usuarios?estado=bahia&cidade=salvador`
* * `servidor.com/series?tipo=comedia&streaming=netflix`

## Route Params (GET / PUT / DELETE)
* Buscar, deletar ou editar algo específico
* Exemplos:
* * get `servidor.com/usuarios/22`
* * put `servidor.com/usuarios/22`
* * delete `servidor.com/usuarios/22`

## Body Params (POST / PUT)
* Exemplo:



Preencha o .env de acordo com a [documentação](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-node-mongodb)
```.env
DATABASE_URL="mongodb+srv://test:test@cluster0.ns1yp.mongodb.net/myFirstDatabase
```

```sh
npx prisma db push
npm install @prisma/client
npx prisma studio
```

# Uso da API
## Usuários
### Criar usuário `/users`
- O usuário deve ser criado com as informações no seguinte formato:
```json
{
  "email": "rodolfo@email.com",
  "name": "Rodolfo Santos",
  "age": 33
}
```

### Consultar usuário `/users`
- Pode ser usado Query Params (procurando pelo email):
```
/users?email=rodolfo@email.com
```

### Editar usuário `/users/:id`
- Deve usar as informações no mesmo formato da criação do usuário, mas com a rota apontando para o id do usuário

### Deletar usuário `/users/:id`
- Deve ter a rota apontando para o id do usuário

## Cursos
### Criar curso `/courses`
- O curso deve ser criado com as informações seguindo o seguinte formato:
```json
{
  "name": "Git e GitHub",
  "duration": "3",
  "description": "Curso de Git e GitHub"
}
```

### Consultar curso `/courses`
- Pode ser usado Query Params (procurando pelo id):
```
/courses?id=...
```

### Editar cursos `/courses/:id`
- Deve usar as informações no mesmo formato da criação do cursos, mas com a rota apontando para o id do curso

### Deletar curso `/courses/:id`
- Deve ter a rota apontando para o id do curso

## Matrículas
### Criar curso `/matriCourse`
- A matrícula deve ser criada com as informações seguindo o seguinte formato:
```json
{
  "userId": "id-do-usuario",
  "courseId": "id-do-curso"
}
```

### Consultar curso `/matriCourse`
- Pode ser usado Query Params (procurando pelo id):
```
/matriCourse?id=...
```

### Editar cursos `/matriCourse/:id`
- Deve usar as informações no mesmo formato da criação da matrícula, mas com a rota apontando para o id da matrícula

### Deletar curso `/matriCourse/:id`
- Deve ter a rota apontando para o id da matrícula
