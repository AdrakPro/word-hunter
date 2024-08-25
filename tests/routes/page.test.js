import Page from '$routes/+page.svelte';
import TaskCarousel from '$lib/dashboard/TaskCarousel.svelte';
import { render, screen } from '@testing-library/svelte';
import { createTask } from '$factories/taskFactory.ts';

// todo add more tests; checking the amount of tasks, ...

vi.mock('$lib/dashboard/TaskCarousel.svelte', async () => ({
  default: componentDouble('TaskCarousel')
}));

describe('/', () => {
  const tasks = [
    createTask('Find 3 nouns in English', 1000, 3),
    createTask('Find 5 nouns in Polish', 3000, 5)
  ];

  beforeEach(TaskCarousel.reset);

  it('should display the Carousel', () => {
    const { container } = render(Page, { tasks });

    expect(
      container.querySelector('.spy-TaskCarousel')
    ).toBeInTheDocument();
  });

  it('should display all tasks in the Carousel', () => {
    render(Page, { tasks });
    expect(
      screen.queryByText('Find 3 nouns in English')
    ).toBeInTheDocument();
    expect(
      screen.queryByText('Find 5 nouns in Polish')
    ).toBeInTheDocument();
  });
});
