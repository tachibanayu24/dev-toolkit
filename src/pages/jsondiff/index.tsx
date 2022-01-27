import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
// import "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
import ReactDiffViewer from "react-diff-viewer";

const JSONDiff: NextPage = () => {
  // const jQueryScript = document.createElement("script");

  // jQueryScript.setAttribute(
  //   "src",
  //   "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
  // );

  console.log(html);
  const handleClickSample = () => {
    jdd.loadSampleData();
  };

  const handleClickCompare = () => {
    console.log("compare");
    jdd.compare();
  };

  return (
    <>
      <Head>
        <title>
          JSON Diff Checker | DevToolkit - Free Online Developer Tools
        </title>
        <meta
          name="description"
          content="Get the Diff of the two JSON data. Point out which parts have been changed."
        />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: html }} />
      {/*
      <div className="flex justify-center items-center">
        <div className="p-4 bg-white/10 rounded-md shadow-md w-[40%]">
          <textarea
            className="w-full p-2 text-gray-900 rounded-md shadow-md"
            rows={25}
            spellCheck="false"
            id="textarealeft"
            placeholder="Enter JSON to compare, enter an URL to JSON"
            tabIndex="1"
          ></textarea>
        </div>

        <div className="center m-4 text-center">
          <button
            className="bg-green-500 px-4 py-2 rounded-full shadow-lg font-bold mb-2"
            id="compare"
            tabIndex="3"
            onClick={handleClickCompare}
          >
            Compare
          </button>
          <div className="throbber-loader"></div>
          <span>
            or try some
            <div
              onClick={handleClickSample}
              className="text-red-400 font-bold block leading-3 cursor-pointer"
            >
              sample data
            </div>
          </span>
        </div>

        <div className="p-4 bg-white/10 rounded-md shadow-md w-[40%]">
          <textarea
            className="w-full p-2 text-gray-900 rounded-md shadow-md"
            rows={25}
            spellCheck="false"
            id="textarearight"
            placeholder="Enter JSON to compare, enter an URL to JSON"
            tabIndex="2"
          ></textarea>
        </div>
      </div>

      <div className="text-center mt-16 text-sm font-light">
        It uses part of the source code of{" "}
        <a
          href="https://github.com/zgrossbart/jdd"
          className="text-red-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          jdd
        </a>{" "}
        <br />
        Big thanks the development team
      </div>

      <div className="diffcontainer">
        <div id="report"></div>
        <pre id="out" className="left" className="codeBlock"></pre>
        <pre id="out2" className="right" className="codeBlock"></pre>
        <ul id="toolbar" className="toolbar"></ul>
      </div> */}
    </>
  );
};

export default JSONDiff;
