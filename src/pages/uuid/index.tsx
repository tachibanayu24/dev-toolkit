import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { v1, v4 } from "uuid";

import { useClipboard } from "@/hooks/useClipboard";

const Uuid: NextPage = () => {
  const { handleCopy } = useClipboard();

  const [value, setValue] = useState(12);
  const [version, setVersion] = useState<string>("v4");
  const [ids, setIds] = useState<string[]>([]);
  const [copiedIds, setCopiedIds] = useState<string[]>([]);

  const handleChange = (value: number) => {
    if (value < 0) {
      setValue(0);
    } else if (value > 1000) {
      setValue(999);
    } else {
      setValue(value);
    }
  };

  const handleGenerateUUID = useCallback(() => {
    setIds([]);
    setCopiedIds([]);

    for (let i = 0; i < value; i++) {
      switch (version) {
        case "v1":
          setIds((prev) => [...prev, v1()]);
          break;
        case "v4":
          setIds((prev) => [...prev, v4()]);
          break;
        default:
          throw new Error("An unexpected version was specified.");
      }
    }
  }, [value, version]);

  const handleCopyClick = useCallback(
    (id: string) => {
      handleCopy(id);
      setCopiedIds((prev) => [...prev, id]);
    },
    [handleCopy]
  );

  const handleBulkCopyClick = useCallback(() => {
    handleCopy(ids.join(","));
    setCopiedIds(ids);
  }, [handleCopy, ids]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleGenerateUUID();
    },
    [handleGenerateUUID]
  );

  useEffect(() => {
    handleGenerateUUID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>UUID Generator | DevToolkit - Free Online Developer Tools</title>
        <meta
          name="description"
          content="Generate and copy an arbitrary number of UUIDs.V1 and v4 are supported. You can also generate a large number of UUIDs at once and copy them in a batch."
        />
      </Head>

      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-baseline">
            <span className="text-xl font-bold px-2">Generate</span>
            <input
              autoFocus
              type="number"
              value={value}
              className="text-xl text-gray-900 px-3 py-1 rounded-sm shadow-md w-[100px] mr-4"
              onChange={(e) => handleChange(Number(e.target.value))}
            />
            <select
              name="version"
              className="mx-2 h-full text-xl text-gray-900 p-1 rounded-sm shadow-md"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            >
              <option value="v1">v1</option>
              <option value="v4">v4</option>
            </select>

            <span className="text-xl font-bold px-2">based UUIDs</span>
          </div>

          <div className="flex justify-center">
            <button className="mt-8 bg-green-500 py-3 px-6 rounded-full font-bold shadow-md hover:bg-green-600 active:bg-green-700">
              Generate
            </button>
          </div>
        </form>

        {ids.length > 0 && (
          <>
            <p
              className="mt-8 p-2 font-bold text-red-400 cursor-pointer"
              onClick={handleBulkCopyClick}
            >
              Copy All
            </p>

            <div className="mt-4 flex flex-wrap justify-between w-full">
              {ids.map((id) => (
                <div
                  key={id}
                  className={`min-w-[330px] my-2 cursor-pointer rounded-full bg-slate-500 flex items-center`}
                  onClick={() => handleCopyClick(id)}
                >
                  <button
                    className={`text-xs rounded-full p-3 shadow-lg cursor-pointer select-none mr-1 ${
                      copiedIds.includes(id) ? "bg-green-400" : "bg-slate-600"
                    }`}
                  >
                    {copiedIds.includes(id) ? "✅" : "🔗"}
                  </button>
                  <span
                    className={`text-sm ${
                      copiedIds.includes(id) ? "opacity-70" : ""
                    }`}
                  >
                    {id}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Uuid;
