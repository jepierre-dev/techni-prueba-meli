interface IGenerateTokenPort {
  fetchToken(appId: string, clientSecret: string, redirectUri: string): Promise<string>;
}

export default IGenerateTokenPort;