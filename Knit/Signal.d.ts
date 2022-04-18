declare namespace Signal {
	export interface Connection {
		Disconnect(): void;
		IsConnected(): boolean;
	}
}

interface Signal<T extends Callback = Callback> {
	Fire(...args: Parameters<T>): void;
	FireDeferred(...args: Parameters<T>): void;
	Wait(): LuaTuple<Parameters<T>>;
	Connect(handler: T): Signal.Connection;
	DisconnectAll(): void;
	Destroy(): void;
}

interface SignalConstructor {
	new <T extends Callback = Callback>(): Signal<T>;
	readonly Is: (obj: unknown) => obj is Signal<Callback>;
	readonly Wrap: <T extends Callback>(rbxScriptSignal: RBXScriptSignal<T>) => Signal<T>;
}

declare const Signal: SignalConstructor;
export = Signal;
