function importAll(r: __WebpackModuleApi.RequireContext) {
  return r.keys().map(r);
}

const leo360: any[] = importAll(require.context('./images/leo360', false, /\.(png|jpe?g|svg)$/));
const gozarban: any[] = importAll(
  require.context('./images/gozarban', false, /\.(png|jpe?g|svg)$/)
);
const bookcurve: any[] = importAll(
  require.context('./images/bookcurve', false, /\.(png|jpe?g|svg)$/)
);
// const images: string[] = [leo.src];

export { leo360, gozarban, bookcurve };
