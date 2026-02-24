import type { KVStore } from "../ports/KVStore";
import { LocalStorageKV } from "../adapters/LocalStorageKV";

type Tokens = {
  kv: KVStore;
};

const container: Tokens = {
  kv: new LocalStorageKV(),
};

export function useContainer() {
  return container;
}
