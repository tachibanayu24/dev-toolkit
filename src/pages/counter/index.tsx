import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Counter: NextPage = () => {
  const [input, setInput] = useState("");
  const [chars, setChars] = useState(0);
  const [charsWithoutSpaces, setCharsWithoutSpaces] = useState(0);
  const [rows, setRows] = useState(0);

  useEffect(() => {
    setChars(input.length);
    setCharsWithoutSpaces(input.replace(/(\r\n|\n|\r|\s)/gm, "").length);
    setRows(input.split(/\r\n|\r|\n/).length);
  }, [input]);

  const giveComma = (num: number) =>
    num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <Head>
        <title>
          Characters counter | DevToolkit - Free Online Developer Tools
        </title>
        <meta
          name="description"
          content="Counts the number of characters in the inputted text.The number of characters, excluding spaces and line feeds, and the number of lines can be displayed immediately."
        />
      </Head>

      <div className="flex justify-center">
        <div className="w-[60%] ">
          <div className="gap-6 pb-4 text-center">
            <p className="inline mr-4 font-bold">
              Characters
              <span className="pl-1 text-green-500 text-2xl">
                {giveComma(chars)}
              </span>
            </p>
            <p className="inline mr-4 font-bold">
              Characters excluding spaces
              <span className="pl-1 text-green-500 text-2xl">
                {giveComma(charsWithoutSpaces)}
              </span>
            </p>
            <p className="inline mr-4 font-bold">
              Rows
              <span className="pl-1 text-green-500 text-2xl">
                {giveComma(rows)}
              </span>
            </p>
          </div>
          <div className="flex justify-center">
            <textarea
              autoFocus
              rows={20}
              placeholder="Type, paste, cut text here..."
              className="w-full rounded-md shadow-lg text-gray-900 p-2 bg-slate-100"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
