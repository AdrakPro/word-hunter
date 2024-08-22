import type { Task } from '$types/task';

export const createTask = (
  task_text: string,
  xp: number,
  max_progress: number,
  current_progress: number = 0,
  start_date: number = new Date().getTime()
): Task => ({
  task_text,
  xp,
  max_progress,
  current_progress,
  start_date
});
