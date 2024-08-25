import TaskCarousel from '$lib/dashboard/TaskCarousel.svelte';
import { render } from '@testing-library/svelte';

// todo write more tests

vi.mock('$lib/dashboard/TaskCarousel.svelte', async () => ({
  default: componentDouble('TaskCarousel')
}));

describe('TaskCarousel component', () => {
  it('should display the Carousel', () => {
    render(TaskCarousel);

    expect(TaskCarousel).toBeRendered();
  });

  it('should calculate properly amount of particles to show based on task_amount and screen_width', () => {
    const screen_width = 900;
    const tasks_amount = 6;
    const result = Math.min(
      Math.floor(screen_width / 250),
      tasks_amount
    );

    expect(result).toBe(3);
  });
});
