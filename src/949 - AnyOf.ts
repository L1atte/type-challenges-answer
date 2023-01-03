// 利用递归进行数组遍历

type Falsy = undefined | null | [] | { [P in PropertyKey]: never } | '' | 0 | false
type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest] ? First extends Falsy ? AnyOf<Rest> : true : false