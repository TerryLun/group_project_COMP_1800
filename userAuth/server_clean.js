async function darkSky(latitude, longitude) {                                                                                                                 
      const fetchResponse = await fetch(                                                                                                                          
              `https://api.darksky.net/forecast/${dsKey}/${latitude},${longitude}`                                                                                      
            );                                                                                                                                                          
      const data = await fetchResponse.json();                                                                                                                    
      return data;                                                                                                                                                
} 