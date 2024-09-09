import WordHunterButton from '$lib/dashboard/WordHunterButton.svelte';
import {
  fireEvent,
  render,
  screen
} from '@testing-library/svelte';

describe('WordHunterButton component', () => {
  it('should display the button', () => {
    render(WordHunterButton, { props: { is_on: false } });
    expect(
      screen.getByRole('button', { name: 'Word Hunt' })
    ).toBeInTheDocument();
  });

  it('should work as toggle button for is_on state', async () => {
    render(WordHunterButton, {
      props: { is_on: false }
    });

    const button = screen.getByRole('button', {
      name: 'Word Hunt'
    });
    expect(button).not.toHaveClass('on');
    await fireEvent.click(button);
    expect(button).toHaveClass('on');
  });
});
