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
  // this works ~2% of the time.
  const shortId = 'plgd_ia4o5xprr';
  // this small one works 50% of the time. When it does, it still takes ~5-15 seconds to run.
  const shortIdThatWorks = 'plgd_b6kn7j9co';

  const runsIterable = client.listRuns({
    filter: `and(has(tags, "shortId:${shortId}"))`,
    projectName: 'development',
  });

  const runs: Array<Run> = [];

  // eslint-disable-next-line no-restricted-syntax
  for await (const run of runsIterable) {
    runs.push(run);
  }

  return runs.length ? runs : null;
};
