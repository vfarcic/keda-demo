import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 200,
  duration: '30s',
};

export default function () {
  http.get('http://dot.35.229.25.252.nip.io');
  sleep(1);
}
