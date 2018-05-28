//Version 3 --- ES 7
class EasyHttp {
    // Make HTTP GET Request
    async get(url) {
     const response = await fetch(url);
     const resData = await response.json();
     return resData;
    }
  
    // Make HTTP POST Request
    async post(url, data) {
      const response = await fetch(url, 
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
      const resData = await response.json();
      return resData;   
    }
  
    //Make HTTP PUT Request
    async put(url, data) {
      const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
      const resData = await response.json();
      return resData;
    }
  
    //Make HTTP DELETE Request
    async delete(url) {
      const response = fetch(url, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
        })
      const resData = await 'Resource Deleted';
      return resData;
    }
  }

  export const http = new EasyHttp();