type Ret<T extends CondTuple[], R = undefined> = T extends [] ? R : T extends [infer F, ...infer R] ? [F, ...Ret<R>] : never;
