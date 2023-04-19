import { render, screen, fireEvent } from '@testing-library/react';
import PostForm from './PostForm';
import { Provider } from 'react-redux';
import store from '../redux/store';

const MockFormCall = () => {
    return (
        <Provider store={store}>
          <PostForm />
        </Provider>
    )
}

describe("PostForm", () => {
    it('should render Add New Post in heading', async () => {
        render(<MockFormCall />)
        const labelElement = screen.getByText(/Add New Post/i);
        expect(labelElement).toBeInTheDocument();
    })
})

it('passes title input to post', async () => {
    render(<MockFormCall />)
    const titleInput = screen.getByTestId("postTitle");
    fireEvent.change(titleInput, { target: { value: "Hey, there" } })

})