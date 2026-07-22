import IGenerateTokenPort from "@/modules/application/ports/out/generate-token.port";

const generateTokenAdapter: IGenerateTokenPort = {
  fetchToken: async (appId: string, clientSecret: string, redirectUri: string): Promise<string> => {
    const res = await fetch('https://api.mercadolibre.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: appId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
      }),
    });
    const data = await res.json();
    return data.access_token;
  }
};

export default generateTokenAdapter;


