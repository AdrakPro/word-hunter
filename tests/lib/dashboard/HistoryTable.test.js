import HistoryTable from '$lib/dashboard/HistoryTable.svelte';
import { render, screen } from '@testing-library/svelte';

describe('HistoryTable component', () => {
  const table_data = [
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
    }
  ];

  it('should display a history table', () => {
    render(HistoryTable);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('should render the table headers correctly for table_data', () => {
    render(HistoryTable, {
      props: { table_data }
    });

    expect(screen.getByText('word')).toBeInTheDocument();
    expect(screen.getByText('language')).toBeInTheDocument();
    expect(screen.getByText('type')).toBeInTheDocument();
    expect(screen.getByText('xp')).toBeInTheDocument();
  });

  it('should render all rows of data for table_data', () => {
    render(HistoryTable, {
      props: { table_data }
    });

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(table_data.length + 1); // Includes the header row
  });

  it('should render the correct data in the cells for table_data', () => {
    render(HistoryTable, {
      props: { table_data }
    });

    expect(screen.getByText('banana')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('noun')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });
});
