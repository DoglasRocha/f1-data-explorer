<script>
    import Layout from "./lib/components/layout.svelte";
    import Index from "./routes/index.svelte";
    import Year from "./routes/year/year.svelte";
    import Team from "./routes/team/team.svelte";
    import Driver from "./routes/driver/driver.svelte";
    import Round from "./routes/year/round/round.svelte";

    let state = "index";
    let dataObject = {};

    const changeState = (newState) => {
        if (newState === "year") {
            state = state === "year" ? "season" : "year";
        }
        else
            state = newState;
    };
    const changeDataObject = (key, value) => dataObject[key] = value;
    const getDataObject = () => dataObject;
</script>

<Layout {changeState} {changeDataObject}>
    {#if state === "index"}
        <Index/>
    {:else if state === "year"}
        <Year {getDataObject} {changeState} {changeDataObject}/>
    {:else if state === "season"}
        <Year {getDataObject} {changeState} {changeDataObject}/>
    {:else if state === "team"}
        <Team {getDataObject} {changeState} {changeDataObject}/>
    {:else if state === "driver"}
        <Driver {getDataObject} {changeState} {changeDataObject}/>
    {:else if state === "round"}
        <Round {getDataObject} {changeState} {changeDataObject}/>
    {/if}
</Layout>

<style>


</style>
