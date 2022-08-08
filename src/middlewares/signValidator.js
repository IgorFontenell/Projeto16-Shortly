import signInSchema from "../schemas/signInSchema.js";
import signUpSchema from "../schemas/signUpSchema.js";

export async function signUpValidator(request, response, next) {
    const user = request.body;
    
    const validation = signUpSchema.validate(user);
    
    if(validation.error) {
        return response.status(422).send(`Erro de cadastro, campo ${validation.error.details[0].context.key} preenchido incorretamente.`);
    }
    request.user = user;
    next();
};

export async function signInValidator(request, response, next) {
    const user = request.body;
    
    const validation = signInSchema.validate(user);

    if(validation.error) {
        return response.status(422).send(`Erro de cadastro, campo ${validation.error.details[0].context.key} preenchido incorretamente.`);
    }
    request.user = user;
    next();
};
