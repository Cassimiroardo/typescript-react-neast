import * as bcrypt from 'bcrypt'

export async function hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt)
}

export async function generateSalt() {
    return bcrypt.genSalt()
}