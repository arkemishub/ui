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

import React from "react";

export default function Chip({ type }: { type?: "variant" }) {
  return (
    <span
      style={{
        borderColor:
          type === "variant"
            ? "var(--ifm-color-primary)"
            : "var(--ifm-color-secondary-dark)",
        borderRadius: "8px",
        borderWidth: "1px",
        borderStyle: "solid",
        fontSize: "12px",
        color:
          type === "variant"
            ? "var(--ifm-color-primary)"
            : "var(--ifm-color-secondary-dark)",
        padding: "4px 8px",
      }}
    >
      {type === "variant" ? "Variant" : "Element"}
    </span>
  );
}
