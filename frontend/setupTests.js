import * as jestMatchers from '@testing-library/jest-dom/matchers';
import * as mockMatchers from 'svelte-component-double/vitest';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/svelte';

expect.extend(jestMatchers);
expect.extend(mockMatchers);

afterEach(cleanup);

import { componentDouble } from 'svelte-component-double';

globalThis.componentDouble = componentDouble;
