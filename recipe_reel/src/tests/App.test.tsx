import { Provider } from "react-redux";
import store from "../store";
import App from "../App";
import { render, screen, waitFor } from "@testing-library/react";

describe('App Component', () => {
    it('should render recipes after fetching', async() => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        await waitFor(() => {
            expect(screen.getByText('Test Recipe')).toBeInTheDocument();
        });
    });
});