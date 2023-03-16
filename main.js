function index() {
    return axios.get(`${BASE_URL}/constellations`)
      .then((res)=>{
        console.log(res.data)
        return res.data
    })
}
  
function create(body){
    return axios.post(`${BASE_URL}/constellations`, body)
        .then((res)=>{
            console.log(res.data)
            return res.data
        })
}
  
function show(id) {
    return axios.get(`${BASE_URL}/constellations/${id}`)
    .then((res)=>{
    console.log(res.data)
    return res.data
    })
}
  
function update(id, body) {
    return axios.put(`${BASE_URL}/constellations/${id}`, body)
      .then((res)=>{
        console.log(res.data)
        return res.data
    })
}
  
function destroy(id) {
    return axios.delete(`${BASE_URL}/constellations/${id}`)
      .then((res)=>{
        console.log(res.data)
        return res.data
    })
}
