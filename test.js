// fetch('https://api.usaspending.gov/api/v2/search/spending_over_time/',{
//     method:'POST',

//     headers:{
//         'Accept':'application/json',
//         'Content-Type': 'application/json'
//     },
//     body:JSON.stringify({
//         "group": "fiscal_year",
//         "filters": {
//             "place_of_performance_locations":[{"country":"USA","state":"OR"}],
//             "time_period":[{"start_date":"2007-10-01","end_date":"2024-09-30"}]
//         }
//     })})
//     .then((response) => response.json())
//     .then((json) => displayData(json))
//     .catch((error) => console.error(`Error fetching data: ${error.message}`));
// fetch('https://api.usaspending.gov/api/v2/recipient/state/49/?year=2023')
//     .then((response) => response.json())
//     .then((json) => displayData(json))
//     .catch((error) => console.error(`Error fetching data: ${error.message}`));

//     function displayData(json) {
//         console.log(json)
//         // console.log((json['results']).length)
//         // agencies = []
//         // for (i=0; i<(json['results']).length; i++) {
//         //     k = json['results'][i]['toptier_code']
//         //     v = json['results'][i]['abbreviation']
//         //     agencies.push({[k]:v})
//         // }
//         // console.log(agencies)
//         // for (item in json['results']){
//         //     k = json['toptier_code']
//         //     console.log(k)
//         //     v = json['abbreviation']
//         //     agencies.push({k:v})
            
//         // }
//         // console.log(agencies)
//         // console.log(json['name'])
//         // console.log(json['population'])
//         // console.log(json['pop_year'])
//         // console.log(json['pop_source'])
//     }

// states = {
//     AK:'02',AL:'01',AR:'05',AZ:'04',CA:'06',CO:'08',CT:'09',DE:'10',FL:'12',GA:'13',
//     HI:'15',IA:'19',ID:'16',IL:'17',IN:'18',KS:'20',KY:'21',LA:'22',MA:'25',MD:'24',
//     ME:'23',MI:'26',MN:'27',MO:'29',MS:'28',MT:'30',NC:'37',ND:'38',NE:'31',NH:'33',
//     NJ:'34',NM:'35',NV:'32',NY:'36',OH:'39',OK:'40',OR:'41',PA:'42',RI:'44',SC:'45',
//     SD:'46',TN:'47',TX:'48',UT:'49',VA:'51',VT:'50',WA:'53',WI:'55',WV:'54',WY:'56'
// }
// topTierAgencies = {}


// {num: 4123874681.64, val:'2008'},
// {num: 6640048390.84, val:'2009'},
// {num: 6545982736.8, val:'2010'},
// {num: 6517527426.92, val:'2011'},
// {num: 6864100069.5, val:'2012'},
// {num: 6035327242.2, val:'2013'},
// {num: 6898289232.08, val:'2014'},
// {num: 7290975135.11, val:'2015'},
// {num: 7331885742.97, val:'2016'},
// {num: 8811651202.85, val:'2017'},
// {num: 9809112430.4, val:'2018'},
// {num: 10338318244.66, val:'2019'},
// {num: 16667311410.84, val:'2020'},
// {num: 18620467248.37, val:'2021'},
// {num: 15028166196.96, val:'2022'},
// {num: 15482309326.72, val:'2023'},
// {num: 1429923712.33, val:'2024'}

function displayData(json) {
    console.log(json)
}

fetch('https://api.usaspending.gov/api/v2/references/toptier_agencies')
.then((response) => response.json())
    .then((json) => displayData(json))
    .catch((error) => console.error(`Error fetching data: ${error.message}`));



    // https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/debt-to-the-penny

    

    states = {
        AK: "02",
        AL: "01",
        AR: "05",
        AZ: "04",
        CA: "06",
        CO: "08",
        CT: "09",
        DC: "11",
        DE: "10",
        FL: "12",
        GA: "13",
        GU: "66",
        HI: "15",
        IA: "19",
        ID: "16",
        IL: "17",
        IN: "18",
        KS: "20",
        KY: "21",
        LA: "22",
        MA: "25",
        MD: "24",
        ME: "23",
        MI: "26",
        MN: "27",
        MO: "29",
        MS: "28",
        MT: "30",
        NC: "37",
        ND: "38",
        NE: "31",
        NH: "33",
        NJ: "34",
        NM: "35",
        NV: "32",
        NY: "36",
        OH: "39",
        OK: "40",
        OR: "41",
        PA: "42",
        PR: "72",
        RI: "44",
        SC: "45",
        SD: "46",
        TN: "47",
        TX: "48",
        UT: "49",
        VA: "51",
        VI: "78",
        VT: "50",
        WA: "53",
        WI: "55",
        WV: "54",
        WY: "56"
      }


      [
        { val: "AK", amt: 15662874613.52 },
        { val: "AL", amt: 62456223681.02 },
        { val: "AR", amt: 31626421758.73 },
        { val: "AZ", amt: 108753699689.98 },
        { val: "CA", amt: 418915343719.55 },
        { val: "CO", amt: 59629263245.46 },
        { val: "CT", amt: 119042196579.42 },
        { val: "DE", amt: 10914488482.53 },
        { val: "FL", amt: 273948590193.93 },
        { val: "GA", amt: 91346084133.69 },
        { val: "HI", amt: 17722948413.82 },
        { val: "IA", amt: 30025961423.06 },
        { val: "ID", amt: 19308858208.88 },
        { val: "IL", amt: 155961408226.54 },
        { val: "IN", amt: 183016354208.47 },
        { val: "KS", amt: 26263301021.71 },
        { val: "KY", amt: 158050777764.16 },
        { val: "LA", amt: 57898389153.28 },
        { val: "MA", amt: 93325766578.39 },
        { val: "MD", amt: 95228043690.05 },
        { val: "ME", amt: 19775589469.6 },
        { val: "MI", amt: 111871517435.08 },
        { val: "MN", amt: 213771982887.52 },
        { val: "MO", amt: 82037638117.35 },
        { val: "MS", amt: 37290329569.66 },
        { val: "MT", amt: 13041305943.71 },
        { val: "NC", amt: 99603486592.26 },
        { val: "ND", amt: 81910666415.29 },
        { val: "NE", amt: 22854908549.87 },
        { val: "NH", amt: 14093691984.26 },
        { val: "NJ", amt: 85498345650.04 },
        { val: "NM", amt: 37695687247.22 },
        { val: "NV", amt: 28981206161.84 },
        { val: "NY", amt: 238174557871.05 },
        { val: "OH", amt: 115485802564.85 },
        { val: "OK", amt: 44323542836.2 },
        { val: "OR", amt: 51818362774.7 },
        { val: "PA", amt: 253735134522.98 },
        { val: "RI", amt: 13803519437.55 },
        { val: "SC", amt: 122483154468.95 },
        { val: "SD", amt: 9660631275.45 },
        { val: "TN", amt: 102204127030.3 },
        { val: "TX", amt: 286728318877.67 },
        { val: "UT", amt: 26052055967.81 },
        { val: "VA", amt: 176371414874.77 },
        { val: "VT", amt: 7871545825.27 },
        { val: "WA", amt: 84159190137.46 },
        { val: "WI", amt: 103091719669.91 },
        { val: "WV", amt: 22518558226.61 },
        { val: "WY", amt: 5898966480.56 }
    ]