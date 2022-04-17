declare namespace ClientRemoteSignal {
	export interface Connection {
		Connected: boolean;
		Disconnect(): void;
	}
}

interface ClientRemoteSignal<T extends Callback = Callback> {
	Fire(...args: Parameters<T>): void;
	Wait(): LuaTuple<Parameters<T>>;
	Connect(handler: T): ClientRemoteSignal.Connection;
	Destroy(): void;
}

interface ClientRemoteSignalConstructor {
	new <T extends Callback>(remoteEvent: RemoteEvent<T>): ClientRemoteSignal<T>;
	Is(object: unknown): object is ClientRemoteSignal;
}

declare const ClientRemoteSignal: ClientRemoteSignalConstructor;

export = ClientRemoteSignal;
