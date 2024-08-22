import NavBar from '$lib/nav/NavBar.svelte';
import {
  fireEvent,
  render,
  screen
} from '@testing-library/svelte';

describe('NavBar component', () => {
  it('should display a navbar', () => {
    render(NavBar);
    expect(
      screen.queryByRole('navigation')
    ).toBeInTheDocument();
  });

  it('should toggle user dropdown menu', async () => {
    render(NavBar);

    expect(
      screen.queryByText('Login')
    ).not.toBeInTheDocument();

    const userMenuButton = screen.getByRole('button', {
      name: /open user menu/i
    });
    await fireEvent.click(userMenuButton);

    expect(screen.queryByText('Login')).toBeInTheDocument();

    await fireEvent.click(userMenuButton);
    expect(
      screen.queryByText('Login')
    ).not.toBeInTheDocument();
  });
  // TODO: Test it with something else than jsdom (it dont work well with media queries)
  // describe('Smaller screens', () => {
  //   beforeEach(() => {
  //     window.innerWidth = 500;
  //     window.dispatchEvent(new Event('resize'));
  //   });
  //
  //   it('should toggle the navbar when clicking the hamburger button', async () => {
  //     const hamburger = screen.getByRole('button', {
  //       name: 'open main menu'
  //     });
  //
  //     await fireEvent.click(hamburger);
  //     expect(
  //       screen.getByText('Dashboard')
  //     ).toBeInTheDocument();
  //
  //     await fireEvent.click(hamburger);
  //     expect(screen.queryByText('Dashboard')).toBeNull();
  //   });
  // });
});
