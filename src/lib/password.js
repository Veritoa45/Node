import bcryp from "bcrypt";

export const encryptPassword = async (pssword) => {
  const salt = await bcryp.genSalt(10);
  return await bcryp.hash(pssword, salt);
};

export const comparePassword = async (plainPassword, hashedPassword) => {
  return await bcryp.compare(plainPassword, hashedPassword);
};
