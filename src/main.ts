import App from './App.svelte';
import { TestClass } from './Test';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

console.info("Import typescript class from another Typescript file: %o", new TestClass());

export default app;