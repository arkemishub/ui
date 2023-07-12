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
import { useRef, useState } from "react";

function useContainerRect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerRect, setContainerRect] = useState<DOMRect | undefined>(
    undefined
  );

  function getPosition() {
    if (containerRect) {
      const viewportHeight = window.innerHeight;
      const top = containerRect.y;
      const inputHeight = containerRect.height + 4;
      const isOutsideViewport = top + 220 > viewportHeight;
      return {
        top: !isOutsideViewport ? top + inputHeight : top - 236,
        left: containerRect.left,
        width: containerRect.width,
      };
    }
  }
  function setPosition() {
    setContainerRect(containerRef.current?.getBoundingClientRect());
  }

  return {
    containerRef,
    containerRect,
    setPosition,
    getPosition,
  };
}

export default useContainerRect;
