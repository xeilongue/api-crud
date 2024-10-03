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
```json
{
  "nome": "Rodolfo",
  "idade": 31,
  "email": "rodolfo@email.com"
}
```

# Prisma
```sh
npm install prisma --save-dev
npx prisma init
```

Preencha o .env de acordo com a [documentação](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-node-mongodb)
```.env
DATABASE_URL="mongodb+srv://test:test@cluster0.ns1yp.mongodb.net/myFirstDatabase
```

```sh
npx prisma db push
npm install @prisma/client
npx prisma studio
```