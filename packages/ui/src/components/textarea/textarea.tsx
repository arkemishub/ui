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

"use client";

import { TextAreaProps } from "./textarea.types";
import { cn } from "../../lib/utils";
import sharedClassNames from "../../shared/classNames";

const classNames = {
  textarea: cn(sharedClassNames.inputContainer, "py-2", "textarea"),
  label: cn(sharedClassNames.label, "mb-2", "textarea__label"),
};

function Textarea({ className, label, ...props }: TextAreaProps) {
  return (
    <>
      <div className={classNames.label}>
        {label && (
          <label data-testid="arke-textarea-label" htmlFor={props.name}>
            {label}
          </label>
        )}
      </div>
      <textarea
        data-testid="arke-textarea"
        className={cn(classNames.textarea, className)}
        {...props}
      ></textarea>
    </>
  );
}

export default Textarea;
