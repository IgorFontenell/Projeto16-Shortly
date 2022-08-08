import urlSchema from "../schemas/urlSchema.js";



export async function urlValidator(request, response, next) {
    const url = request.body;
    
    const validation = urlSchema.validate(url);
    
    if(validation.error) {
        return response.status(422).send(`Erro no preenchimento, campo ${validation.error.details[0].context.key} preenchido incorretamente.`);
    }
    next();
};