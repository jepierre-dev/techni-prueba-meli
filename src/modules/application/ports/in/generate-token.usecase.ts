interface IGenerateTokenUseCase {
  execute(): Promise<string>;
}

export default IGenerateTokenUseCase;