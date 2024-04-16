import { z } from 'zod';

import { REQUIRED_FIELD_I18N_KEY } from '~/actions/consts';

export const eventFormSchema = z.object({
  name: z
    .string({ required_error: REQUIRED_FIELD_I18N_KEY })
    .min(1, REQUIRED_FIELD_I18N_KEY),
  description: z.string().optional(),
});
