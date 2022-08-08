import { nanoid } from 'nanoid';
import connection from "../database/pgConection.js";


export async function shortingUrl(request, response) {
    try {
        
        const { url } = request.body
        const { authorization } = request.headers;
        const token = authorization?.replace('Bearer ', '');
        
        if(!token) {
            return response.status(401).send("Token inválido!");
        };

        const { rows: userWithToken} = await connection.query('SELECT * FROM session WHERE token = $1', [token]);
        
        if(userWithToken.length === 0) {
            return response.status(401).send("Token inválido!");
        };
        const urlToken = nanoid();
        
        await connection.query('INSERT INTO urls (url, "urlToken", "userId") VALUES ($1, $2, $3)', [url, urlToken, userWithToken[0].userId]);

        response.status(201).send({ shortUrl: urlToken });
    } catch {
        response.status(500).send("Erro com o servidor!");
    }
};

export async function getingUrlById(request, response) {
    try {
        const id = request.params.id;
    
        const { rows: urls } = await connection.query('SELECT id, "urlToken" AS "shortUrl", url FROM urls WHERE id = ($1)', [id]);
    
        console.log(urls[0])
        if(urls[0] === undefined) {
            return response.status(404).send("Id não encontrada!");
        }
        response.status(200).send(urls);

    } catch {
        response.status(500).send("Erro com o servidor!");
    }
    
};

export async function getingUrlByShortUrl(request, response) {
    try {
        const urlToken = request.params.shortUrl;
        
        const { rows: urlInfo } = await connection.query('SELECT * FROM urls WHERE "urlToken" = ($1)', [urlToken]);
        
        if(urlInfo.length === 0) {
            return response.status(404).send("Url não encontrada!");
        }
        console.log(urlInfo[0].view);

        await connection.query('UPDATE urls SET view = $1 WHERE "urlToken" = ($2)', [urlInfo[0].view + 1, urlToken]);

        response.redirect(urlInfo[0].url);

    } catch {
        response.status(500).send("Erro com o servidor!");
    }
    
};

export async function deletingUrl(request, response) {

    try {
        const urlId = request.params.id;

        const { authorization } = request.headers;
        const token = authorization?.replace('Bearer ', '');

        if(!token) {
            return response.status(401).send("Token inválido!");
        };

        const { rows: shortenInfo} = await connection.query(`
        SELECT session.token, u.id, u.url 
        FROM session JOIN urls u 
        ON session."userId" = u."userId" 
        WHERE session.token = $1 AND u.id = $2`, [token, urlId]);
        
        console.log(shortenInfo);
        if(shortenInfo.length === 0) {
            return response.status(401).send("Token inválido!");
        };
        
        await connection.query('DELETE FROM urls WHERE id = ($1)', [shortenInfo[0].id]);

        response.sendStatus(204);

    } catch {
        response.status(500).send("Erro com o servidor!")
    }  
};
