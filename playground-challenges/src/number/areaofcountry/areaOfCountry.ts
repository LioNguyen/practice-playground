export default function areaOfCountry(country: string, area: number) {
  const worldArea = 148940000;
  const portion = (area / worldArea) * 100;

  return `${country} is ${portion.toFixed(2)}% of the total world's landmass`;
}
