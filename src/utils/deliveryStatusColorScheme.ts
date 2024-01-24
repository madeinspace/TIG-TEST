import { TShipment } from "../data/types";

type DeliveryStatus = {
  delivered: string;
  intransit: string;
  manifested: string;
  unknown: string;
};

export const getColorScheme = (status: TShipment['status'], deliveryStatus: DeliveryStatus) => {
  switch (status) {
    case 'Delivered':
      return deliveryStatus.delivered;
    case 'In-Transit':
      return deliveryStatus.intransit;
    case 'Manifested':
      return deliveryStatus.manifested;
    case 'Unknown':
      return deliveryStatus.unknown;
    default:
      return 'gray';
  }
};
