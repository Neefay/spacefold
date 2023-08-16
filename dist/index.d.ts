type Arr = readonly any[];
type Callback<T extends Arr> = (...args: [...T]) => void | Promise<void>;
interface Subscriber {
    unsubscribe: () => void;
}
interface Pub<T extends Arr = any> {
    id: symbol;
    listeners: Set<Callback<T>>;
    subscribe(cb: Callback<T>): Subscriber;
    send(...args: [...T]): void;
}
declare function pub(): Pub;
declare function pub<T>(): Pub<[T]>;
declare function pub<T1, T2>(): Pub<[T1, T2]>;
declare function pub<T1, T2, T3>(): Pub<[T1, T2, T3]>;
declare function pub<T1, T2, T3, T4>(): Pub<[T1, T2, T3, T4]>;
interface SubOpts {
    register: Pub[];
}
type Sub = ReturnType<typeof sub>;
declare function sub(opts: SubOpts): {
    id: symbol;
    on: <T extends Arr>(pub: Pub<T>, cb: Callback<T>) => void;
};
declare function useSub(sub: Sub): {
    on: <T extends Arr>(pub: Pub<T>, cb: Callback<T>) => void;
};

export { Pub, Sub, Subscriber, pub, sub, useSub };
