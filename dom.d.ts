export declare type HTMLElementCustomized<T> = HTMLElement & T

export interface ChangeEvent extends Event {
  target: HTMLInputElement
}

export type TargetContext = '_self' | '_blank'

export enum ScreenEnum {
  XS = 480,
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
  XXL = 1600,
}