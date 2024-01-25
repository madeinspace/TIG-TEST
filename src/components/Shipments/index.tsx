import { useQuery } from '@apollo/client';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Container,
} from '@chakra-ui/react';
import ShipmentRows from './ShipmentRow';
import { SHIPMENTS_QUERY } from '../../data/queries';
import { TShipment, TShipmentList } from '../../data/types';
import LoadingSpinner from '../LoadingSpinner';
import ErrorMessage from '../ErrorMessage';
import errorMessages from '../ErrorMessage/errorMessages';
import { useEffect, useState } from 'react';
import { sortShipmentsByDate, sortShipmentsByStatus } from '../../utils/sorting';

const ShipmentList = ({ onShipmentClick }: TShipmentList) => {

  const { loading, error, data } = useQuery(SHIPMENTS_QUERY);
  const [shipments, setShipments] = useState<TShipment[]>([])
  const [shipmentSorting, setShipmentSorting] = useState(true)
  const [statusSorting, setStatusSorting] = useState(true)

  useEffect(() => {
    if (!loading && !error) {
      setShipments(sortShipmentsByDate(data.shipments, shipmentSorting))
    } else if (error) {
      console.error('Error:', error);
    }
  }, [loading, error, data]);

  useEffect(()=>{
    const sortedShipments = sortShipmentsByDate(shipments, shipmentSorting)
    setShipments(sortedShipments)
  }, [shipmentSorting])

  useEffect(()=>{
    const sortedShipments = !statusSorting ? sortShipmentsByStatus(shipments): sortShipmentsByDate(shipments, shipmentSorting)
    setShipments(sortedShipments)
  }, [statusSorting])

  const handleOrderShipments = () =>{
    setShipmentSorting(!shipmentSorting)
  }

  const handleOrderStatus = () =>{
    setStatusSorting(!statusSorting)
  }

  if (error) return <ErrorMessage message={errorMessages.shipments} />;
  if (loading) return <LoadingSpinner />;

  return (
    <Container bg='#dddee4' padding="4" minW="100%" minH="100vh">
      <TableContainer bg="white" borderRadius="8">
        <Table size="md">
          <Thead>
            <Tr>
              <Th onClick={handleOrderShipments}>Shipments</Th>
              <Th onClick={handleOrderStatus}>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <ShipmentRows shipments={shipments} callBack={onShipmentClick} />
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ShipmentList;
