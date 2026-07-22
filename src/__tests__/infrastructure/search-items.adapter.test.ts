import generateTokenAdapter from '@/modules/infrastructure/adapters/generate-token.adapter';
import { env } from '@/modules/core/env';

const SEARCH_QUERY = 'zapatillas';
const SITE_ID = 'MCO';

describe('Search Items — integration (real API)', () => {
  it('should fetch a token and use it to search items', async () => {
    const token = await generateTokenAdapter.fetchToken(
      env.MELI_APP_ID,
      env.MELI_CLIENT_SECRET,
      env.APP_URL,
    );
    console.log('Fetched token:', token);

    const response = await fetch(`https://api.mercadolibre.com/sites/${SITE_ID}/search?q=${SEARCH_QUERY}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    });

    // const meResponse = await fetch(`https://api.mercadolibre.com/users/me`, {
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //     'Accept': 'application/json',
    //   },
    // });
    console.log(await response.json());
  });
});

