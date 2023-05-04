import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { OrderTitle } from "../order/OrderTitle";

export const ShipmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <SelectInput
          source="partner"
          label="Partner"
          choices={[
            { label: "Blue Dart", value: "BlueDart" },
            { label: "Delhivery", value: "Delhivery" },
            { label: "DTDC", value: "Dtdc" },
            { label: "FedEx", value: "FedEx" },
            { label: "DHL", value: "Dhl" },
            { label: "India Post", value: "IndiaPost" },
            { label: "Shadowfax", value: "Shadowfax" },
            { label: "Xpressbess", value: "Xpressbess" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Initiated", value: "initiated" },
            { label: "In Progress", value: "InProgress" },
            { label: "Delivered", value: "Delivered" },
            { label: "Return in Progress", value: "ReturnInProgress" },
            { label: "Returned", value: "Returned" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Tracking ID" source="trackingId" />
      </SimpleForm>
    </Edit>
  );
};
