import { useCallback } from "react";
import debounce from "lodash.debounce";

function useDebouncedFunction<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  return useCallback(debounce(fn, delay), [fn, delay]);
}

export default useDebouncedFunction;
