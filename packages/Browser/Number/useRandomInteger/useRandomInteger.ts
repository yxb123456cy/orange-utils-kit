export default function useRandomInteger(min: number, max: number) {
  if (min > max)
    throw new Error(`Min:${min} cannot be greater than max:${max}`)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
