import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
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
    it('should render test post', () => {
        render(<MockAppCall />)
        const title = screen.getByTestId('postTitle');
        const author = screen.getByRole('combobox');
        const content = screen.getByTestId('postContent');
        const btn = screen.getByTestId('button');
        userEvent.type(title, 'hello world');
        userEvent.selectOptions(author, 'Kevin Durant');
        userEvent.type(content, 'how are you doing');
        userEvent.click(btn);
        const titlePost = screen.getByRole('heading', { name: /hello world/i });
        const authorPost = screen.getByText(/by Kevin Durant/i);
        const contentPost = screen.getByRole('heading', { name: /how are you doing/i });
        expect(titlePost).toBeInTheDocument();
        expect(authorPost).toBeInTheDocument();
        expect(contentPost).toBeInTheDocument();
    });
})