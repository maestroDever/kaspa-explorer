import { Token } from "@/types";
import { formatPercentage } from "@/utils";

export default function TokenTable({ tokenList }: { tokenList: Token[] }) {
  return (
    <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
      <thead>
        <tr>
          <th
            scope="col"
            className="sticky top-0 left-0 z-20 py-3.5 pl-4 px-3 text-left text-sm font-semibold text-gray-900 dark:text-white bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm"
          >
            Ticker
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm"
          >
            Max supply
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm"
          >
            PreMinted
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm"
          >
            Minted
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm"
          >
            Decimals
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm"
          >
            opScoreAdd / opScoreMod
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm"
          >
            State
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm"
          >
            HashRev
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm"
          >
            MtsAdd
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 py-3.5 pl-3 px-4 bg-white/75 dark:bg-gray-800/75 backdrop-blur-sm"
          >
            <span className="sr-only">Details</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        {tokenList.map((token) => (
          <tr key={token.tick}>
            <td className="sticky left-0 whitespace-nowrap py-5 pl-4 px-3 text-sm bg-white dark:bg-gray-800">
              <div className="flex items-center">
                <div className="size-11 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    src={`data:image/svg+xml,${encodeURIComponent(
                      '<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><circle cx="128" cy="128" r="128" fill="#808080"/></svg>'
                    )}`}
                    className="size-11 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {token.tick}
                  </div>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <div className="text-gray-900 dark:text-white">{token.max}</div>
              {/* <div className="mt-1 text-gray-500 dark:text-gray-400">
                {token.lim}
              </div> */}
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-gray-400">
              <div className="text-gray-900 dark:text-white">
                {formatPercentage((token.pre / token.max) * 100)}
              </div>
              <div className="mt-1 text-gray-500 dark:text-gray-400">
                {token.pre}
              </div>
              {/* <div className="mt-1 text-gray-500 dark:text-gray-400 truncate max-w-[200px]">
                {token.to}
              </div> */}
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-gray-400">
              <div className="text-gray-900 dark:text-white">
                {formatPercentage((token.minted / token.max) * 100)}
              </div>
              <div className="mt-1 text-gray-500 dark:text-gray-400">
                {token.minted}
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-gray-400">
              <div className="text-gray-900 dark:text-white">{token.dec}</div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-gray-400">
              <div className="text-gray-900 dark:text-white">
                {token.opScoreAdd}
              </div>
              <div className="mt-1 text-gray-500 dark:text-gray-400">
                {token.opScoreMod}
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-gray-400">
              <div className="text-gray-900 dark:text-white">{token.state}</div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-gray-400">
              <div className="text-gray-900 dark:text-white truncate max-w-[200px]">
                {token.hashRev}
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-gray-400">
              <div className="text-gray-900 dark:text-white">
                {token.mtsAdd}
              </div>
            </td>
            <td className="relative whitespace-nowrap py-5 pl-3 px-4 text-right text-sm font-medium">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                View Details<span className="sr-only">, {token.tick}</span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
