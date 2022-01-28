import useSWR, { SWRResponse } from "swr";

type Release = Record<string, string> & { tag_name: string };

export const useLatestRelease = (): SWRResponse<Release, Error> => {
  return useSWR(
    "https://api.github.com/repos/tachibanayu24/dev-toolkit/releases/latest",
    (url) => fetch(url).then((res) => res.json())
  );
};
