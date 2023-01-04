// Implement a type IsNever, which takes input type T. If the type of resolves to never, return true, otherwise false.
type IsNever<T> = [T] extends [never] ? true : false;
