<script lang="ts">
  import TaskComponent from '$lib/dashboard/Task.svelte';
  import TaskCarousel from '$lib/dashboard/TaskCarousel.svelte';
  import { onMount } from 'svelte';
  import { createTask } from '$factories/taskFactory';
  import { CAROUSEL_BREAKPOINT } from '$lib/constants';
  import type { Task } from '$types/task.ts';

  export let tasks: Task[] = [
    createTask('Find 3 nouns in English', 1000, 3),
    createTask('Find 5 nouns in Polish', 3000, 5),
    createTask('Find 5 nouns in Polish', 3000, 5)
  ];

  let screen_width = 0;

  // Listen to resize events and update accordingly screen_width variable
  const updateScreenWidth = (): void => {
    screen_width = window.innerWidth;
  };

  onMount(() => {
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);

    return () =>
      window.removeEventListener('resize', updateScreenWidth);
  });
</script>

<section
  class="container p-8 flex flex-wrap max-w-full justify-center"
>
  {#if tasks.length > 1 && screen_width < CAROUSEL_BREAKPOINT}
    <TaskCarousel>
      {#each tasks as task}
        <TaskComponent {task} />
      {/each}
    </TaskCarousel>
  {:else}
    {#each tasks as task}
      <TaskComponent {task} />
    {/each}
  {/if}
</section>
