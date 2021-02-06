import React from 'react';
import ProductsPage from './ProductsPage';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import { ConfigureStore } from "../../Redux/ConfigureStore";
import { BrowserRouter } from 'react-router-dom';

jest.mock('../Product/Product', () => () => 'Product');

test("renders ProductsPage correctly", () => {
	const { store } = ConfigureStore();
  const component = renderer.create(<ProductsPage />);
	const tree = renderer.create(
		<Provider store={store}>
			<BrowserRouter>
				<ProductsPage />
			</BrowserRouter>
		</Provider>
	).toJSON();
	expect(tree).toMatchSnapshot();

	expect(component.root.findByType(ProductsPage).props).toEqual({});
});
