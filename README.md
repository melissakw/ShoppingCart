# Shopping Cart Demo

This React demo showcases a simple products page where you can add, remove, and change the quantity of products in cart. 


## To start this application:
1. Make sure you have Docker installed
2. Run docker-compose up -d --build
3. Go to http://localhost:3000/


## About
**Design considerations:**

- User sees an empty cart message on their first interaction with the page. Number of items in cart is indicated in the bubble over the cart icon in the upper-right corner.

- "No items in cart" indication is shown when cart is empty. A "keep shopping" link is added to guide user back to shopping more and adding items to cart.

- User sees "Add To Cart" buttons under each product that allow them to add items to the cart.

- "Add To Cart" button's text changes to "Added To Cart" to indicate items successfully added to cart.

- Storage persisted with Redux.

- Upon adding items to cart, user sees an updated list of cart items by clicking the cart icon in the upper-right corner.

- Each cart item allows user to change the quantity of that item in the dropdown menu

- User may only add up to the maximum number of items in stock to cart.

- Cart summary shows the user price and shipping information about the items in cart.

- "Checkout" button is implemented for placeholder only since checkout function is out of scope.

- Since user account/ login is out of scope for this project the "Save Cart For Later" function has not been implemented.

- No "Empty Cart" function implemented because we want a forgiving user experience that avoids having the user accidentally removing all items in cart. Items may only be removed one at a time.

- In addition to the no "Empty Cart" function approach, a fullscreen modal with loading indication has been implemented to (1) notify the user about an active event (ex. updating items quantity in cart / item being removed from cart) and (2) slow down changes made to cart to 1800 ms (time can be adjusted according to business needs). This is designed to help the user focus on completing the checkout rather than editing/ removing items from cart.


**Here are some assumptions I've made:**
- Maximum stock quantity for all products is 10. If stock quantity is higher (ex. 200) then implementing an input field to update the items quantity in cart is preferred.

- Products are ready-to-ship items in stock rather than customizable items with many variations. Currently, when you add a SKU to cart twice it will show up in the cart as one line with qty = 2. This makes sense for ready-to-ship items with few to no variations. For highly customizable items, breaking variations into multiple line items is preferred.

- Number of items in cart should not exceed two digits. Current implementation would show the number of items in cart overflowing from the bubble at upper-right corner. Most major ecommerce websites do allow users to have over ~20-50 items in cart. This rule is preferred to reduce user's choice paralysis and unnecessary holdup of inventory. 

- Cart items are not stored in a database since no user account/login is implemented. Storing items in cart on the server side can improve user experience. For instance, user may browse for products on their mobile device and checkout the items on a computer later. Storing items in cart on server and making them available when user login on another device can speed up the 


**There are two parts to this app:**

- This repo hosts the client application only
- You can find the server application [here](https://github.com/melissakw/ShoppingCartServer)


---

Made with ❤️ by Melissa Wong
