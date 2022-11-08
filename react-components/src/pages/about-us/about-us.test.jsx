import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './about-us';
import mockText from '../../mocks/text';

const setUp = () => render(<AboutUs heading={mockText.headingAboutUs} />);

describe('About Us component', () => {
  it('should correctly render heading', () => {
    setUp();
    const aboutUsHeading = screen.getByText(new RegExp(mockText.headingAboutUs, 'i'));
    expect(aboutUsHeading).toBeInTheDocument();
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
