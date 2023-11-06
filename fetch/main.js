async function pokemon() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/jigglypff');
    if (res.ok === false) {
      throw new Error(res.status);
    }
    const parsedInfo = await res.json();
    console.log(parsedInfo);
  } catch (error) {
    console.log(error);
  }
}
pokemon();
