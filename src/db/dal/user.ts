import User, { UserInput, UserOutput } from '../models/User';

const create = async (payload: UserInput): Promise<UserOutput> => {
    return User.create(payload);
};

const getByEmail = async (email: string): Promise<UserOutput> => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error('Not found');
    }

    return user;
};

export default { create, getByEmail };
