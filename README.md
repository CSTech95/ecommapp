# ecommapp
PDF needs to be updated. Specifically on the database design & RabbitMQ Integration. Omitting Foreign Keys and SQL Joins.
[EcommerceApp.drawio.pdf](https://github.com/CSTech95/ecommapp/files/11729696/EcommerceApp.drawio.pdf)

![high-level-ecommapp-design](https://github.com/CSTech95/ecommapp/assets/16457234/8ce94416-c1eb-474e-b314-7e2371d08e3b)


Passwords are hashed in case the database gets compromised
<img width="1920" alt="Screenshot 2023-06-21 at 10 13 43 PM" src="https://github.com/CSTech95/ecommapp/assets/16457234/fc8b8440-f654-4d3c-9be4-fb33282cbf2b">




Time response can be faster with caching. Redis is standard for caching. The Time to make these requests are typically over 299ms. We can cache these results and drastically reduce the time to retrieve information. This is great if we need information repeatedly. When we first request data, it may take over 299ms to receive it. But once we want to access it again, that time latency will drastically be reduced.



