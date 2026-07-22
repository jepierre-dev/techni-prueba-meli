import createGenerateTokenService from "../application/usecases/generate-token.service";
import generateTokenAdapter from "../infrastructure/adapters/generate-token.adapter";
import IGenerateTokenUseCase from "../application/ports/in/generate-token.usecase";

// ─── Container type ────────────────────────────────────────────────────────────
// Add new use cases here as the app grows.
type AppContainer = {
  useCases: {
    generateToken: IGenerateTokenUseCase;
  };
};

// ─── Wiring ────────────────────────────────────────────────────────────────────
// To add a new service:
//   1. Create an out-port interface  (application/ports/out/)
//   2. Implement the adapter         (infrastructure/adapters/)
//   3. Create a factory service      (application/usecases/)
//   4. Register it below
const container = (): AppContainer => ({
  useCases: {
    generateToken: createGenerateTokenService(generateTokenAdapter),
  },
});

export default container;
