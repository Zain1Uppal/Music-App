import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Singer } from '../Singer';

describe('Singer', () => {
    beforeEach(() => render(<Singer />, { wrapper: MemoryRouter }));

})
