import bcrypt from "bcrypt";

export async function createUser(newUser) {
  return this.create(newUser);
}

export async function findEmail(emailObj) {
  return this.findOne(emailObj);
}

export async function findUserById(id) {
  return await this.findById(id);
}

export async function login(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) return user;
    throw new Error("incorrect password");
  }
  throw new Error("The email is not registered");
}
