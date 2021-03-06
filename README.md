# CLEAN ARCHITECTURE EVENT STORE NESTJS

This repository is an example of an implementation of a Clean Architecture type architecture with the Typescript NestJS framework and EventStore.
The application is accessible as an API.

## ROUTES

**GET**
- http://localhost:3000/articles
- http://localhost:3000/articles?format=json
- http://localhost:3000/articles?format=json&page=1
- http://localhost:3000/articles?format=html

**POST**
- http://localhost:3000/articles
- http://localhost:3000/articles?format=json
- http://localhost:3000/articles?format=html

  JSON in body raw:
  ```
  {
      slug: string,
      title: string,
      description: string,
      content: string
  }
  ```

**DELETE**
- http://localhost:3000/articles/{slug}
- http://localhost:3000/articles/{slug}?format=json
- http://localhost:3000/articles/{slug}?format=html

## USAGE

Install
```
yarn or npm i
```

Start in development mode
```
yarn dev or npm run dev
```

Build the app
```
yarn build or npm run build
```

Start the application
```
yarn start or npm run start
```

## Data model

The data model is based on an article which is constructed as follows:
- slug: string (this is the unique business id)
- title: string
- description: string
- content: string