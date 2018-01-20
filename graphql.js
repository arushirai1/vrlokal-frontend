import {server_url} from './config'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const client = new ApolloClient({
      link: new HttpLink({ uri: 'http://192.168.42.133:3000/graphql' }),
      cache: new InMemoryCache()
    });


/*const sampleData2 = [{
    "_id":"5a557f7edef4fd1288970af4",
    "title":"TestTour",
    "path":[{"lat":37.322998,"lon":-122.032182}],
    "user":{
        "name":"Arushi",
        "pic": "https://s3-us-west-1.amazonaws.com/pictures-lokal/24303501016_4bf7c90de8_o+(2).jpg"
    },
    "categoryName":["Food & Drink"],
    "info":{
        "provide":"Nothing",
        "bring":"Everything",
        "des":"This is a test tour where you get everything",
        "imgUrls":["http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VC_NavigateBigSur_GarrapataStatePark_Stock_RM_E1AJNB_1280x640.jpg"]},
        "maxUsers":4,
        "repeat":null,
        "specificDates":["2018-12-03T10:15:30.000Z"],
    "summary":{
        "rating":5
    }}
    ]*/