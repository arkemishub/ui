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

import React, { useCallback, useEffect, useState } from "react";

type PropsTableProps = {
  displayName: string;
};

function useDocgen(displayName: string) {
  const [props, setProps] = useState(null);

  useEffect(() => {
    let resolved = false;

    // @ts-ignore
    import(`@generated/docgen.json`)
      .then((mod) => {
        const props = Object.values(mod).find(
          (m) => m?.[0]?.displayName === displayName
        )?.[0]?.props;

        if (!resolved) {
          resolved = true;
          setProps(props);
        }
      })
      .catch(console.error);

    return () => {
      resolved = true;
    };
  }, [displayName]);

  return props;
}

const PropsTable: React.FC<PropsTableProps> = ({ displayName }) => {
  const [dir, setDir] = React.useState("desc");
  const props: any = useDocgen(displayName);

  console.log(props);

  return (
    <table className="table">
      <thead>
        <tr>
          <th
            onClick={useCallback(() => {
              setDir((p) => (p === "desc" ? "asc" : "desc"));
            }, [])}
          >
            Name
          </th>
          <th>Required</th>
          <th>Type</th>
          <th>Default Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props || {})
          .sort((a, b) => {
            const desc = dir === "desc";
            if (a < b) {
              return desc ? -1 : 1;
            }
            if (a > b) {
              return desc ? 1 : -1;
            }
            return 0;
          })
          .map((key) => {
            return (
              <tr key={key}>
                <td>
                  <code>{key}</code>
                </td>
                <td>{props[key].required || "No"}</td>
                <td>
                  <code>
                    {props[key]?.tsType?.raw ?? props[key]?.tsType?.name}
                  </code>
                </td>
                <td>{props[key].defaultValue?.value}</td>
                <td>
                  {/* <Markdown source={props[key].description} /> */}
                  {props[key].description}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default PropsTable;
