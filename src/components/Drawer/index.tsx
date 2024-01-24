import { FC, ReactNode } from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Box } from "@chakra-ui/react";

type ShipmentDetailsDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    header: string;
    children: ReactNode;
};

const ShipmentDrawer: FC<ShipmentDetailsDrawerProps> = ({ isOpen, onClose, header, children }) => (
  <Drawer isOpen={isOpen} onClose={onClose} size="md">
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader borderBottomWidth='1px'>{header}</DrawerHeader>
      <DrawerBody>
        <Box paddingTop='10px'>{children}</Box>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default ShipmentDrawer;
