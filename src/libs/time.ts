export function deadline(seconds = 60 * 10) {
  return Math.ceil(Date.now() / 1000) + seconds
}
