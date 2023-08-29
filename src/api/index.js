import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (bounds) => {
    try {
        const {data: {data}} = await axios.get(URL, {
          method: 'GET',
          url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
          params: {
            bl_latitude: bounds.sw.lat,
            tr_latitude: bounds.ne.lat,
            bl_longitude: bounds.sw.lng,
            tr_longitude: bounds.ne.lng,  
            headers: {
            'X-RapidAPI-Key': 'f1af398407msh434a993f556bbfcp16cfcdjsn5edb75fd2bb9',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          }
        });
        return data;
    }
    
    catch (error) {
        console.log(error);
    }
}