type Merge<T> = {
  [K in keyof T]: T[K];
}

type PartialByKeys<T, K = {}> = Merge<{
  [P in keyof T as P extends K ? P : never]?: T[P];
} & {
  [P in keyof T as P extends K ? never: P]: T[P]
}>;