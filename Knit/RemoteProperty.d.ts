import Signal from "./Signal";
interface RemoteProperty<T> {
	Set(value: T): void;
    SetTop(value: T): void;
    SetFilter(predicate: (player: Player, value: T) => boolean, value: T): void;
    SetFor(player: Player, value: T): void;
    ClearFor(player: Player): void;
	Get(): T;
    GetFor(player: Player): T;
	Destroy(): void;
	readonly Changed: Signal<(value: T) => void>;
}

interface RemotePropertyConstructor {
	new <T>(value: T): RemoteProperty<T>;
	readonly Is: (object: unknown) => object is RemoteProperty<unknown>;
}

declare const RemoteProperty: RemotePropertyConstructor;

export = RemoteProperty;