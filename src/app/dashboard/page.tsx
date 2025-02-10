"use client";

import { useState, useEffect, useMemo } from "react";
import { Token } from "@/types";
import TokenTable from "../../components/TokenTable";
import QuickSearch from "../../components/QuickSearch";

const API_ENDPOINT = `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/krc20/tokenlist`;

export default function Dashboard() {
  const [tokenList, setTokenList] = useState<Token[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [prevToken, setPrevToken] = useState<string | null>(null);
  const [nextToken, setNextToken] = useState<string | null>(null);

  const fetchTokenList = ({
    prev,
    next
  }: { prev?: string; next?: string } = {}) => {
    setLoading(true);
    const queryParams = [prev && `prev=${prev}`, next && `next=${next}`].filter(
      Boolean
    );

    const url = queryParams.length
      ? `${API_ENDPOINT}?${queryParams.join("&")}`
      : API_ENDPOINT;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTokenList(
          data.result.map(({ max, lim, minted, pre, ...other }: Token) => ({
            ...other,
            max: Number(max),
            lim: Number(lim),
            minted: Number(minted),
            pre: Number(pre)
          }))
        );
        setPrevToken(data.prev);
        setNextToken(data.next);
      })
      .catch((error) => {
        console.error("Error fetching token list:", error);
        setError("Failed to fetch token list.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTokenList();
  }, []);

  const filteredTokenList = useMemo(
    () =>
      tokenList.filter((token) =>
        token.tick.toLowerCase().includes(search.toLowerCase())
      ),
    [tokenList, search]
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-12 flex items-center">
        <h1 className="text-2xl font-bold">KRC-20 Token List</h1>

        <div className="ml-auto">
          <QuickSearch
            placeholder="Search by ticker"
            value={search}
            onChange={setSearch}
          />
        </div>
      </div>
      <div className="flex justify-between my-4">
        <button
          onClick={() => prevToken && fetchTokenList({ prev: prevToken })}
          disabled={!prevToken || loading}
          className="inline-flex items-center gap-x-2 rounded-md bg-gray-300 dark:bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Previous
        </button>
        <button
          onClick={() => nextToken && fetchTokenList({ next: nextToken })}
          disabled={!nextToken || loading}
          className="inline-flex items-center gap-x-2 rounded-md bg-gray-300 dark:bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 h-[80vh]">
            <TokenTable
              tokenList={filteredTokenList}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
