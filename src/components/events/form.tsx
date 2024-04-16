'use client';

import { saveEvent } from '~/actions/events/save';
import { eventFormSchema } from '~/actions/events/validations';
import { Form } from '~/components/commons/form/form';
import type { EntityForm } from '~/components/commons/table/types';
import type { EventEntity } from '~/entities/event';
import { useSave } from '~/hooks/use-save';
import { useTranslation } from '~/hooks/use-translation';

export const EventForm = ({ id, data, disabled }: EntityForm<EventEntity>) => {
  const { translate } = useTranslation();
  const { isSaving } = useSave();

  return (
    <>
      <Form
        key={id}
        schema={eventFormSchema}
        defaultValues={data}
        serverAction={(data: any) => saveEvent(id, data) as any}
        disabled={disabled}
        builder={{
          cols: 1,
          fields: [
            {
              name: 'name',
              label: translate('name'),
              type: 'text',
            },
            {
              name: 'description',
              label: translate('description'),
              type: 'textarea',
            },
          ],
        }}
      />
      {isSaving && <div>saving...</div>}
    </>
  );
};
