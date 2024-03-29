# Employee Management System

Employee Management System with GraphQL API, Apollo Server and React

---

## Technology used :

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

---

## Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)
- MongoDB (Make sure it's running)

## How to Run Locally

### Backend

1.  Navigate to the backend directory:

    ```bash
    cd Server
    ```

2.  Create a `.env` file in the backend directory and set the following variables:

        ```env
        # DB
        DB_URL= "mongodb+srv://admin:admin@cluster0.hnixyaw.mongodb.net/EMS?retryWrites=true&w=majority"

        ## Server Port
        API_SERVER_PORT= 3001

        ## JWT Key
        JWT_SECRET= "Haunted Key"
    ```
    (note: Here I am using mondo DB atlas which provides a free cloud-based database so you can paste the URL provided by the atlas or you can install your own database)

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Run the backend server:

    ```bash
    npm start
    ```

5.  Open your browser and visit [http://localhost:3001/graphql](http://localhost:3001/graphql) to explore the GraphQL playground.

### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd App
   ```

2. Create a `.env` file in the frontend directory and set the following variables:

   ```env
   CLIENT_SERVER_PORT = 8000

   CLIENT_API_ENDPOINT= http://localhost:3001/graphql  # Assuming backend runs on the same machine
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run webpack in watch mode:

   ```bash
   npm run watch
   ```

5. In a separate terminal, run the frontend development server:

   ```bash
   npm start
   ```

6. Open your browser and visit [http://localhost:8000](http://localhost:8000) to explore the Employee Management System frontend.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.
