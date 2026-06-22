import { create } from "zustand";

type LayoutStore = {
  isOpen: boolean;

  toggle: () => void;

  close: () => void;
};

export const useLayoutStore = create<LayoutStore>((set) => ({
  isOpen: false,

  toggle: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),

  close: () =>
    set({
      isOpen: false,
    }),
}));
