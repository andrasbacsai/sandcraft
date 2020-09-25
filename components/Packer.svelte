<script>
  import { onMount } from "svelte";
  import Backend from "./Packs/Backend/Backend";
  import Frontend from "./Packs/Frontend/Frontend";
  import { packChoice, typing } from "../stores";
  import Typed from "typed.js";
  onMount(() => {
    const options = {
      strings: [
        "Hello, my friend.<br>^2000So^300.^300.^300.^2000 I heard you would like to try out this crafting thing?<br>^2000 Then, stay awhile and listen^300.^300.^300.^2000 <br><br>You must choose a path! <br>^1000 There is no return.^2000 Choose wisely!"
      ],
      typeSpeed: 20,
      showCursor: false
    };
    typing.set(new Typed("#help", options));
  });

  function choose(name) {
    packChoice.set(name);
    const options = {
      strings: [
        "Backend, ha? ^1000 Interesting^300.^300.^300. ^1000 <b>You are brave!</b> ^1000 <br><br>Do you REALLY know what it means? ^2000 <br><br>",
        "It means, you are about to create a docker container which we call SSE (Server Side Evaluation).^2000 <br>Your application will run inside that container! ^2000 <br><br>Choose your runtime!"
      ],
      typeSpeed: 20,
      showCursor: false
    };
    $typing.destroy();
    typing.set(new Typed("#help", options));
  }

  const packs = [
    { name: "Backend", disabled: false },
    { name: "Frontend", disabled: true }
  ];
</script>
<style>
  .bigtitle {
    font-size: 2rem !important;
  }
  .black-bg {
    background-color: black !important;
  }
  .h-128 {
    height: 32rem !important;
  }
</style>
<div class="flex flex-col px-10">
<div class="nes-container with-title is-centered is-dark black-bg h-128 ">
  <p class="title bigtitle black-bg underline">SandCraft</p>
  <p class=" text-center py-10" id="help"/>
</div>
<div class="flex flex-col items-center justify-center flex-grow ">
<div class="flex flex-row justify-center space-x-4 pt-10">
{#each packs as pack}
  <button 
  disabled={pack.disabled}
  on:click={() => choose(pack.name)} 
  class="p-4 w-48 nes-btn font-bold"
  class:bg-green-700={$packChoice === pack.name}
  class:is-disabled={pack.disabled}
  class:is-success={$packChoice === pack.name}>{pack.name}</button>
{/each}
</div>

{#if $packChoice === 'Backend'}
  <Backend/>
{:else if $packChoice === 'Frontend' }
  <Frontend/>
{/if}
</div>
</div>
