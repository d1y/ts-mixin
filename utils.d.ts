export declare type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

/**
* @deprecated stop to use null
* @see {@link https://github.com/sindresorhus/meta/discussions/7}
*/
export declare type Nullable<T> = T | null

export declare type Arrayable<T> = T | T[]

export declare type Awaitable<T> = Promise<T> | T