# DevShop API

## Description

[Nest](https://github.com/nestjs/nest) DevShop API para o projeto DevShop

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Database Migrations

```bash
# gerar uma nova migration sincronizando as entidades
$ npm run typeorm migration:generate -- -n <descrição da migration>

# sincronizar as migrations
$ npm run typeorm migration:run
```

## License

Nest is [MIT licensed](LICENSE).
