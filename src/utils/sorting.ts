import { TShipment } from "../data/types";

export const sortShipmentsByDate = (shipments:TShipment[], sortByValue:boolean) => {
    return [...shipments].sort((a, b) => {
      const dateA = a.lastUpdate ? new Date(a.lastUpdate).getTime() : 0
      const dateB = b.lastUpdate ? new Date(b.lastUpdate).getTime() : 0
      return sortByValue ? dateB - dateA : dateA - dateB;
  });
  }
  
export const sortShipmentsByStatus = (shipments: TShipment[]) =>
    [...shipments].sort((a, b) => (a.status === 'Delivered' ? -1 : 1) - (b.status === 'Delivered' ? -1 : 1));
  