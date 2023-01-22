import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        name: 'Kaz',
        age: 27
    }
});

export default app;
