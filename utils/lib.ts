export async function getUsers () {
  const res =await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json()
};


export async function getProducts () {
  const res =await fetch("https://dummyjson.com/products?limit=15");
  return res.json()
};
