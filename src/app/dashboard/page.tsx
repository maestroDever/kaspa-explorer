"use client";

import { useState, useEffect } from "react";
import { Token } from "@/types";
import TokenTable from "../components/TokenTable";

export default function Dashboard() {
  const [tokenList, setTokenList] = useState<Token[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://tn10api.kasplex.org/v1/krc20/tokenlist")
      .then((response) => response.json())
      .then((data) => {
        setTokenList(
          data.result.map(({ max, lim, minted, pre, ...other }: Token) => ({
            ...other,
            max: Number(max),
            lim: Number(lim),
            minted: Number(minted),
            pre: Number(pre),
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching token list:", error);
        setError("Failed to fetch token list.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-12">
        <h1 className="text-2xl font-bold">KRC-20 Token List</h1>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 h-[80vh]">
            <TokenTable tokenList={tokenList} />
          </div>
        </div>
      </div>
    </div>
  );
}
