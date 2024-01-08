build:
	docker compose -f "docker-compose.yml" up -d --build

bun:
	docker compose exec gofundme bun $(b)$(B)

up:
	docker compose -f "docker-compose.yml" up -d

lint:
	docker compose exec gofundme bun lint

install:
	docker compose exec gofundme bun install $(i)$(I)

test:
	docker compose run --rm gofundme bun test:e2e

test-dev:
	docker compose run --rm gofundme bun test:e2e:dev



	
