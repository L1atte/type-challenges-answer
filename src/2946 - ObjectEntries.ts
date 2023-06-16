type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>;
type ObjectEntries<T> = RemoveUndefined<
  {
    [K in keyof T]: {} extends Pick<T, K>
      ? [K, RemoveUndefined<T[K]>]
      : [K, T[K]];
  }[keyof T]
>;
