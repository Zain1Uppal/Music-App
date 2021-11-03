import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LikesCount } from '.';

describe('LikesCount', () => {
    beforeEach(() => {
        render(<LikesCount />)
    })

    test('Adds one to the counter when the like button is pressed', () => {
        const likeBtn = screen.getByRole('switch')
        const initCount = screen.getByRole('figure').textContent
        userEvent.click(likeBtn)
        const newCount = screen.getByRole('figure').textContent
        expect(parseInt(newCount)).toBe(parseInt(initCount) + 1)
    })

    test('changes button color to green when clicked', () => {
        let likeBtn = screen.getByRole('switch')
        let initcolor = likeBtn.style.backgroundColor
        userEvent.click(likeBtn)
        let newColor = likeBtn.style.backgroundColor
        expect(newColor).not.toBe(initcolor)
    })
    
})