DOMSelectors.grass.addEventListener("click", async () => {
    const grass = await getData(`grass`);
    getData("Pokemon Info", grass);
  });
  
  DOMSelectors.fire.addEventListener("click", async () => {
    const fire = await getData(`fire`);
    createGallery("Pokemon Info", fire);
  });
  
  DOMSelectors.water.addEventListener("click", async () => {
    const water = await getData(`water`);
    createGallery("Pokemon Info", water);
  });
  
  DOMSelectors.ground.addEventListener("click", async () => {
    const ground = await getData(`ground`);
    createGallery("Pokemon Info", ground);
  });
  
  DOMSelectors.rock.addEventListener("click", async () => {
    const rock = await getData(`rock`);
    createGallery("Pokemon Info", rock);
  });
  
  DOMSelectors.ghost.addEventListener("click", async () => {
    const ghost = await getData(`ghost`);
    console.log("Pokemon Info", ghost);
  });
  





  const abilities = Array.isArray(data.abilities)
  ? data.abilities.map((abilityInfo) => abilityInfo.ability.name)
  : [];