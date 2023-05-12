const assert = require("assert");
const { executeInstruction } = require("./src/executeInstruction.js");

const sprint = function (sprintCode) {
  const env = {
    pc: 0,
    program: sprintCode.slice(),
    instruction: 0,
    execution: true,
  };

  do {
    env.instruction = env.program[env.pc];
    executeInstruction(env);
  } while (env.instruction !== 9 && env.execution === true);

  return env.program;
};

console.log(sprint([1, 4, 3, 5, 9]), "addition");
console.log(sprint([2, 4, 3, 5, 9]), "substraction");
console.log(sprint([1, 1, 9, 10, 3, 3]), "jump");
console.log(sprint([1, 1, 9, 10, 8, 1, 2, 9]), "copy");
