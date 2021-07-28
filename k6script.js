import http from "k6/http";
import { sleep } from "k6";

// GET
// export let options = {
//   scenarios: {
//     constant_request_rate: {
//       executor: "constant-arrival-rate",
//       rate: 10000,
//       timeUnit: "1s",
//       duration: "45s",
//       preAllocatedVUs: 100,
//       maxVUs: 200,
//     },
//   },
// };
// export default function () {
//   const BASE_URL = 'http://localhost:3003/dp/9000000';

//   http.get(`${BASE_URL}`);
// }

// POST

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 10000,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  const BASE_URL = 'http://localhost:3003/images';
  let rndPic = Math.floor(Math.random() * 1001);
  let imgUrl = `https://picsum.photos/id/${rndPic}/200/300`;

  http.post(`${BASE_URL}`, JSON.stringify({'images': [imgUrl]}), { headers: { 'Content-Type': 'application/json' } });
}