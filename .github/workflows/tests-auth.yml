name: Test-auth

on:
    push:
        branches: main
    pull_request:
        branches: main

jobs:
    # Label of the container job
    container-job:
        # Containers must run in Linux based operating systems
        runs-on: ubuntu-latest
        # Docker Hub image that `container-job` executes in
        container: node:20-alpine

        # Service containers to run with `container-job`
        #services:
        #    # Label used to access the service container
        #    postgres:
        #        # Docker Hub image
        #        image: postgres:15
        #        # Provide the password for postgres
        #        env:
        #            POSTGRES_USER: postgres
        #            POSTGRES_PASSWORD: postgres
        #            POSTGRES_DB: user
        #        # Set health checks to wait until postgres has started
        #        options: >-
        #            --health-cmd pg_isready
        #            --health-interval 10s
        #            --health-timeout 5s
        #            --health-retries 5

        steps:
            # need checkout before using compose-action
            - uses: actions/checkout@v3
            - uses: isbang/compose-action@v1.5.1
              with:
                  compose-file: "../../docker-compose.yml"
                  down-flags: "--volumes"
                  services: |
                      auth_service
                      postgres_db
              env:
                  JWT_SECRET: ${{secrets.JWT_SECRET}}
                  PGHOST: ${{secrets.PGHOST}}
                  DB_USERNAME: ${{secrets.DB_USERNAME}}
                  DB_PASSWORD: ${{secrets.DB_PASSWORD}}
                  DB_NAME: ${{secrets.DB_NAME}}
                  POSTGRES_PORT: 5432
                  test-container: auth_service
                  test-command: "npm test"
