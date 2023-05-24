/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 mb-20'>
            <h2 className='text-3xl'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <br />
            <p>ANS:When a client makes an authenticated request to a server using an access token, the server verifies the token's validity and permissions. If the access token has expired, the client can use the refresh token to obtain a new access token without the need for the user to provide their credentials again. The server validates the refresh token and issues a fresh access token.

                Storage on the client-side:
                The storage of access and refresh tokens on the client-side is crucial for security. Here are some common approaches:

                Access Token: The access token should be securely stored on the client-side, typically in memory or a short-lived cache. It should not be persisted on disk or in local storage, as those can be vulnerable to various attacks.
                Refresh Token: The refresh token is a long-lived credential and requires more secure storage. It is usually stored in a secure HTTP-only cookie or a secure local storage mechanism provided by the browser. Storing it in a cookie helps protect against cross-site scripting (XSS) attacks.</p>
            <br />
            <h2 className='text-3xl'>2. Compare SQL and NoSQL databases?</h2>
            <br />
            <p>Ans: SQL databases are based on a structured data model with predefined schemas, enforce data consistency, and are good for applications with complex relationships and transactions. NoSQL databases offer flexible schemas, scale horizontally, handle unstructured data, and are suitable for applications requiring high scalability, real-time processing, and dynamic data. The choice depends on your application's specific needs. </p>
            <br />
            <h2 className='text-3xl'>3. What is express js? What is Nest JS ?</h2>
            <br />
            <p>Ans:
                Express.js is a minimalist and fast web application framework for Node.js, while NestJS is a TypeScript-based framework built on top of Express.js that provides a more structured and scalable approach to web application development. </p>
                <br />
                <h2 className='text-3xl'>3. What is MongoDB aggregate and how does it work ?</h2>
                <br />
                <p>Ans: </p>
        </div>
    );
};

export default Blog;