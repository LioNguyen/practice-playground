export function log(value) {
  const currentTime = new Date().toISOString();

  console.log(`[${currentTime}] LOG:`, value);
}

// Math.random() return [0, 1)
export function generateRandomNumber(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
