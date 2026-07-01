"use client";

import { create } from "zustand";

export type Workspace = {
  id: string;
  name: string;
};

type WorkspaceState = {
  workspaces: Workspace[];
  currentWorkspace: Workspace;

  switchWorkspace: (id: string) => void;
};

const defaultWorkspaces: Workspace[] = [
  {
    id: "1",
    name: "Personal",
  },
  {
    id: "2",
    name: "AppFlow",
  },
  {
    id: "3",
    name: "FinTech",
  },
];

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  workspaces: defaultWorkspaces,

  currentWorkspace: defaultWorkspaces[0],

  switchWorkspace: (id) =>
    set((state) => ({
      currentWorkspace:
        state.workspaces.find((w) => w.id === id) ?? state.currentWorkspace,
    })),
}));
