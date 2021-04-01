export const UserService = {
  
  getUsers: () => fetch("https://jsonplaceholder.typicode.com/users"),

  getUser: (id?: string) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`),

  deleteUser: (id?: string) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }),

  createUser: (data: object) =>
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  editUser: (data: object, id?: string) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
};
