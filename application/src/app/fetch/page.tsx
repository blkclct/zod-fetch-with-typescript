async function getJsonPlaceholderData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function Fetch() {
  const data = await getJsonPlaceholderData();
  console.log(data);

  return <main>{/* ... */}</main>;
}
