/*
 * use useSWR hook
 * create a fetcher function
 */

type FetcherArgs = Parameters<typeof fetch>;

export const fetcher = (...args: FetcherArgs) =>
  fetch(...args).then((res) => res.json());
