function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }
  
  const feelings = {
    syndoms: ['hungry', 'tired', 'happy', 'angry'],
    advice: ['eat', 'sleep', 'take a shit']
  }
  
  // Store the 'wisdom' in an array
  let help = []
  
  // Iterate over the object
  for(let prop in feelings) {
    let optionIdx = generateRandomNumber(feelings[prop].length)
  
    switch(prop) {
      case 'syndoms':
        help.push(`You are: "${feelings[prop][optionIdx]}".`)
        break
      case 'advice':
        help.push(`You should: "${feelings[prop][optionIdx]}".`)
        break
      default:
        help.push('There is not enough info.')
    }
  }
  
  function formatFeelings(feel) {
    const formatted = help.join('\n')
    console.log(formatted)
  }
  
  formatFeelings(help);