// import { render, screen, fireEvent } from '@testing-library/react';
// import ShipmentDrawer from './index';

// describe('ShipmentDrawer', () => {
//   test('renders ShipmentDrawer component with header and children', () => {
//     const headerText = 'Test Header';
//     const childrenText = 'Test Children';

//     render(
//       <ShipmentDrawer isOpen={true} onClose={() => {}} header={headerText}>
//         {childrenText}
//       </ShipmentDrawer>
//     );

//     const headerElement = screen.getByText(headerText);
//     expect(headerElement).toBeInTheDocument();

//     const childrenElement = screen.getByText(childrenText);
//     expect(childrenElement).toBeInTheDocument();
//   });

//   test('calls onClose when close button is clicked', () => {
//     const onCloseMock = jest.fn();

//     render(
//       <ShipmentDrawer isOpen={true} onClose={onCloseMock} header="Test Header">
//         Test Children
//       </ShipmentDrawer>
//     );

//     const closeButton = screen.getByLabelText('Close');
//     fireEvent.click(closeButton);

//     expect(onCloseMock).toHaveBeenCalled();
//   });

// });
