import { Client, Run } from 'langsmith';

export const initLangsmithClient = (): Client => {
  const client = new Client({
    apiUrl: 'https://api.smith.langchain.com',
    apiKey: process.env.LANGSMITH_API_KEY,
  });

  return client;
};

export const getRuns = async () => {
  const client = initLangsmithClient();
  const shortId = 'plgd_ia4o5xprr';
  const shortIdThatWorks = 'plgd_b6kn7j9co';

  const runsIterable = client.listRuns({
    filter: `and(has(tags, "nodeEnv:development"), has(tags, "shortId:${shortId}"))`,
    projectName: 'development',
  });

  const runs: Array<Run> = [];

  // eslint-disable-next-line no-restricted-syntax
  for await (const run of runsIterable) {
    runs.push(run);
  }

  return runs.length ? runs : null;
};
