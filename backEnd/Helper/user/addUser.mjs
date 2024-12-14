
export const users = [];
export const addUser = (user) => {

    if (!user && !user.password && !user.email && !user.firstname && !user.lastname) {
        throw new Error("Invalid user.");
      }

      user.push({
        ...user,
        addedDate: new Date(),
      });
}