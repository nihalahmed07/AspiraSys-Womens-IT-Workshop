import { db } from "@db";
import { users } from "@shared/schema";

export const storage = {
  async insertUser(user: any) {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  },
  
  async getUserByUsername(username: string) {
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.username, username)
    });
    return user;
  }
};