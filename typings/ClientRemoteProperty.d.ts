import Signal from "./Signal";

interface ClientRemoteProperty<T> {
	Get(): T;
	Destroy(): void;
	IsReady(): boolean;
	OnReady(): Promise<T>
	Observe(observer: (value: T) => unknown): Signal.Connection;
	readonly Changed: Signal<(value: T) => void>;
}

interface ClientRemotePropertyConstructor {
	new <T>(valueObject: RemoteEvent): ClientRemoteProperty<T>;
}

declare const ClientRemoteProperty: ClientRemotePropertyConstructor;

export = ClientRemoteProperty;
