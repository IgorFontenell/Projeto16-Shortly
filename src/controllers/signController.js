import bcrypt from 'bcrypt';
import connection from "../database/pgConection.js";
import { v4 as uuid } from 'uuid';

export async function createUser (request, response) {

    try {
        const {
            name,
            email,
            password
        } = request.user;
        
        const { rows: emailIsRepeted }  = await connection.query('SELECT email FROM users WHERE email = $1', [email]);
        
        if (emailIsRepeted.length !== 0) {
            return response.status(409).send("Email já cadastrado!");
        }
        const cryptPassword = bcrypt.hashSync(password, 10);

        await connection.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, cryptPassword]);
        
        const { rows: user }  = await connection.query('SELECT * FROM users WHERE email = $1', [email]);

        await connection.query(`INSERT INTO session ("userId") VALUES ($1)`, [user[0].id]);
        
        response.status(201).send("Usuário criado com sucesso!");
    } catch {
        response.status(500).send("Erro no servidor!")
    }
    
};

export async function loginUser (request, response) {

    try {
        const {
            email,
            password
        } = request.user;
        
        const { rows: user } = await connection.query('SELECT * FROM users WHERE email = $1', [email]);
        
        if(user[0] === undefined) {
            return response.status(401).send("Usuário ou senha incorretos!");
        };
        
        const passwordIsSame = bcrypt.compareSync(password, user[0].password);
        
        if(!passwordIsSame) {
            return response.status(401).send("Usuário ou senha incorretos!");
        }

        const token = uuid();
        await connection.query(`UPDATE session SET token = $1 WHERE "userId" = $2`, [token, user[0].id]);

        response.status(200).send(token);
        
        
    } catch {
        response.status(500).send("Erro no servidor!")
    }
    
};