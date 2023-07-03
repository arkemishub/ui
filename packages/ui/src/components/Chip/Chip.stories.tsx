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
import { Chip } from "./index";
import { IChipProps } from "./Chip.types";
import { Button } from "../Button";

export default {
  title: "Chip",
  component: Chip,
  argTypes: {
    disabled: {
      defaultValue: false,
    },
  },
};

export const Default = (args: Partial<IChipProps>) => {
  delete args.onDelete;
  return (
    <div className="flex">
      <Chip {...args}>Chip</Chip>
      <Chip {...args} color="primary">
        Chip primary
      </Chip>
      <Chip {...args} color="secondary">
        Chip secondary
      </Chip>
    </div>
  );
};

export const Disabled = (args: Partial<IChipProps>) => {
  delete args.onDelete;
  return (
    <div className="flex">
      <Chip {...args} disabled>
        Disabled
      </Chip>
      <Chip {...args} color="primary" disabled>
        Disabled
      </Chip>
      <Chip {...args} color="secondary" disabled>
        Disabled
      </Chip>
    </div>
  );
};

export const Deletable = (args: Partial<IChipProps>) => {
  delete args.onDelete;
  return (
    <div className="flex">
      <Chip {...args} onDelete={() => alert("delete")}>
        Deletable
      </Chip>
      <Chip {...args} color="primary" onDelete={() => alert("delete")}>
        Disabled
      </Chip>
      <Chip {...args} color="secondary" onDelete={() => alert("delete")}>
        Disabled
      </Chip>
    </div>
  );
};

export const Icons = (args: Partial<IChipProps>) => {
  delete args.onDelete;
  const Avatar = () => (
    <img
      alt="avatar"
      className="max-w-6 max-h-6 rounded-full"
      src="https://i.pravatar.cc/300"
    />
  );

  const DeleteButton = () => (
    <Button className="p-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Button>
  );

  return (
    <div className="flex">
      <Chip onClick={() => null} startAdornment={<span>M</span>} {...args}>
        Clickable
      </Chip>
      <Chip
        onClick={() => null}
        startAdornment={<Avatar />}
        endAdornment={<DeleteButton />}
        {...args}
      >
        Clickable
      </Chip>
      <Chip
        onClick={() => null}
        startAdornment={<Avatar />}
        endAdornment={<DeleteButton />}
        color="primary"
        {...args}
      >
        Clickable
      </Chip>
      <Chip
        onClick={() => null}
        startAdornment={<Avatar />}
        endAdornment={<DeleteButton />}
        color="secondary"
        {...args}
      >
        Clickable
      </Chip>
    </div>
  );
};
