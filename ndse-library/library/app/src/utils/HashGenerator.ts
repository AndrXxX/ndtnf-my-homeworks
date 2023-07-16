import bcrypt from "bcrypt";

const saltRounds = 10;

export default {
  isValid(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  },
  generate(password: string) {
    if (!password) {
      throw new Error("Пароль не может быть пустым");
    }
    return bcrypt.hashSync(password, saltRounds);
  }
};
