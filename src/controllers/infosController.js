import connection from "../database/pgConection.js";


export async function getUserUrls (request, response) {
    try {
        const { authorization } = request.headers;
        const token = authorization?.replace("Bearer ", "");

        if(!token) {
            return response.status(401).send("Token inválido!");
        };

        const { rows: userInfo} = await connection.query(`
        SELECT users.id, users.name, SUM(urls.view) AS "visitCount"
        FROM users
        JOIN session 
        ON session."userId" = users.id
        JOIN urls
        ON urls."userId" = users.id
        WHERE token = ($1)
        GROUP BY users.id
        `, [token]);

        const { rows: urlsInfo} = await connection.query(`
        SELECT id, "urlToken" AS "shortUrl", url, view AS "visitCount" 
        FROM urls 
        WHERE "userId" = $1
        `, [userInfo[0]?.id]);

        if(userInfo[0] === undefined) {
        return response.status(401).send("Token inválido!")
        };

        const totalInfo = {
            ...userInfo[0],
            shortenedUrls: [...urlsInfo]
        };

        response.status(200).send(totalInfo);

    } catch {
        response.status(500).send("Erro com o servidor!");
    }
    
};

export async function getRankings (request, response) {
    try {
        const { rows: rankings} = await connection.query(`
        SELECT users.id, users.name, COUNT(urls."userId") AS "linksCount", SUM(urls.view) AS "visitCount"
        FROM users 
        JOIN urls
        ON users.id = urls."userId"
        GROUP BY  users.id
        ORDER BY "visitCount" DESC
        LIMIT 10
        `);
        response.status(200).send(rankings);
    } catch {
        response.status(500).send("Erro com o servidor!");
    }
    
}
