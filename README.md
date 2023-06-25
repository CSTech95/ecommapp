# ecommapp
PDF needs to be updated. Specifically on the database design & RabbitMQ Integration. Omitting Foreign Keys and SQL Joins.
[EcommerceApp.drawio.pdf](https://github.com/CSTech95/ecommapp/files/11729696/EcommerceApp.drawio.pdf)

![high-level-ecommapp-design](https://github.com/CSTech95/ecommapp/assets/16457234/8ce94416-c1eb-474e-b314-7e2371d08e3b)


Passwords are hashed in case the database gets compromised
<img width="1920" alt="Screenshot 2023-06-21 at 10 13 43 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/fc8b8440-f654-4d3c-9be4-fb33282cbf2b">



Currently only 2 products are in the product service's database
<img width="1920" alt="Screenshot 2023-06-21 at 10 14 58 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/b8b7ae36-c1d5-4a78-972a-d085084a6a1d">


Let's query a single product by 'ID'. I'll view the mountain bike.
<img width="1920" alt="Screenshot 2023-06-21 at 10 16 18 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/f5263ad5-bdc1-4fdd-95a2-7a14a790c4e2">


Creating a product
<img width="1920" alt="Screenshot 2023-06-21 at 10 20 06 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/3b81c29b-372f-4a21-89f8-48fa4b4b837d">



Product is in AWS PostgreSQL DB
<img width="1920" alt="Screenshot 2023-06-21 at 10 20 37 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/85a4c9ff-f3c2-456f-b5f2-2b182c3b669d">
<img width="1280" alt="Screenshot 2023-06-21 at 10 21 56 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/ee760d83-8106-48eb-83ad-a4d4dab73441">
<img width="1280" alt="Screenshot 2023-06-21 at 10 25 31 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/c33e55ef-5991-4a8f-954d-9e2ad4e82c58">
<img width="1280" alt="Screenshot 2023-06-21 at 10 26 47 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/0cd5c8b7-e812-413f-b3d8-f0dee4d05aa8">





Lets update the mountain bike's description from 5 gears to 12, increase the price from $250 to $800 and lower the discountedPercentage from 2 to 1  
...No need to include values for unchanged key-value pairs
<img width="1920" alt="Screenshot 2023-06-21 at 10 34 53 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/1f64461e-9a25-48b4-891e-f69f2216373f">


Product is updated
<img width="1920" alt="Screenshot 2023-06-21 at 10 37 32 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/c511fb0f-499d-46a1-bf64-befdcddf36aa">



Let's delete our 8k TV
<img width="1920" alt="Screenshot 2023-06-21 at 10 40 57 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/8865742e-261d-4dd4-8b31-11cfbb3a877c">


Au Revoir 8k TV
<img width="1920" alt="Screenshot 2023-06-21 at 10 41 21 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/e84c8fde-77b9-4593-bd5a-a246d3c539c6">


Time response can be faster with caching. Redis is standard for caching. The Time to make these requests are typically over 299ms. We can cache these results and drastically reduce the time to retrieve information. This is great if we need information repeatedly. When we first request data, it may take over 299ms to receive it. But once we want to access it again, that time latency will drastically be reduced.



