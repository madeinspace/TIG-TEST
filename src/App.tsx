import { ChakraProvider } from '@chakra-ui/react'
import ShipmentList from './components/Shipments';
import APPOLO_CLIENT from './data/apollo';
import { ApolloProvider } from '@apollo/client'
import { TShipment } from './data/types';
import ShipmentDetails from './components/ShipmentDetails';
import { useState } from 'react';
import ShipmentDrawer from './components/Drawer';
import Header from './components/Header';
import { theme } from './utils/theme';

const App = () => {

  const [shipment, setShipment] = useState<TShipment>({});
  const [isOpen, setIsOpen] = useState(false);
  
  const handleShipmentClick = (shipment:TShipment) => {
    setShipment(shipment)
    setIsOpen(true);
  }

  return (
  <ChakraProvider theme={theme}>
    <ApolloProvider client={APPOLO_CLIENT}>
      <Header companyName='COMPANY CO.'/>
      <ShipmentList onShipmentClick={handleShipmentClick}/>
      <ShipmentDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} header={shipment.trackingId || ''}>
        <ShipmentDetails shipment={shipment}/>
      </ShipmentDrawer>
    </ApolloProvider>
  </ChakraProvider>)
}

export default App
