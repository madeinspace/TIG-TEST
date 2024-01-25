import { Td, Tr, Text, Tag, TagLabel, useTheme } from "@chakra-ui/react";
import { TShipment } from "../../../data/types";
import { formatDate } from "../../../utils/dates";
import { getColorScheme } from "../../../utils/deliveryStatusColorScheme";

type ShipmentRowsProps = {
    shipments: TShipment[]
    callBack: (shipment: TShipment) => void
};

const ShipmentRows = ({ shipments, callBack }: ShipmentRowsProps) => {

    const { colors: { deliveryStatus } } = useTheme()

    return shipments.map((shipment: TShipment) => {
        const { id, trackingId, status, lastUpdate } = shipment
        const colorScheme = getColorScheme(status, deliveryStatus)

        return (
        <Tr key={id} onClick={() => callBack(shipment)} p={1} cursor={"pointer"}>
            <Td>
                <Text fontSize="sm">{trackingId}</Text>
                <Text fontSize="xs" color="layout.body">Created: {formatDate(lastUpdate)}</Text>
            </Td>
            <Td>
            <Tag size="md" variant="outline" padding={2} colorScheme={colorScheme} minW={100} justifyContent="center">
                <TagLabel>{status}</TagLabel>
            </Tag>
            </Td>
        </Tr>
        );
    });
};

export default ShipmentRows;
