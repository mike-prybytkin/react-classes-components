import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ModalWindow from './modal-window';

const handleClose = jest.fn();
const setUp = () =>
  render(
    <ModalWindow onModalWindow={handleClose}>
      <div>test</div>
    </ModalWindow>
  );

describe('ModalWindow component', () => {
  it('should render modal window with children', () => {
    setUp();
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('should close modal window', () => {
    setUp();
    fireEvent.click(screen.getByText(/✗/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('create modal window snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
