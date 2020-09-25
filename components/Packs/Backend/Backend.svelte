<script>
  import { onDestroy } from "svelte";
  import Node from "./Node";
  import { backendChoice } from "../../../stores";

  const backends = [
    { name: "Node", disabled: false },
    { name: "Deno", disabled: true }
  ];
  onDestroy(() => {
    backendChoice.set();
  });
</script>

<div class="flex flex-col">
<div class="text-xl font-bold  py-4">Runtimes</div>
  <div class="flex flex-row justify-center space-x-4">
    {#each backends as backend}
      <button 
      disabled={backend.disabled}
      on:click={() => backendChoice.set(backend.name)} 
      class="p-4 nes-btn font-bold"
      class:bg-green-700={$backendChoice === backend.name}
      class:is-disabled={backend.disabled}
      class:is-success={$backendChoice === backend.name}>{backend.name}</button>
    {/each}
  </div>
  {#if $backendChoice === 'Node'}
    <Node/>
  {/if}
</div>