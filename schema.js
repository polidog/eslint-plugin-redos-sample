const { z } = require('zod');
const { EMAIL_PATTERN } = require('./regex');


const emailSchema = z
  .object({
    email: z
      .string()
      .regex(EMAIL_PATTERN, { message: '不正なメールアドレスです' }),
  });
