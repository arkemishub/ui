/**
 * Copyright 2023 Arkemis S.r.l.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Editor, { useMonaco } from "@monaco-editor/react";
import { IJsonProps } from "./Json.types";
import { useEffect, useRef } from "react";
import Color from "color";
import { twMerge } from "tailwind-merge";

const getCSSVariable = (variable: string) => {
  const [r, g, b] = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim()
    .split(" ");

  return Color(`rgb(${r}, ${g}, ${b})`).hex();
};

function Json({
  height,
  width,
  value,
  onChange,
  label,
  readOnly = false,
  className,
}: IJsonProps) {
  const monaco = useMonaco();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("ARKE", {
        base: Color(getCSSVariable("--background")).isDark() ? "vs-dark" : "vs",
        inherit: true,
        rules: [],
        colors: {
          "editor.foreground": getCSSVariable("--background-contrast"),
          "editor.background": getCSSVariable("--background"),
          "editor.selectionBackground": "#00000019",
          "editor.lineHighlightBackground": "#00000012",
          "editorCursor.foreground": getCSSVariable("--background-contrast"),
          "editorWhitespace.foreground": getCSSVariable("--neutral"),
        },
      });
      monaco.editor.setTheme("ARKE");
    }
  }, [monaco]);

  return (
    <div data-testid="arke-json">
      {label && <label className="json__label">{label}</label>}
      <div>
        <Editor
          className={twMerge("input json", className)}
          value={value}
          height={height}
          defaultLanguage="json"
          theme="ARKE"
          width={width}
          onChange={(val) => onChange?.(val ?? "")}
          onMount={async (editor, _monaco) => {
            if (ref.current) {
              const relayout = ([e]: any) => {
                editor.layout({
                  width: e.borderBoxSize[0].inlineSize,
                  height: e.borderBoxSize[0].blockSize,
                });
              };
              const resizeObserver = new ResizeObserver(relayout);
              resizeObserver.observe(ref.current);
            }
          }}
          options={{
            fontSize: 14,
            wordWrap: "on",
            tabSize: 2,
            minimap: {
              enabled: false,
            },
            smoothScrolling: true,
            cursorSmoothCaretAnimation: "on",
            contextmenu: false,
            automaticLayout: true,
            readOnly,
            lineNumbers: readOnly ? "off" : "on",
          }}
        />
      </div>
    </div>
  );
}

export default Json;
