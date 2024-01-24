import { FC } from "react";
import { useQuery } from "@apollo/client";
import { SHIPMENTS_DETAIL_QUERY } from "../../data/queries";
import { TShipmentDetail, TShipmentInfo } from "../../data/types";
import ErrorMessage from "../ErrorMessage";
import LoadingSpinner from "../LoadingSpinner";
import {
  Box,
  Container,
  SimpleGrid,
  Step,
  StepDescription,
  Text,
  StepIndicator,
  StepSeparator,
  StepTitle,
  Stepper,
  Tag,
  TagLabel,
  useTheme,
  Divider,
  Heading,
} from "@chakra-ui/react";
import errorMessages from "../ErrorMessage/errorMessages";
import { getColorScheme } from "../../utils/deliveryStatusColorScheme";
import { formatDate, formatHour } from "../../utils/dates";
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const ShipmentDetails: FC<TShipmentInfo> = ({ shipment }) => {

  const {
    trackingId,
    deliveryAddress,
    deliveredTime,
    lastUpdate,
    totalTransit,
    status,
  } = shipment;

  const { loading, error, data } = useQuery(SHIPMENTS_DETAIL_QUERY, {
    variables: { trackingId },
  });
  const { colors: { deliveryStatus } } = useTheme()
  const colorScheme = getColorScheme(status, deliveryStatus)

  if (error) return <ErrorMessage message={errorMessages.events} />;
  if (loading) return <LoadingSpinner />;
  
  return (
    <Container p="0">
        <Heading as='h5' size='sm' marginBottom={10} color='layout.body'>SHIPMENT</Heading>
        <SimpleGrid columns={2} spacing={5}>
            <Box color='layout.body'>Status</Box>
            <Box>
                <Tag size="md" variant="outline" padding={2} colorScheme={colorScheme}>
                    <TagLabel>{status}</TagLabel>
                </Tag>
            </Box>
            {deliveredTime && <>
                <Box color='layout.body'>Delivered time</Box>
                <Box>{formatDate(deliveredTime)}</Box>
            </>}
            <Box color='layout.body'>Delivery address</Box>
            <Text>{deliveryAddress}</Text>
            <Box color='layout.body'>last Updated</Box>
            <Box>{formatDate(lastUpdate)}</Box>
            <Box color='layout.body'>Total transit time</Box>
            <Box>{totalTransit}</Box>
        </SimpleGrid>

        <Divider marginTop={10} marginBottom={10}/>
        <Heading as='h5' size='sm' marginBottom={10} color='layout.body'>TRACKING HISTORY</Heading>
        <Box padding="20px" border="1px solid #DDDEE4" borderRadius="5px" maxHeight="278px" overflowY="auto">
            {
                data.trackingEvents.length > 0 ? 
                <Stepper index={0} orientation="vertical" maxHeight="300px" gap="0">
                    {data.trackingEvents.map((event: TShipmentDetail) => (
                    <Step key={event.id} style={{ width: '100%'}}>
                        <StepIndicator border="none">
                        {
                            event.status === "Picked Up" ? 
                            <FaCheckCircle style={{ color: 'green' }}/> : 
                            event.status === 'Unknown Scan' ? 
                            <FaExclamationCircle style={{ color: 'red' }}/> :
                            <FaCheckCircle style={{ color: 'green' }}/>
                        }
                    
                        </StepIndicator>
                        <SimpleGrid columns={2} rowGap="10px" >
                            <Box height='80px'>
                                <StepTitle>{event.status}</StepTitle>
                                <StepDescription>{event.location}</StepDescription>
                            </Box>
                            <Box position={"absolute"} right='10'>
                                <Text>{formatDate(event.timestamp)}</Text>
                                <Text>{formatHour(event.timestamp)}</Text>
                            </Box>
                        </SimpleGrid>
                        
                        <StepSeparator />
                    </Step>
                    ))}
                </Stepper> 
                : <Text>No tracking history available</Text>
            }
        </Box>
            
    </Container>
  );
};

export default ShipmentDetails;
