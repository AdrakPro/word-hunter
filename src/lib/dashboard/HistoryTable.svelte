<script lang="ts">
  import type { TableCell } from '$types/tableCell';

  // todo add pagination and under table number of page
  export let table_data: TableCell[] = [
    {
      word: 'banana',
      language: 'English',
      type: 'noun',
      xp: 100
    },
    {
      word: 'courir',
      language: 'French',
      type: 'verb',
      xp: 180
    },
    {
      word: 'correr',
      language: 'Spanish',
      type: 'verb',
      xp: 160
    },
    {
      word: 'correr',
      language: 'Spanish',
      type: 'verb',
      xp: 160
    },
    {
      word: 'correr',
      language: 'Spanish',
      type: 'verb',
      xp: 160
    }
  ];
</script>

<div
  class="flex mb-auto justify-center items-center overflow-x-auto rounded-lg"
>
  <table
    class="w-[85%] mt-10 text-sm text-left text-white rounded-lg"
  >
    <thead
      class="text-xs text-primary-400 uppercase bg-gray-500"
    >
      <tr>
        {#each Object.keys(table_data[0]) as column_heading}
          <th class="px-6 py-3">{column_heading}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each Object.values(table_data) as row}
        <tr class="border-b border-b-gray-400">
          {#each Object.values(row) as cell}
            <td class="px-6 py-4">{cell}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
