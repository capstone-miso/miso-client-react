import { atom } from "recoil";

export const SelectedPath = atom<string>({
    key: 'SelectedPath',
    default: "/restaurant-map"
  });