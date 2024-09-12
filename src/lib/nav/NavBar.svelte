<script lang="ts">
  let is_user_dropdown_visible: boolean = false;
  let is_nav_visible: boolean = true;

  function toggleUserDropdown() {
    is_user_dropdown_visible = !is_user_dropdown_visible;
  }

  function toggleNavbar() {
    is_nav_visible = !is_nav_visible;
  }
</script>

<nav
  class="relative max-w-full flex flex-wrap items-center justify-between mx-auto p-4"
>
  <a
    href="/"
    class="flex items-center space-x-3 rtl:space-x-reverse"
  >
    <img src="favicon.png" class="h-8" alt="WordHunter Logo" />
    <span
      class="self-center text-2xl font-semibold whitespace-nowrap text-white"
      >WordHunter</span
    >
  </a>
  <div
    class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative"
  >
    <button
      type="button"
      aria-label="Open user menu"
      class="flex text-sm rounded-full md:me-0 focus:ring-4"
      id="user-menu-button"
      aria-expanded={is_user_dropdown_visible}
      on:click={toggleUserDropdown}
    >
      <img
        class="w-8 h-8 rounded-full"
        src="favicon.png"
        alt="user avatar"
      />
    </button>
    {#if is_user_dropdown_visible}
      <div
        class="flex-wrap absolute top-full right-0 mt-2 z-50 my-4 min-w-24 text-base list-none divide-y divide-primary rounded-lg shadow bg-gray-400"
        id="user-dropdown"
      >
        <div class="px-4 py-3">
          <span class="block text-sm text-primary font-medium"
            >Adam</span
          >
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-white hover:bg-gray-600"
              >Login</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-white hover:bg-gray-600"
              >Settings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-white hover:bg-gray-600"
              >Sign out</a
            >
          </li>
        </ul>
      </div>
    {/if}
    <button
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-label="open main menu"
      aria-controls="navbar-user"
      aria-expanded={is_nav_visible}
      on:click={toggleNavbar}
    >
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  </div>
  {#if is_nav_visible}
    <div
      class="pt-2 items-center justify-between w-full md:flex md:w-auto md:order-1"
      id="navbar-user"
    >
      <ul
        class="flex flex-col text-primary-400 font-semibold p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
      >
        <li>
          <a
            href="/"
            class="block py-2 px-3 rounded hover:bg-transparent hover:text-primary-500 md:p-0"
            aria-current="page">Dashboard</a
          >
        </li>
        <li>
          <a
            href="/collection"
            class="block py-2 px-3 rounded hover:bg-transparent hover:text-primary-500 md:p-0"
            >Collection</a
          >
        </li>
        <li>
          <a
            href="/learn"
            class="block py-2 px-3 rounded hover:bg-transparent hover:text-primary-500 md:p-0"
            >Learn</a
          >
        </li>
        <li>
          <a
            href="/achievements"
            class="block py-2 px-3 rounded hover:bg-transparent hover:text-primary-500 md:p-0"
            >Achievements</a
          >
        </li>
      </ul>
    </div>
  {/if}
</nav>
