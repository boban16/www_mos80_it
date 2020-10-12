import axios from 'axios';
import * as Yup from 'yup';

const freshDeskService = axios.create({
  baseURL: process.env.FRESHDESK_API_URL,
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
  auth: {
    username: process.env.FRESHDESK_USERNAME,
    password: process.env.FRESHDESK_PASSWORD,
  },
});

export default async (req, res) => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    message: Yup.string().required(),
  });

  try {
    const values = await schema.validate(req.body);

    await freshDeskService.post('/tickets', {
      description: values.message,
      name: values.name,
      subject: values.message.slice(0, 25),
      email: values.email,
      priority: 1,
      status: 2,
    });

    res.json({
      send: true,
    });
  } catch (err) {
    res.status(422);
    res.json({
      send: false,
      errors: err.errors,
    });
  }
};
