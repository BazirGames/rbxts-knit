declare global {
	interface KnitServices {}
	interface KnitControllers {}
	interface KnitSettings {
		ServicePromises: boolean
	}
}

/**
 * A service is a singleton object that serves a specific purpose on the server.
 */
export type Service<S, C> = S & {
	/**
	 * The name of the service.
	 */
	readonly Name: string;

	/**
	 * A [ServiceClient](https://atollstudios.github.io/Knit/knitapi/#serviceclient) table that contains client-exposed
	 * methods and events.
	 */
	readonly Client: C;

	/**
	 * An optional method that is called during the KnitInit lifecycle stage
	 * (see [Execution Model](https://atollstudios.github.io/Knit/executionmodel/) for more info).
	 */
	KnitInit(): void;

	/**
	 * An optional method that is called during the KnitStart lifecycle stage
	 * (see [Execution Model](https://atollstudios.github.io/Knit/executionmodel/) for more info).
	 */
	KnitStart(): void;
};

export type Controller<T> = T & {
	/**
	 * The name of the controller.
	 */
	readonly Name: string;

	/**
	 * An optional method that is called during the KnitInit lifecycle stage
	 * (see [Execution Model](https://atollstudios.github.io/Knit/executionmodel/) for more info).
	 */
	KnitInit(): void;

	/**
	 * An optional method that is called during the KnitStart lifecycle stage
	 * (see [Execution Model](https://atollstudios.github.io/Knit/executionmodel/) for more info).
	 */
	KnitStart(): void;
};

export { default as KnitClient } from "./KnitClient";
export { default as KnitServer } from "./KnitServer";
