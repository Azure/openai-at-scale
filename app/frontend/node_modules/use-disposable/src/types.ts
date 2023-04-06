/**
 * A factory that returns the disposable instance and it's dispose function
 */
export type DisposableFactory<TInstance> = () => [TInstance, () => void];
