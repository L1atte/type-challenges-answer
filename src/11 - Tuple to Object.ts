type TupleToObject<T> = T extends readonly PropertyKey[]
  ? {
      [key in T[number]]: key;
    }
  : never;
