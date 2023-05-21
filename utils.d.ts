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
