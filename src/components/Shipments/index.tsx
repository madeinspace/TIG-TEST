import { useQuery } from '@apollo/client';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react';
import ShipmentRows from './ShipmentRow';
import { SHIPMENTS_QUERY } from '../../data/queries';
import { TShipmentList } from '../../data/types';
import { Container } from '@chakra-ui/react'
import LoadingSpinner from '../LoadingSpinner';
import ErrorMessage from '../ErrorMessage';
import errorMessages from '../ErrorMessage/errorMessages';

const ShipmentList = ({ onShipmentClick }: TShipmentList) => {
  const { loading, error, data } = useQuery(SHIPMENTS_QUERY);

  if (error) return <ErrorMessage message={errorMessages.shipments} />;
  if (loading) return  <LoadingSpinner />

  return (
    <Container bg='#dddee4' padding="4" minW="100%" minH="100vh">
        <TableContainer bg="white" borderRadius="8">
            <Table size="md">
                <Thead>
                <Tr>
                    <Th>Shipments</Th>
                    <Th>Status</Th>
                </Tr>
                </Thead>
                <Tbody>
                    <ShipmentRows shipments={data?.shipments || []} callBack={onShipmentClick} />
                </Tbody>
            </Table>
        </TableContainer>
    </Container>
  );
};

export default ShipmentList;
