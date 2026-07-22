import { env } from "@/modules/core/env";
import IGenerateTokenPort from "../ports/out/generate-token.port";
import IGenerateTokenUseCase from "../ports/in/generate-token.usecase";

const createGenerateTokenService = (port: IGenerateTokenPort): IGenerateTokenUseCase => ({
  execute: async (): Promise<string> => {
    const { MELI_APP_ID, MELI_CLIENT_SECRET, APP_URL } = env;
    return port.fetchToken(MELI_APP_ID, MELI_CLIENT_SECRET, APP_URL);
  }
});

export default createGenerateTokenService;