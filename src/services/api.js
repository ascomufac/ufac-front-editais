import axios from 'axios';

//const API_URL = 'http://200.129.173.67:8080/Portal';
const API_URL = 'http://localhost:8080/Plone';
// const caminho = 'home';

export const fetchData = async (endpointParam) => {
  try {
    const response = await axios.get(`${API_URL}/${endpointParam}`,{
        headers:{Accept: 'application/json', Authorization: 'Basic YWRtaW46YWRtaW4='
    }});
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    throw error;
  }
};
