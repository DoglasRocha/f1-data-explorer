<script>
    import Layout from "./lib/components/layout.svelte";
    import Index from "./routes/index.svelte"

    let state = "index";
    let dataObject = {};

    const changeState = (newState) => {state = newState};
    const changeDataObject = (key, value) => dataObject[key] = value;
</script>

<Layout {changeState} {changeDataObject}>
    {#if state === "index"}
        <Index/>
    {/if}
</Layout>

<style>


</style>
