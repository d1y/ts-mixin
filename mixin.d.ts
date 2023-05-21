import { DeepReadonlyObject, Mutable, Nullable } from './utils'

export type IMixinMongoDBObjectID<T> = T & {
  _id: string
}

export type IMixinReactRefObject<T> = {
  readonly current: Nullable<T>
}

export type IMixinReactRefMutableObject<T> = Readonly<Mutable<IMixinReactRefObject<T>>>

export type IMixinVueWPInstance<T> = DeepReadonlyObject<{
  _instance: {
    exposed: T
  }
}>