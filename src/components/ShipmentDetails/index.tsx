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
            <Text color='layout.body'>Status</Text>
            <Box>
                <Tag size="md" variant="outline" padding={2} colorScheme={colorScheme}>
                    <TagLabel>{status}</TagLabel>
                </Tag>
            </Box>
            {deliveredTime && <>
                <Box as='h1' color='layout.body'>Delivered time</Box>
                <Text>{formatDate(deliveredTime)}</Text>
            </>}
            <Text color='layout.body'>Delivery address</Text>
            <Text>{deliveryAddress}</Text>
            <Text color='layout.body'>last Updated</Text>
            <Text>{formatDate(lastUpdate)}</Text>
            <Text color='layout.body'>Total transit time</Text>
            <Text>{totalTransit}</Text>
        </SimpleGrid>

        <Divider marginTop={10} marginBottom={10}/>
        <Heading as='h5' size='sm' marginBottom={10} color='layout.body'>TRACKING HISTORY</Heading>
        <Box padding="20px 20px 0 20px" border="1px solid #DDDEE4" borderRadius="5px" maxHeight="300px" overflowY="auto">
            {
                data.trackingEvents.length > 0 ? 
                <Stepper index={0} orientation="vertical" maxHeight="300px" gap="0">
                    {data.trackingEvents.map((event: TShipmentDetail) => {

                        const { id, status, location, timestamp } = event

                        return (
                        <Step key={id} style={{ width: '100%'}}>
                            <StepIndicator border="none">
                            {
                                status === "Picked Up" ? 
                                <FaCheckCircle size='20px' style={{ color: '#73BE73' }}/> : 
                                status === 'Unknown Scan' ? 
                                <FaExclamationCircle size='20px' style={{ color: 'red' }}/> :
                                <FaCheckCircle size='20px' style={{ color: '#73BE73' }}/>
                            }
                            </StepIndicator>
                            <SimpleGrid columns={2} rowGap="10px" >
                                <Box height='80px'>
                                    <StepTitle>{status}</StepTitle>
                                    <StepDescription>{location}</StepDescription>
                                </Box>
                                <Box position={"absolute"} right='10'>
                                    <Text>{formatDate(timestamp)}</Text>
                                    <Text>{formatHour(timestamp)}</Text>
                                </Box>
                            </SimpleGrid>

                            <StepSeparator />
                        </Step>
                        )})}
                </Stepper> 
                : <Text>No tracking history available</Text>
            }
        </Box>
            
    </Container>
  );
};

export default ShipmentDetails;
