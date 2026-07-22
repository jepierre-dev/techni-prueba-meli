import createGenerateTokenService from "../application/usecases/generate-token.service";
import createSearchItemsService from "../application/usecases/search-items.service";
import generateTokenAdapter from "../infrastructure/adapters/generate-token.adapter";
import searchItemsAdapter from "../infrastructure/adapters/search-items.adapter";
import IGenerateTokenUseCase from "../application/ports/in/generate-token.usecase";
import ISearchItemsUseCase from "../application/ports/in/search-items.usecase";

// ─── Container type ────────────────────────────────────────────────────────────
// Add new use cases here as the app grows.
type AppContainer = {
  useCases: {
    generateToken: IGenerateTokenUseCase;
    searchItems: ISearchItemsUseCase;
  };
};

// ─── Wiring ────────────────────────────────────────────────────────────────────
// To add a new service:
//   1. Create an out-port interface  (application/ports/out/)
//   2. Implement the adapter         (infrastructure/adapters/)
//   3. Create a factory service      (application/usecases/)
//   4. Register it below
const container = (): AppContainer => {
  const generateTokenService = createGenerateTokenService(generateTokenAdapter);

  return {
    useCases: {
      generateToken: generateTokenService,
      searchItems: createSearchItemsService(
        searchItemsAdapter,
        () => generateTokenService.execute()
      ),
    },
  };
};

export default container;
