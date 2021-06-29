import axios from 'axios';
let productId;

describe('CRUD API Tests', () => {

  it('Successful Create API Call', () => {
    axios.post('http://localhost:3003/images/1', {images: ['url_1', 'url_2']})
      .then((res) => {
        productId = res.data.productId;
        expect(res.status).toBe(200);
      });
  });

  it('Successful Read API Call', () => {
    axios.get(`http://localhost:3003/images/` + productId)
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });

  it('Successful Update API Call', () => {
    axios.put(`http://localhost:3003/images/` + productId)
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });

  it('Successful Delete API Call', () => {
    axios.delete(`http://localhost:3003/images/` + productId)
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });

});