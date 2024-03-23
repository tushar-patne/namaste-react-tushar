import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../Contact"

test('should render Contact component', () => { 
    render(<Contact />);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toBeInTheDocument();
    
 })