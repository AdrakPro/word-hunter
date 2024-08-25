<script lang="ts">
  import { onMount } from 'svelte';
  import { DAY, HOUR, MINUTE } from '$lib/constants';
  import type { Task } from '$types/task';

  export let task: Task;

  let time_remaining: string = '24H';

  function updateTimer() {
    const end_time = task.start_date + DAY;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = end_time - now;

      const hours = Math.floor((distance % DAY) / HOUR);
      const minutes = Math.floor((distance % HOUR) / MINUTE);

      time_remaining = `${hours}H ${minutes}M`;

      // todo Assign new quest, check if its not duplicated
      if (distance < 0) {
        time_remaining = 'EXPIRED';
        clearInterval(interval);
      }
    }, 1000);
  }

  onMount(() => {
    updateTimer();
  });
</script>

<div
  class="p-8 my-4 mx-4 max-w-64 text-white border-2 space-y-1 rounded-2xl border-primary-300 hover:border-primary-400 select-none flex flex-col justify-center items-center text-center"
>
  <div class="content-center">
    <span class="font-semibold">{task.task_text}</span>
  </div>
  <div>
    <span>{time_remaining}</span><span class="font-bold px-1"
      >|</span
    ><span>{task.xp} XP</span>
  </div>
  <div>
    <span>{task.current_progress}/{task.max_progress}</span>
  </div>
</div>
