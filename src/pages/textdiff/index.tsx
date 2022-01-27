import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Prism, { languages as langOrigin } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import ReactDiffViewer from "react-diff-viewer";

const TextDiff: NextPage = () => {
  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [isShowCompare, setIsShowCompare] = useState(false);
  const [language, setLanguage] = useState<string>("javascript");

  const handleClickCompare = () => {
    if (oldValue && newValue) {
      setIsShowCompare(true);
      Prism.highlightAll();
    } else {
      setIsError(true);
    }
  };

  const handleSetSample = () => {
    setOldValue(SAMPLE_OLD_JSON);
    setNewValue(SAMPLE_NEW_JSON);
  };

  const handleClickAgain = () => {
    setIsShowCompare(false);
  };

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 1000);
    }
  }, [isError]);

  return (
    <>
      <Head>
        <title>
          TextDiff Diff Checker | DevToolkit - Free Online Developer Tools
        </title>
        <meta
          name="description"
          content="It detects differences in the code or text and shows where changes have been made by highlighting."
        />
      </Head>
      <div className="flex flex-col items-center justify-center m-8">
        {isShowCompare && (
          <button
            className="bg-green-500 px-10 py-2 rounded-full shadow-lg font-bold mb-4"
            id="compare"
            onClick={handleClickAgain}
          >
            Again
          </button>
        )}

        <select
          name="language"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          className="p-2 rounded-sm shadow-md text-gray-900"
        >
          {Object.keys(langOrigin).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div className="text-sm">
        {!isShowCompare ? (
          <div className="flex gap-4 items-center h-full">
            <textarea
              className="w-full p-2 bg-slate-500 text-gray-100 rounded-md shadow-md h-full"
              spellCheck="false"
              rows={25}
              value={oldValue}
              onChange={(e) => setOldValue(e.target.value)}
              placeholder="Enter any code to compare"
            />
            <div className="center m-4 text-center">
              <button
                className={`bg-green-500 px-4 py-2 rounded-full shadow-lg font-bold mb-2 ${
                  isError && "animate-ohNo"
                }`}
                id="compare"
                onClick={handleClickCompare}
              >
                Compare
              </button>
              <p
                className="text-red-400 cursor-pointer"
                onClick={handleSetSample}
              >
                or set sample
              </p>
            </div>
            <textarea
              className="w-full p-2 bg-slate-500 text-gray-100 rounded-md shadow-md h-full"
              spellCheck="false"
              rows={25}
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              placeholder="Enter any code to "
            />
          </div>
        ) : (
          <div className="overflow-scroll">
            <ReactDiffViewer
              useDarkTheme
              oldValue={oldValue}
              newValue={newValue}
              splitView
              renderContent={(str: string) => (
                <pre
                  style={{ display: "inline" }}
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                      str,
                      Prism.languages[language],
                      language
                    ),
                  }}
                />
              )}
            />
          </div>
        )}
      </div>
    </>
  );
};

const SAMPLE_OLD_JSON = `class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}`;

const SAMPLE_NEW_JSON = `class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(11).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSample(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: Y';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSample(0)}
          {this.renderSample(1)}
          {this.renderSample(2)}
        </div>
        <div className="board-row">
          {this.renderSample(3)}
          {this.renderSample(4)}
          {this.renderSample(5)}
        </div>
        <div className="board-row">
          {this.renderSample(6)}
          {this.renderSample(7)}
          {this.renderSample(8)}
        </div>
      </div>
    );
  }
}`;

export default TextDiff;
