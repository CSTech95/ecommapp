# ecommapp

To run this app You'll need:
- Docker
- Docker-Compose

Navigate to ./ecommapp directory and run docker-compose up --build
![composeup00](https://github.com/CSTech95/ecommapp/assets/16457234/2f29719f-c30b-497f-a54e-ba4b1036d406)

After running this command an exchange "ORDER_EXCHANGE" & Queue "shipping_queue" will automatically be created. You can view this with RabbitMQ management UI in the browser at http://localhost:15672/
<img width="1280" alt="order_exchange" src="https://github.com/CSTech95/ecommapp/assets/16457234/488ca36b-4253-4b27-9945-f3db382df348">
<img width="1280" alt="shippingqueue" src="https://github.com/CSTech95/ecommapp/assets/16457234/79f2e07d-de78-4c13-a0c4-80661056358a">

Currently we have no users in the database and we're not logged in. Let's try to make an order while in this state.
<img width="1280" alt="Screenshot 2023-08-29 at 2 07 57 AM" src="https://github.com/CSTech95/ecommapp/assets/16457234/e07cd14f-0414-4dae-94c3-b1355bd95ca1">
<img width="1280" alt="Screenshot 2023-08-29 at 2 09 46 AM" src="https://github.com/CSTech95/ecommapp/assets/16457234/84d21d91-655a-4534-a4e4-f65d7f80f7bf">

We're not logged in therefore we're not authorized to create an order
![Screen Recording 2023-08-29 at 2 11 00 AM](https://github.com/CSTech95/ecommapp/assets/16457234/11f015fa-1d38-4fab-8146-150df52f8f78)

The code to determine the current user is abstracted away in a custom made npm library. This allows for consistency when working within a team.
<img width="1280" alt="Screenshot 2023-08-29 at 2 17 09 AM" src="https://github.com/CSTech95/ecommapp/assets/16457234/b182b646-d1de-4de5-a087-10ea8406bd1a">

Here's creating a user. You must provide email in a correct format. Once a user has been created, the password is hashed in case the database gets compromised. Then a cookie will be returned from server indicating this user is logged in.
![Screen Recording 2023-08-29 at 2 19 46 AM (1)](https://github.com/CSTech95/ecommapp/assets/16457234/5c4f094e-f467-42a9-a373-89334bcceda6)


Once signed up, we're logged in with a cookie. This cookie indicates the current user logged in for all microservices. We can sign out and sign in with a new user. Whoever is logged in will be the current user across our microservices. (Using regular integers for id value for demonstrational purposes)
![Screen Recording 2023-08-29 at 2 31 11 AM (1)](https://github.com/CSTech95/ecommapp/assets/16457234/cf0c4c16-b4dc-4d58-b042-27b363882c4b)

Currently the "Order" & "Shipment" database are empty.
![Screen Recording 2023-08-29 at 2 46 34 AM (1)](https://github.com/CSTech95/ecommapp/assets/16457234/93d56593-9dbc-42c8-a506-d5fcd204daf6)

We're currently logged in as Sally Mae & her userId is 4. She wants to order a Playstation 5 and a Mountain Bike. All she needs to do is pass in the list of products and the total fee will be calculated. (Entered totalFee of $5.99 in request body from an earlier test but it isn't needed. Total fee is calculated and returned in the response)
![Screen Recording 2023-08-29 at 2 58 04 AM (1)](https://github.com/CSTech95/ecommapp/assets/16457234/409e2ca6-6986-40bb-9d46-548ca594b560)

The order is sent to RabbitMQ's ORDER_EXCHANGE. The ORDER_ECHANGE sends this order to all queues connected to it. The shipping_queue is connected to this exchange and recieves the order. The shipping_service saves this information to its database automatically and prepares shipment.
<img width="1280" alt="image" src="https://github.com/CSTech95/ecommapp/assets/16457234/180ab86c-b0c2-47e8-9d52-61196e3c68e1">
<img width="1280" alt="Screenshot 2023-08-29 at 3 21 22 AM" src="https://github.com/CSTech95/ecommapp/assets/16457234/db1176d4-60ac-4a36-bcdf-de9f8df96af1">

Now John Doe, who has a userId of 3, is going to sign in & then purchase a Nintendo Wii and a BMX Bike.
![Screen Recording 2023-08-29 at 3 27 41 AM (1)](https://github.com/CSTech95/ecommapp/assets/16457234/8050a3e4-152b-498d-a446-3da881d5f62a)

Final Order Table
![order_table_final](https://github.com/CSTech95/ecommapp/assets/16457234/b8c3f2d3-bea6-4981-bd4a-c22bb0179084)

Final Shipment Table
<img width="1280" alt="Screenshot 2023-08-29 at 3 59 06 AM" src="https://github.com/CSTech95/ecommapp/assets/16457234/42e18205-8319-43d3-8f2b-00ff242fe784">


PDF needs to be updated. Specifically on the database design & RabbitMQ Integration. Omitting Foreign Keys and SQL Joins.
[EcommerceApp.drawio.pdf](https://github.com/CSTech95/ecommapp/files/11729696/EcommerceApp.drawio.pdf)

![high-level-ecommapp-design](https://github.com/CSTech95/ecommapp/assets/16457234/8ce94416-c1eb-474e-b314-7e2371d08e3b)



