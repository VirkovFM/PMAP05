var map = new maplibregl.Map({
    container: 'map',
    style:'https://api.maptiler.com/maps/basic-v2/style.json?key=gEwTz8EZKm1Uu0GCcZVM',
    // style:'https://api.maptiler.com/maps/bright-v2/style.json?key=gEwTz8EZKm1Uu0GCcZVM',
    center: [-0.11,51.49],
    // center: [-101.6313894764541, 21.166128124361702],
    zoom: 2
});
map.on('load', ()=>{
    map.addSource('Airport_points',{
    type:'geojson',
    //data:'https://api.maptiler.com/data/2e7588a7-9154-4b1e-9deb-62219a1e950d/features.json?key=gEwTz8EZKm1Uu0GCcZVM'
    data: 'https://api.maptiler.com/data/b2faf624-f280-409b-84e0-60349c873565/features.json?key=8ygd54cYLUoCX7DMoZu0'
    });
    map.addLayer({
        'id':'Airports',
        'type':'symbol',
        'source':'Airport_points',
        'layout':{
            'icon-image':'Airport_icon',
            'icon-size':0.05,
        }
    });
    map.loadImage('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-plane-512.png',
        (error,image)=>{
            if(error) throw error;
            map.addImage('Airport_icon',image);
        });
});