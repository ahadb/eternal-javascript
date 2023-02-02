const randomId = () => {
  const pattern = 'xxxxx-yyyy-xxx-yy-x'
  let timeInMilliseconds = new Date().getTime()
  return pattern.replace(/[xy]/g, currentChar => {
    const randomCharacter = (timeInMilliseconds + Math.random() * 16) % 16 | 0
    timeInMilliseconds = Math.floor(timeInMilliseconds / 16)
    return (currentChar === 'x' ? randomCharacter : (randomCharacter & 0x7 | 0x8)).toString(16)
  })
}
