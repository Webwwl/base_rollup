export function say(str) {
  console.log('say:', str)
}

export function sum(...rest) {
  return rest.reduce((acc, curr) => acc + curr)
}
