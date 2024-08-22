import { render, screen } from '@testing-library/svelte';
import Task from '$lib/dashboard/Task.svelte';
import { createTask } from '$factories/taskFactory.js';

describe('Task component', () => {
  const example_task = createTask(
    'Find 3 nouns in English c:',
    1000,
    3
  );

  it('should render task text', () => {
    render(Task, { props: { ...example_task } });

    expect(
      screen.getByText('Find 3 nouns in Spanish')
    ).toBeInTheDocument();
  });

  it('should render task xp', () => {
    render(Task, { props: { ...example_task } });

    expect(screen.getByText('1000 XP')).toBeInTheDocument();
  });

  it('should render task progress', () => {
    render(Task, { props: { ...example_task } });

    expect(screen.getByText('1/3')).toBeInTheDocument();
  });

  it('should update the progress when props change', async () => {
    const { component } = render(Task, {
      props: { ...example_task }
    });

    expect(screen.getByText('0/3')).toBeInTheDocument();
    await component.$set({ current_progress: 1 });
    expect(screen.getByText('1/3')).toBeInTheDocument();
  });

  describe('24-hour timer', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.clearAllTimers();
    });

    it('should start a 24-hour timer', () => {
      render(Task, { props: { ...example_task } });

      expect(screen.getByText('23H 59M')).toBeInTheDocument();
    });

    // I don't know how to test it, advanceTime is not working
    it.skip('should update the timer every minute', () => {
      render(Task, { props: { ...example_task } });

      expect(screen.getByText('23H 59M')).toBeInTheDocument();
      vi.advanceTimersByTime(60 * 1000);
      expect(screen.getByText('23H 58M')).toBeInTheDocument();
      vi.advanceTimersByTime(60 * 1000);
      expect(screen.getByText('23H 57M')).toBeInTheDocument();
    });

    // todo
    it.skip('should assign new task when timer is over', () => {
      render(Task, { props: { ...example_task } });

      vi.advanceTimersByTime(24 * 60 * 60 * 1000);

      expect(screen.getByText('EXPIRED')).toBeInTheDocument();
    });
  });
});
