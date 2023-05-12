const assert = require("assert");
const instructionSet = require("./instructions.js");

const executeInstruction = function (env) {
  if (!(env.instruction in instructionSet)) {
    assert.fail(env.instruction, "INVALID COMMAND");
  }

  env.pc = instructionSet[env.instruction](env.pc, env.program);

  return env;
};

exports.executeInstruction = executeInstruction;
