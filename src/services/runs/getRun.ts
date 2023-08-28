export const initLangsmithClient = (): Client => {
  const client = new Client({
    apiUrl: 'https://api.smith.langchain.com',
    apiKey: config.LANGSMITH_API_KEY,
  });

  return client;
};

export const getRuns = () => {};
