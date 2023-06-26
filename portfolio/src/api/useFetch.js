
export const dataFetch = async(SERVER_URL) => {
  const response = await fetch(SERVER_URL);
  const fetchData = response.json();
  return fetchData;
};

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