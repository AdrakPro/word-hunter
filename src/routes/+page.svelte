<script lang="ts">
  import Task from '$lib/dashboard/Task.svelte';
  import { createTask } from '$factories/taskFactory';

  const task = createTask('English or Spanish?', 100, 3);
</script>

<section
  class="container p-16 flex flex-wrap max-w-full justify-center"
>
  <Task {task} />
</section>
