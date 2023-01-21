// 通过 as 重映射 key
type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never] : T[P];
}