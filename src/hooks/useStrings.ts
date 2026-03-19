import strings from "../appStrings.json";

export type AppStrings = typeof strings;

/**
 * Returns the full appStrings object (or a nested section via key).
 * Usage:
 *   const s = useStrings();          // whole object
 *   const s = useStrings("hero");    // strings.hero only
 */
export function useStrings(): AppStrings;
export function useStrings<K extends keyof AppStrings>(section: K): AppStrings[K];
export function useStrings<K extends keyof AppStrings>(section?: K) {
  return section ? strings[section] : strings;
}
