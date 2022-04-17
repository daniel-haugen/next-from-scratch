'strict mode';
const fs = require('fs');

// Here are all the lat-lon coordinates that we need 

// Park addresses -- grabbed from Google Sheets document

let parkArray = [['Aberdeen', 46.9673768, -123.7906958],
['Anacortes', 48.5036754, -122.6095971],
['Arlington', 48.1644485, -122.1502036],
['Auburn', 47.3320401999999, -122.2146019],
['Muckleshoot', 47.2503955, -122.1132049],
['Bainbridge', 47.638247, -122.5490859],
['Battle Ground', 45.7811701, -122.5272706],
['Bellevue Indoor', 47.6255309, -122.1505543],
['Lakemont Skate Court', 47.556415, -122.1122285],
['Crossroads', 47.6193600999999, -122.1277674],
['Bellevue Plaza', 47.6255309, -122.1505543],
['Bellingham', 48.7468519, -122.4554763],
['Cordata Pump Track', 48.8035581, -122.4948624],
['Bingen', 45.7169594999999, -121.4703444],
['Black Diamond', 47.3118801, -122.005188],
['Allan Yorke', 47.1915309, -122.1658721],
['The Edge', 47.1350172, -122.1760516],
['Bremerton', 47.5785209999999, -122.61992],
['Buckley', 47.1597498, -122.0324035],
['Wilkeson ', 47.1075145999999, -122.0479974],
['Burien ', 47.4737401999999, -122.3400387],
['Burlington ', 48.4699594999999, -122.314274],
['Carnation ', 47.6444714, -121.9108712],
['Cashmere ', 47.5231456, -120.464273],
['Castle Rock ', 46.2677, -122.9106724],
['Centralia ', 46.7251093, -122.9709217],
['Chelan ', 47.844002, -120.0238684],
['Clarkston ', 46.4108883, -117.0403093],
['Cle Elum ', 47.1973109, -120.9499456],
['Covington ', 47.3760306, -122.1226455],
['Cusick ', 48.3370999, -117.2948709],
['Coalpad', 48.865657, -121.9292234],
['Des Moines ', 47.4058589, -122.319947],
['Duvall ', 47.7219864, -121.9570219],
['East Wenatchee (Eastmont Park) Pump Track', 47.4144246, -120.2704238],
['Kenroy', 47.4144246, -120.2704238],
['Orcas ', 48.7029844, -122.8987513],
['Eatonville ', 46.8630001999999, -122.265201],
['Edmonds ', 47.8126040999999, -122.3744773],
['Lynndale', 47.8302512, -122.3331547],
['Ellensburg ', 46.9934007, -120.5471621],
['Enumclaw ', 47.2088091, -121.9907587],
['Ephrata ', 47.3126281, -119.5546737],
['Walter E. Hall', 47.9166033, -122.2564983],
['Wiggums Hollow', 48.0041038, -122.1926927],
['Federal Way ', 47.3219886, -122.300474],
['Forks ', 47.9559345, -124.3850013],
['Granite Falls ', 48.0800291, -121.9702742],
['Hoquiam ', 46.9811483, -123.9130531],
['Issaquah ', 47.5402502, -122.0589297],
['Kelso ', 46.1495918, -122.8978834],
['Kenmore ', 47.7615343, -122.2496089],
['Kennewick ', 46.2004704, -119.1224997],
['Kent ', 47.3830851, -122.2423164],
['Kent 360 ', 47.3861779, -122.187305],
['Kent (West) ', 47.3685246, -122.2815402],
['Kettle Falls ', 48.6118628, -118.0565485],
['Kirkland ', 47.6769378, -122.1998206],
['La Center ', 45.8624496, -122.6604618],
['La Conner ', 48.3968859, -122.4903534],
['Lake Stevens ', 47.977127, -122.126541],
['Leavenworth ', 47.5880711, -120.668176],
['Leavenworth Pump Track', 47.5880711, -120.668176],
['Longview ', 46.1327722, -122.9566448],
['Lyle ', 45.6952836, -121.2868082],
['Brier Skatepark', 47.7919262, -122.2667177],
['Martha Lake', 47.8638097, -122.2379573],
['Maple Valley ', 47.3804753, -122.0473424],
['Summit', 47.357397, -122.0230446],
['Marysville ', 48.0589464, -122.1744249],
['Tulalip ', 48.05618, -122.272401],
['Mercer Island ', 47.5810372, -122.2349242],
['Mill Creek ', 47.872215, -122.217965],
['Milton ', 47.2506475, -122.3045923],
['Monroe ', 47.8625097, -122.0095519],
['Moses Lake ', 47.1272269, -119.2820777],
['Mukilteo Reservation ', 47.9017817, -122.2957294],
['Napavine ', 46.5765825, -122.912442],
['Northbend ', 47.4905408, -121.7775309],
['Oak Harbor ', 48.2961839, -122.648828],
['Olympia ', 47.0443981, -122.941456],
['Othello ', 46.8302535, -119.1600672],
['Port Angeles ', 48.111182, -123.4206235],
['Port Orchard ', 47.5194191999999, -122.6178789],
['Port Townsend ', 48.1174399, -122.7531934],
['Prosser ', 46.1986073, -119.7759829],
['Puyallup ', 47.20208, -122.2979733],
['Redmond ', 47.6766605, -122.1255657],
['Renton ', 47.4814541999999, -122.1998364],
['Longacres DIY', 47.4726085, -122.2426793],
['Richland ', 46.284245, -119.2811384],
['Sammamish ', 47.601416, -122.0368455],
['Valley Ridge', 47.4364154, -122.2758607],
['North Seatac', 47.4802984, -122.3038972],
['Lake City / Virgil Flaim', 47.7179894999999, -122.2994898],
['All Together', 47.6496226, -122.3444692],
['River City', 47.5267933, -122.3238097],
['Ballard Bowl', 47.6706355, -122.3855052],
['Jefferson Park', 47.5697629999999, -122.3084654],
['Benefit Skate Dot', 47.5190676, -122.2841413],
['Crown Hill', 47.696852, -122.3731015],
['Dahl', 47.6852674, -122.2993101],
['Delridge', 47.5648549999999, -122.3640218],
['Judkins', 47.5918752, -122.3041394],
['Lower Woodland / Greenlake', 47.6677642, -122.3400679],
['Marginal Way', 47.5730909, -122.349732],
['Northgate', 47.7098083, -122.3232191],
['Roxhill', 47.5208196, -122.3690794],
['Tukwila ', 47.4910151, -122.2785589],
['Sedro-Woolley ', 48.5088316, -122.2390451],
['Squim ', 48.0802834, -123.0860968],
['Shoreline ', 47.7412693, -122.3195652],
['Snohomish ', 47.9138712, -122.0861026],
['Snoqualmie ', 47.532368, -121.8718781],
['Soap Lake ', 47.3909406999999, -119.4835773],
['Spokane (Hillyard) ', 47.712788, -117.367605],
['Sultan ', 47.8623634, -121.8135623],
['Sumner ', 47.2060882, -122.2269436],
['Sprinker', 47.1224732, -122.4385416],
['11th Street DIY', 47.2547541, -122.4302851],
['Kandle', 47.2708279999999, -122.5088887],
['Norpoint', 47.2996717, -122.4045338],
['Stewart', 47.206326, -122.4237874],
['Thea', 47.2598513, -122.4383662],
['Tonasket ', 48.7041076999999, -119.4456644],
['Union Gap ', 46.5703806, -120.4778152],
['University Place ', 47.2131745, -122.534406],
['Swift ', 45.636836, -122.645549],
['Pacific Community', 45.6331399, -122.5030706],
['Vashon Island ', 47.400795, -122.4688677],
['Walla Walla (Fort Walla Walla) ', 46.0465033, -118.3587247],
['Walla Walla (Mill Creek) ', 46.0743038, -118.2850441],
['Hale Park', 47.4229503, -120.3062318],
['Pioneer Park', 47.4118047, -120.3189062],
['Wilson Creek ', 47.4232005, -119.1208498],
['Winlock ', 46.494509, -122.9420382],
['Woodinville ', 47.7693526, -122.1582472],
['Woodland ', 45.9026898, -122.7421533],
['Chesterley', 46.6179274, -120.5620786],
['Kiwanis', 46.5994478, -120.488026],
['Yelm ', 46.9413987999999, -122.6074968]];



