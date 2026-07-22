import '@testing-library/jest-dom'
import generateTokenAdapter from '@/modules/infrastructure/adapters/generate-token.adapter'
import { env } from '@/modules/core/env';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('GenerateTokenAdapter', () => {
  it('should call the correct endpoint and return the access token', async () => {
    const token = await generateTokenAdapter.fetchToken(
      env.MELI_APP_ID,
      env.MELI_CLIENT_SECRET,
      env.APP_URL,
    );
    expect(token).toBeDefined();
  });
});