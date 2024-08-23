import Page from '$routes/+page.svelte';
import TaskCarousel from '$lib/dashboard/TaskCarousel.svelte';
import { render, screen } from '@testing-library/svelte';
import { createTask } from '$factories/taskFactory.ts';
import { CAROUSEL_BREAKPOINT } from '$lib/constants.ts';

vi.mock('$lib/dashboard/TaskCarousel.svelte', async () => ({
  default: componentDouble('TaskCarousel')
}));

describe('/', () => {
  const tasks = [
    createTask('Find 3 nouns in English', 1000, 3),
    createTask('Find 5 nouns in Polish', 3000, 5)
  ];

  beforeEach(TaskCarousel.reset);

  it('should render Carousel when the screen width is below BREAKPOINT value', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: CAROUSEL_BREAKPOINT - 10
    });

    window.dispatchEvent(new Event('resize'));

    const { container } = render(Page, { tasks });
    expect(
      container.querySelector('.spy-Carousel')
    ).toBeInTheDocument();
  });

  // todo need to mock it; page is not updating the width thus not hiding carousel
  it.skip('should render tasks without Carousel when the screen width exceeds 890px', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: CAROUSEL_BREAKPOINT + 10
    });

    window.dispatchEvent(new Event('resize'));

    const { container } = render(Page, { tasks });

    expect(
      container.querySelector('.spy-Carousel')
    ).not.toBeInTheDocument();

    expect(
      screen.getByText('Find 3 nouns in English')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Find 5 nouns in Polish')
    ).toBeInTheDocument();
  });
});
