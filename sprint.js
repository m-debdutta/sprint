const memory = [1, 7, 3, 9, 9]; 

const instructionList = {
  1: {name: 'add', space: 4} 
}; 

const getNextIndex = function(currentIndex) {
  if(memory[currentIndex] === 1) {
    return currentIndex + 4; 
  }
  if(memory[currentIndex] === 9) {
    return currentIndex; 
  }
}

const performTask = function(currentIndex, currentInstruction) {
  const sum = memory[currentIndex + 1] + memory[currentIndex + 2]; 
  memory[memory[currentIndex + 3]] = sum; 
  return memory; 
}

const sprint = function() {
  let currentIndex = 0; 
  let nextIndex = 0; 

  do {
    currentIndex = nextIndex; 
    nextIndex = getNextIndex(currentIndex); 
    instruction = memory[currentIndex]; 

    if(instruction !== 9) {
      performTask(currentIndex, instruction); 
    }

  } while(instruction !== 9) 
  return memory; 
}

console.log(sprint()); 
