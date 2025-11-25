export async function getHostels(locations) {
    const {location} = await locations;
    const res = await fetch(`https://serpapi.com/search.json?engine=google_maps&q=hostels in ${location}&ll=@40.7455096,-74.0083012,14z&api_key=${process.env.SERPAPI_KEY}`,
        {cache:'no-store'});
    return res.json();

}
export async function getImages(photos_link){
    const res = await fetch(`${photos_link}&api_key=${process.env.SERPAPI_KEY}`,{cache:'no-store'});
    const images = await res.json();
    return images.photos[0].image;
}

export async function getHostelDetails(data_id,longitude,latitude){
    const res = await fetch(`https://serpapi.com/search.json?engine=google_maps&type=place&data=!4m5!3m4!1s${data_id}!8m2!3d${longitude}!4d${latitude}&api_key=${process.env.SERPAPI_KEY}`,{cache:'no-store'});
    const data = await res.json();
    return data.place_results;
}