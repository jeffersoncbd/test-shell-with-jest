import { Bash } from "./tools/Bash"
import { CustomError } from "./tools/CustomError"

describe('stderr.sh', () => {
  test('deve encerrar o script com erro', async () => {
    const stderr = new Bash('/sh-with-jest/src/stderr.sh')
    await expect(stderr.run('')).rejects.toThrowError('Um erro não muito assustador aconteceu')
    await expect(stderr.run('')).rejects.toThrowError(CustomError)
  })
})
