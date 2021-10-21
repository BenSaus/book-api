import { Context } from './types';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const saltRounds = 10;

interface RegisterInput {
    email: string;
    password: string;
}

interface LoginInput {
    email: string;
    password: string;
}

const resolvers = {
    Query: {
        Login: async (_: any, args: any, { dal, jwtSecret }: Context) => {
            const { input }: { input: LoginInput } = args; // TODO: Ugly
            const email = input.email;
            const password = input.password;

            const user = await dal.User.getByEmail(email);
            if (!user) {
                throw new Error('Unauthorized');
            }

            const match = await bcrypt.compare(password, user.password);

            if (match) {
                const token = jwt.sign(
                    { id: user.id, email: user.email },
                    jwtSecret
                );
                return { token, user };
            } else {
                throw new Error('Unauthorized');
            }
        },
    },
    Mutation: {
        RegisterUser: async (
            _: any,
            args: any,
            { dal, jwtSecret }: Context
        ) => {
            const { input }: { input: RegisterInput } = args; // TODO: Ugly
            const email = input.email;
            const password = input.password;

            try {
                const hashedPassword = await bcrypt.hash(password, saltRounds);
                const user = await dal.User.create({
                    email,
                    password: hashedPassword,
                });

                const token = jwt.sign(
                    { id: user.id, email: user.email },
                    jwtSecret
                );

                return { user, token };
            } catch (error) {
                console.log(error);
                throw new Error('Could not create user');
            }
        },
    },
};

export default resolvers;
