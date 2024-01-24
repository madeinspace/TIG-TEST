export type TShipment = {
  id?: string; // UUIDv4
  trackingId?: string;
  status?: "Delivered" | "In-Transit" | "Manifested" | "Unknown";
  statusSeverity?: "Success" | "Info" | "Warning";
  deliveredTime?: string; // ISO date
  lastUpdate?: string; // ISO date
  deliveryAddress?: string;
  totalTransit?: string; // x days | x hours
};

export type TShipmentDetail = {
  id: string; // UUIDv4
  trackingId: string;
  status:
    | "Picked Up"
    | "Arrived at Facility"
    | "Processed Through Facility"
    | "Departed Facility"
    | "On Board for Delivery"
    | "Delivered"
    | "Unknown Scan"
    | "Return to Sender"
    | "Package Handling";
  statusSeverity: "Success" | "Info" | "Warning";
  timestamp: string; // ISO date
  location: string;
};

export type TShipmentList = {
  onShipmentClick: (shipment: TShipment) => void;
};

export type TShipmentInfo = {
  shipment: TShipment;
};

