import { KIFunctionType } from './function';

export type KIEventDataIdType = {
  id: string;
  // eslint-disable-next-line no-unused-vars
  callback: KIEventDataActionType;
};

// eslint-disable-next-line no-unused-vars
export type KIEventDataActionType = (...args: unknown[]) => void;

export type KIEventDataSelectorType = {
  selector: string;
  // eslint-disable-next-line no-unused-vars
  callback: KIEventDataActionType;
};

// eslint-disable-next-line no-unused-vars
export type KIEventDataUnionType<T> = KIFunctionType | T;

export type KIEventArrayType<T> = KIEventDataUnionType<T>[];
