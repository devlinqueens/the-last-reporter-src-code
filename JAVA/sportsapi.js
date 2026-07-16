const apiKey = "6ee5ad49892480aba8c823aeb7499117";


async function getLiveSports() {
    
    const url = "https://v1.football.api-sports.io/leagues";
    try{
        const data = await response.json();
        console.log(data);

        // Extract required statistics (e.g., possesion, points, odds) here
    } catch(error){
        console.error('Error fetching data:', error);
    }
    
}