import { Bash } from "./tools/Bash"

describe('stdout.sh', () => {
  test('deve imprimir "hello Jest" no stdout', async () => {
    const stdout = new Bash('/sh-with-jest/src/stdout.sh')
    const out = await stdout.run('')
    expect(out).toContain('hello Jest')
  })
})
