import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
    const user = createUser('TestName', 'name@test.com.br', '123456');
    return response.json({ message: 'Hello World' });
}