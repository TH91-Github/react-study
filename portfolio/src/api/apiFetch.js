// Fetch, Axios
import axios from 'axios';

export const loadFetch = async (SERVER_URL) => {
  const res = await fetch(SERVER_URL, {
    method: 'get',
    headers: {
      'content-type': 'application/json'
    }
  });
  if (!res.ok) {
    const error = new Error(res.statusText);
    error.json = res.json();
    throw error;
  }
  const json = await res.json();
  return json;
}

// fetch 추가 
export const postFetch = async (SERVER_URL, postData) => {
  await fetch(SERVER_URL, {
    method:'POST',
    headers: { // 보내는 데이터가 json라는 것을 알린다
      'Content-Type': 'application/json'
    },// body에서 json 형태로 parsing
    body: JSON.stringify(postData)
  });
}
// fetch 수정
export const toggleFetch = async (SERVER_URL, putData, putOption) => {
  await fetch(`${SERVER_URL}/${putData.id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...putData,
      ...putOption
    })
  });
}
// fetch 삭제
export const removeFetch = async (SERVER_URL, delData) => {
  await fetch(`${SERVER_URL}/${delData.id}`,{
    method:"DELETE",
  })
}

export const loadAxios = async(SERVER_URL) => {
  const res = await axios.get(SERVER_URL);
  console.log(res) // 확인용
  return res.data;
}

export const postAxios = async(SERVER_URL, postData) => { 
  await axios.post(SERVER_URL , postData)
}

export const removeAxios = async(SERVER_URL, delData) => {
  await axios.post(SERVER_URL , delData)
}



// get( url, params ){
//   return this._axios
//     .get(url, { params })
//     .then(({data}) => data)
// }

// post( url, payload ){
//   return this._axios
//     .post(url, payload)
//     .then(({data}) => data)
// }
// delete( url ){
//   // console.log('deleteApi', url)
//   return this._axios
//     .delete(url)
//     .then(({data}) => data)
// }
// put( url, payload ){
//   // console.log('putApi', payload)
//   return this._axios
//     .put(url, payload)
//     .then(({data}) => data)
// }

