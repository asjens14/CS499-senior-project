fetch('https://api.usaspending.gov/api/v2/recipient/state/41/')
    .then((response) => response.json())
    .then((json) => displayData(json))
    .catch((error) => console.error(`Error fetching data: ${error.message}`));

    function displayData(json) {
        console.log(json)
        // console.log((json['results']).length)
        // agencies = []
        // for (i=0; i<(json['results']).length; i++) {
        //     k = json['results'][i]['toptier_code']
        //     v = json['results'][i]['abbreviation']
        //     agencies.push({[k]:v})
        // }
        // console.log(agencies)
        // for (item in json['results']){
        //     k = json['toptier_code']
        //     console.log(k)
        //     v = json['abbreviation']
        //     agencies.push({k:v})
            
        // }
        // console.log(agencies)
        // console.log(json['name'])
        // console.log(json['population'])
        // console.log(json['pop_year'])
        // console.log(json['pop_source'])
    }

states = {
    AK:'02',AL:'01',AR:'05',AZ:'04',CA:'06',CO:'08',CT:'09',DE:'10',FL:'12',GA:'13',
    HI:'15',IA:'19',ID:'16',IL:'17',IN:'18',KS:'20',KY:'21',LA:'22',MA:'25',MD:'24',
    ME:'23',MI:'26',MN:'27',MO:'29',MS:'28',MT:'30',NC:'37',ND:'38',NE:'31',NH:'33',
    NJ:'34',NM:'35',NV:'32',NY:'36',OH:'39',OK:'40',OR:'41',PA:'42',RI:'44',SC:'45',
    SD:'46',TN:'47',TX:'48',UT:'49',VA:'51',VT:'50',WA:'53',WI:'55',WV:'54',WY:'56'
}
topTierAgencies = {}