import axios from 'axios';

export async function get<T = unknown>(path: `/${string}`): Promise<T> {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    response: true,
    queryStringParameters: {}
  };

  try {
    const res = await axios.get<T>(path, options);
    return res.data;
  } catch (err) {
    throw err;
  }
}
