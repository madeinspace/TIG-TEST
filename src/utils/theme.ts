import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    layout: {
      body: '#82848f',  
    },
    deliveryStatus: {
      delivered: 'green',
      intransit: 'orange',
      unknown: 'red',
      manifested: 'orange',
    },
  },
});