const defaultNeeds = [];

export default function moduleForRouteSetup(inSetup) {
  const setup = inSetup || {};
  setup.needs = defaultNeeds.concat(setup.needs || []);
  return setup;
}
