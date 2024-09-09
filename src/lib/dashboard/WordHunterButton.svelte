<script lang="ts">
  export let is_on: boolean;

  const toggleButton = (): boolean => (is_on = !is_on);
</script>

<!-- todo Add transition animation for button hovering -->
<div class="flex mb-8 justify-center">
  <button
    class="px-16 py-5 border-2 rounded-3xl font-semibold text-gray-400 border-gray-400 transition shadow-md"
    class:on={is_on}
    on:click={() => toggleButton()}
    name="word_hunt"
    >Word Hunt
  </button>
</div>

<style>
  .on {
    color: #fdf0d5;
    border-color: #22a3cf;
  }
</style>
