<script>
import Packer from "./components/Packer";
</script>

<style>
  main {
    font-family: "Press Start 2P", cursive;
    text-align: center;
  }
</style>
<svelte:head>
  <title>SandCraft</title>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</svelte:head>
<main class="h-full w-full pb-10 text-white">
<div class="flex flex-row justify-center items-center py-4">
<!-- 	<h1 class="text-xl font-bold uppercase border-2 px-4 py-2 rounded">SandCraft</h1> -->
  </div>
  <Packer/>
</main>