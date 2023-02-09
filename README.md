# type-challenges-answer



## 对于 Object 中，如果需要对 key 使用条件语句（三元表达式，即 extends...），需要使用重映射`as`来搭配使用

举例

```typescript
type PickByType<T, U> = {
	// 通过 as 重映射 key
  [P in keyof T as T[P] extends U ? P : never] : T[P];
}
```

