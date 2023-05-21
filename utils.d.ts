export declare type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

export declare type Nullable<T> = T | null

export declare type Arrayable<T> = T | T[]

export declare type Awaitable<T> = Promise<T> | T

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