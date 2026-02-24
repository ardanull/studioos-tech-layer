import type { KVStore } from "../ports/KVStore";

export class LocalStorageKV implements KVStore {
  async get(key: string) {
    return typeof window === "undefined" ? null : localStorage.getItem(key);
  }
  async set(key: string, value: string) {
    if (typeof window !== "undefined") localStorage.setItem(key, value);
  }
}
