import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    layout: {
      body: '#82848f',  
    },
    trackingIcons:{
      pickedup: '#73BE73',
      unknown: 'red'
    },
    deliveryStatus: {
      delivered: 'green',
      intransit: 'orange',
      unknown: 'red',
      manifested: 'orange',
    },
  },
});