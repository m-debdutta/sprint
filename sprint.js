const assert= require('assert');

const put = function(pc, program) {
  const resultAddress = program[pc + 2]; 
  program[resultAddress] = program[pc + 1]; 
  return pc + 3; 
}

const addition = function(pc, program) {
  const resultAddress = program[pc + 3]; 
  program[resultAddress] = program[pc + 1] + program[pc + 2]; 
  return pc + 4; 
}; 

const substract = function(pc, program) {
  const resultAddress = program[pc + 3]; 
  program[resultAddress] = program[pc + 1] - program[pc + 2]; 
  return pc + 4; 
}; 

const jump = function(pc, program) {
  return program[pc + 1] - 1;
}; 

const jumpEqual = function(pc, program) {
  const valueOfLocation1 = program[program[pc + 1]]; 
  const valueOfLocation2 = program[program[pc + 2]]; 
  return valueOfLocation1 === valueOfLocation2 ? program[pc + 3] : pc + 4; 
}; 

const jumpLessThan = function(pc, program) {
  const valueOfLocation1 = program[program[pc + 1]]; 
  const valueOfLocation2 = program[program[pc + 2]]; 
  return valueOfLocation1 < valueOfLocation2 ? program[pc + 3] : pc + 4; 
}; 

const copy = function(pc, program) {
  program[program[pc + 2]] = program[program[pc + 1]]; 
  return pc + 3; 
}

const halt = function(pc, program) {
  return pc; 
}; 

const instructionSet = {
  0: put, 
  1: addition,  
  2: substract, 
  3: jump,
  4: jumpEqual, 
  5: jumpLessThan, 
  7: copy, 
  9: halt
}; 

const executeInstruction = function(env) {
  if(!(env.instruction in instructionSet)) {
    assert.fail(env.instruction, 'INVALID COMMAND'); 
  }
  env.pc = instructionSet[env.instruction](env.pc, env.program);
  return env; 
}; 

const sprint = function(sprintCode) {
  const env = {
    pc: 0, 
    program: sprintCode.slice(),  
    instruction: 0,
    execution: true 
  }; 

  do {
    env.instruction = env.program[env.pc]; 
    executeInstruction(env); 
  } while(env.instruction !== 9 && env.execution === true) 

  return env.program; 
}; 

console.log(sprint([1, 4, 3, 5, 9]), 'addition'); 
console.log(sprint([2, 4, 3, 5, 9]), 'substraction'); 
console.log(sprint([1, 1, 9, 10, 3, 3]), 'jump'); 
console.log(sprint([1, 1, 9, 10, 8, 1, 2, 9]), 'copy'); 
