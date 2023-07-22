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

import { PropsWithChildren, ReactNode } from "react";

interface AccordionProps
  extends PropsWithChildren<{
    expanded: boolean;
    disabled?: boolean;
    onChange?: () => void;
    className?: string;
  }> {}

interface AccordionDetailProps {
  expanded?: boolean;
  children: ReactNode;
  expandIcon?: ReactNode;
  className?: string;
}

interface AccordionSummaryProps extends Omit<AccordionProps, "expanded"> {
  index?: number;
  expandIcon: ReactNode;
  expanded?: boolean;
  className?: string;
}

export type { AccordionProps, AccordionDetailProps, AccordionSummaryProps };
