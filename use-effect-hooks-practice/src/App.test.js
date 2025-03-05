import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('initial position should be (0,0)', () => {
    render(<App />);
    const circle = screen.getByTestId('cursor-circle');
    expect(circle).toHaveStyle('transform: translate(0px, 0px)');
  });
  
  test('updates position on mouse move', () => {
    render(<App />);
    const circle = screen.getByTestId('cursor-circle');
  
    // Simulate mouse move
    fireEvent.pointerMove(window, { clientX: 100, clientY: 200 });
  
    // Expect updated position
    expect(circle).toHaveStyle('transform: translate(100px, 200px)');
  });
  
  test('removes event listener on unmount', () => {
    const { unmount } = render(<App />);
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
  
    unmount(); // Unmount the component
  
    expect(removeEventListenerSpy).toHaveBeenCalledWith('pointermove', expect.any(Function));
  });
  