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


PDF needs to be updated. Specifically on the database design & RabbitMQ Integration. Omitting Foreign Keys and SQL Joins.
[EcommerceApp.drawio.pdf](https://github.com/CSTech95/ecommapp/files/11729696/EcommerceApp.drawio.pdf)

![high-level-ecommapp-design](https://github.com/CSTech95/ecommapp/assets/16457234/8ce94416-c1eb-474e-b314-7e2371d08e3b)


Passwords are hashed in case the database gets compromised
<img width="1920" alt="Screenshot 2023-06-21 at 10 13 43 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/fc8b8440-f654-4d3c-9be4-fb33282cbf2b">




Time response can be faster with caching. Redis is standard for caching. The Time to make these requests are typically over 299ms. We can cache these results and drastically reduce the time to retrieve information. This is great if we need information repeatedly. When we first request data, it may take over 299ms to receive it. But once we want to access it again, that time latency will drastically be reduced.



