import bcrypt from "bcryptjs";

export const encryptPassword = async password => {
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    return await bcrypt.hash(password, salt);
}