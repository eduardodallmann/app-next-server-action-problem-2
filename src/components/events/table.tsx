'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import type { CoreOptions } from '@tanstack/react-table';

import { AlignRight } from '~/components/align';
import { TextDescriptionCell } from '~/components/commons/table/cells';
import { Table } from '~/components/commons/table/table';
import type { TableRefProps } from '~/components/commons/table/types';
import { selectorForTable } from '~/components/commons/table/utils';
import type { EventEntity } from '~/entities/event';
import { useSave } from '~/hooks/use-save';
import { useTranslation } from '~/hooks/use-translation';

export function EventsTable({ events }: { events: EventEntity[] }) {
  const tableRef = useRef<TableRefProps<EventEntity>>(null);
  const { isSaving } = useSave();
  const [eventsState, setEventsState] = useState<EventEntity[]>(events);
  const { translate } = useTranslation();
  const { push } = useRouter();

  useEffect(() => {
    setEventsState(events);
  }, [events]);

  const columns: CoreOptions<EventEntity>['columns'] = [
    ...selectorForTable<EventEntity>(),
    {
      id: 'title',
      header: () => translate('name'),
      cell: ({ row }) => {
        const { name } = row.original;

        return <TextDescriptionCell text={name} description={'etc'} />;
      },
    },
    {
      id: 'edit',
      header: () => <AlignRight>{translate('actions')}</AlignRight>,
      cell: ({
        row: {
          original: { id },
        },
      }) => (
        <AlignRight>
          <Link href={`./events/${id}`}>{translate('edit')}</Link>
        </AlignRight>
      ),
    },
  ];

  return (
    <>
      <Table
        ref={tableRef}
        columns={columns}
        data={eventsState}
        onLineAction={({ original }) => {
          push(`./events/${original.id}`);
        }}
      />
      {isSaving && <div>saving...</div>}
    </>
  );
}
