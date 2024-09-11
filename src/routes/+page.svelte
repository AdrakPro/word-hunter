<script lang="ts">
  import TaskComponent from '$lib/dashboard/Task.svelte';
  import TaskCarousel from '$lib/dashboard/TaskCarousel.svelte';
  import WordHunterButton from '$lib/dashboard/WordHunterButton.svelte';
  import HistoryTable from '$lib/dashboard/HistoryTable.svelte';
  import { createTask } from '$factories/taskFactory';
  import type { Task } from '$types/task.ts';

  export let tasks: Task[] = [
    createTask('Find 3 nouns in English', 1000, 3),
    createTask('Find 5 nouns in Polish', 3000, 5),
    createTask('Find 5 nouns in Polish', 3000, 5),
    createTask('Find 5 nouns in Polish', 3000, 5),
    createTask('Find 5 nouns in Polish', 3000, 5)
  ];
</script>

<section
  class="container p-8 flex flex-wrap max-w-full justify-center"
>
  <TaskCarousel tasks_amount={tasks.length}>
    {#each tasks as task}
      <TaskComponent {task} />
    {/each}
  </TaskCarousel>
</section>
<section>
  <WordHunterButton is_on={false} />
</section>
<hr class="w-5/6 h-1 mx-auto bg-gray-400 border-0 rounded" />
<section>
  <HistoryTable />
</section>
