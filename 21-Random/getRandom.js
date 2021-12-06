function randomArr(params = {}) {
  const args = { ...{ length: 5, min: 2, max: 32 }, ...params }
  let { length, min, max } = args
  if (
    typeof length != 'number' ||
    typeof min != 'number' ||
    typeof max != 'number' ||
    max <= min ||
    length <= 0
  ) {
    return []
  }
  if (max - min < length) {
    length = max - min + 1
  }
  const arr = []
  for (let i = 0; i < length; i++) {
    const num = Math.round(Math.random() * (max - min)) + min
    if (!arr.includes(num)) {
      arr.push(num)
    } else {
      i -= 1
    }
  }
  return arr
}
