export default async (url, setState) => {
  const responce = await fetch(url);

  const result = await responce.json();

  setState(result);
};
