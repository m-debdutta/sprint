class Instruction {
  constructor() {}
  put(pc, program) {
    const resultAddress = program[pc + 2];
    program[resultAddress] = program[pc + 1];
    return pc + 3;
  }

  addition(pc, program) {
    const resultAddress = program[pc + 3];
    program[resultAddress] = program[pc + 1] + program[pc + 2];
    return pc + 4;
  }

  substract(pc, program) {
    const resultAddress = program[pc + 3];
    program[resultAddress] = program[pc + 1] - program[pc + 2];
    return pc + 4;
  }

  jump(pc, program) {
    return program[pc + 1] - 1;
  }

  jumpEqual(pc, program) {
    const valueOfLocation1 = program[program[pc + 1]];
    const valueOfLocation2 = program[program[pc + 2]];
    return valueOfLocation1 === valueOfLocation2 ? program[pc + 3] : pc + 4;
  }

  jumpLessThan(pc, program) {
    const valueOfLocation1 = program[program[pc + 1]];
    const valueOfLocation2 = program[program[pc + 2]];
    return valueOfLocation1 < valueOfLocation2 ? program[pc + 3] : pc + 4;
  }

  copy(pc, program) {
    program[program[pc + 2]] = program[program[pc + 1]];
    return pc + 3;
  }

  halt(pc, program) {
    return pc;
  }
}
exports[0] = put;
exports[1] = addition;
exports[2] = substract;
exports[3] = jump;
exports[4] = jumpEqual;
exports[5] = jumpLessThan;
exports[7] = copy;
exports[9] = halt;
