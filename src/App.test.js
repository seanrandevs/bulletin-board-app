import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const MockAppCall = () => {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    )
}

describe("PostForm", () => {
    it('should render Add New Post in heading', async () => {
        render(<MockAppCall />)
        const labelElement = screen.getByText(/Add New Post/i);
        expect(labelElement).toBeInTheDocument();
    })
})

// it('passes title input to post', async () => {
//     render(<MockAppCall />)
//     const titleInput = screen.getByTestId("postTitle");
//     const authorSelect = screen.getByTestId("postAuthor");
//     const contentInput = screen.getByTestId("postContent");
//     const buttonElement = screen.getByTestId("button");
//     fireEvent.change(titleInput, { target: { value: "Hey, there" } });
//     fireEvent.change(authorSelect, { target: { value: "Kevin Durant" } });
//     fireEvent.change(contentInput, { target: { value: "How are you doing?" } });
//     fireEvent.click(buttonElement);
//     const hElement = screen.getByTestId("title");
//     expect(hElement).toHaveTextContent("Hey, there");
// })