// For every skatepark --> calculate all of the location distances to every park, 
// sort them from shortest to longest distance, slice the first 20 results.

//=======haversine formula=======//
function distance(lat1, lon1, lat2, lon2) {
  if ((lat1 === lat2) && (lon1 === lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    return dist;
  }
}

// This is doing the action

const closestParkArray = parkArray.map(park => {
  let mainPark = park[0];
  let lat1 = park[1];
  let lon1 = park[2]; 
  let closestParks = [];

  for(let i = 0; i < parkArray.length; i++) {
    // Run the distance calculation between og park and comparison park
    let dist = Math.ceil(distance(lat1, lon1, parkArray[i][1], parkArray[i][2]));
    closestParks.push([mainPark, parkArray[i][0], dist]);
  };

  // Sort them by closest by come first
  closestParks.sort((a,b) => a[2] - b[2]);
  
  // Slice first 10 options -- entry zero is the park distance from itself
  let nearbyParks = closestParks.slice(1,11).map(e => {
    return (
      {name: e[1],
      distance: e[2]}
    );
  });

  let nearbyObject = {mainPark, nearbyParks};

  return nearbyObject;
});

// console.log(closestParkArray);


let file = fs.createWriteStream('array.txt');
file.on('error', function(err) { console.log('shitbroke') });
// closestParkArray.forEach(e => file.write(v) );
console.log(closestParkArray[1]);


for (let i = 0; i<closestParkArray.length; i++) {
file.write(closestParkArray[i].mainPark +',');
};

file.end();




// Write the results of the array's to a txt file



