import { render, screen } from '@testing-library/react';
import Hero from '@/components/sections/Hero';

jest.mock('next/image', () => ({ __esModule: true, default: (props: any) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={props.alt} />;
}}));

describe('Hero', () => {
  it('renders tagline and CTAs', () => {
    render(<Hero />);
    expect(screen.getByText(/Innovating with Code, Building with Intelligence/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Contact Me/i })).toBeInTheDocument();
  });
});
