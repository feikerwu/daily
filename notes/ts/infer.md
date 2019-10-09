### infer

infer 关键词是定义一个未确定的类型，用在条件判定里面，比如可以获取到一个函数的返回类型

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```
