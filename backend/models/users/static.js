export async function createUser(newUser) {
  return this.create(newUser);
}

export async function findEmail(emailObj) {
  return this.findOne(emailObj);
}
