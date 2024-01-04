import { create } from "zustand";

import data from "../data.json";

interface Props {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useProduct = create<Props>((set) => ({
  count: 1,

  increment: () => set((store) => ({ count: store.count + 1 })),
  reset: () => set((store) => ({ count: store.count !== 1 ? 1 : 1 })),
  decrement: () =>
    set((store) => ({ count: (store.count !== 1 && store.count - 1) || 1 })),
}));

export default useProduct;

interface Items {
  checkOut: typeof data.products;
  append: (item: (typeof data.products)[0]) => void;
  remove: (product: (typeof data.products)[0]) => void;
  reset: () => void;
}

export const useCheckout = create<Items>((set) => ({
  checkOut: [],
  remove: (product: (typeof data.products)[0]) =>
    set((store) => ({
      checkOut: [
        ...store.checkOut.filter((item) => item !== product),
        ...store.checkOut.filter((item) => item == product).slice(1),
      ],
    })),
  reset: () => set({ checkOut: [] }),
  append: (item: (typeof data.products)[0]) =>
    set((store) => ({ checkOut: [...store.checkOut, item] })),
}));
