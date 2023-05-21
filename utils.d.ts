export type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

export type Nullable<T> = T | null

export type Arrayable<T> = T | T[]

export type Promiseable<T> = T | Promise<T>

export type Awaitable<T> = Promise<T> | T

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends (infer U)[]
  ? ReadonlyArray<DeepReadonlyObject<U>>
  : T[P] extends object
  ? DeepReadonlyObject<T[P]>
  : T[P]
}

export type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}

export type Recordable<T = any> = Record<string, T>
export type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}

export type ObjectKey<T> = T[keyof T]

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

export type TimeoutHandle = ReturnType<typeof setTimeout>

export type IntervalHandle = ReturnType<typeof setInterval>

export type AnyFunction = (...args: any) => any

export type AsyncFunciton<T extends AnyFunction> = (
  ...args: Parameters<T>
) => Awaited<ReturnType<T>>

export type AnyAsyncFunction = AsyncFunciton<AnyFunction>

export type PartialPick<T, K extends keyof T> = Partial<
  Pick<T, K>
>

export type RequiredPick<T, K extends keyof T> = Required<
  Pick<T, K>
>

export type ReadonlyPick<T, K extends keyof T> = Readonly<
  Pick<T, K>
>

export type UnPromise<T> = T extends Promise<infer P>
  ? P
  : T

export type UnPromiseReturnType<T extends AnyFunction> =
  UnPromise<ReturnType<T>>