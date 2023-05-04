import { Shipment as TShipment } from "../api/shipment/Shipment";

export const SHIPMENT_TITLE_FIELD = "trackingId";

export const ShipmentTitle = (record: TShipment): string => {
  return record.trackingId || String(record.id);
};
