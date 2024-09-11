import Statistics from '$lib/Statistics.svelte';
import { render, screen } from '@testing-library/svelte';

describe('Statistics component', () => {
  it('should display the correct numbers and text', () => {
    render(Statistics, {
      props: {
        words_hunted: 400,
        quest_done: 340,
        xp_gained: 225,
        day_streak: 280
      }
    });

    expect(screen.getByText('400')).toBeInTheDocument();
    expect(screen.getByText('340')).toBeInTheDocument();
    expect(screen.getByText('225')).toBeInTheDocument();
    expect(screen.getByText('280')).toBeInTheDocument();

    expect(screen.getByText('Words hunted')).toBeInTheDocument();
    expect(screen.getByText('Quest done')).toBeInTheDocument();
    expect(screen.getByText('XP gained')).toBeInTheDocument();
    expect(screen.getByText('Day streak')).toBeInTheDocument();
  });
});
