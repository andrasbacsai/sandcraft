<script>
  import { onDestroy } from "svelte";
  import React from "./React.svelte";

  import { frontendChoice } from "../../../stores";

  const frontends = [
    { name: "React", disabled: false },
    { name: "Vue", disabled: true },
    { name: "Svelte", disabled: true }
  ];
  onDestroy(() => {
    frontendChoice.set();
  });
</script>

<div class="flex flex-col">
  <div class="flex flex-row justify-center space-x-4">
    {#each frontends as frontend}
      <button 
      disabled={frontend.disabled}
      on:click={() => frontendChoice.set(frontend.name)} 
      class="p-4 nes-btn font-bold"
      class:bg-green-700={$frontendChoice === frontend.name}
      class:is-disabled={frontend.disabled}
      class:is-success={$frontendChoice === frontend.name}>{frontend.name}</button>
    {/each}
  </div>
  {#if $frontendChoice === 'React'}
  <React/>

  {/if}
</div>