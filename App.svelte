<script>
import Packer from "./components/Packer";
</script>

<style>
  main {
    font-family: "Press Start 2P", cursive;
    text-align: center;
  }
  .is-fixed {
    position: fixed !important;
    right: 0 !important;
    top: 0 !important;
  }
</style>
<svelte:head>
  <title>SandCraft</title>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</svelte:head>
<a href="https://github.com/andrasbacsai/sandcraft" target="_blank"><i class="nes-icon github is-fixed px-3 mt-2"></i></a>
<main class="h-full w-full pb-10 pt-5 text-white">
  <Packer/>
</main>