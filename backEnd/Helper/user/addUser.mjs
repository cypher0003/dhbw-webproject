
export const users = [];
export const addUser = (user) => {

  if (!user || !user.password || !user.email || !user.firstname || !user.lastname) {
    throw new Error("Invalid user.");
  }
      users.push({
        ...user,
        addedDate: new Date(),
      });
}