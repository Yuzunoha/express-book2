build:
	docker-compose build --no-cache
up:
	docker-compose up -d
down:
	docker-compose down
ps:
	docker-compose ps
bash:
	docker-compose exec app bash
nodemon:
	docker-compose exec app node_modules/nodemon/bin/nodemon.js
install:
	docker-compose exec app npm install
init:
	make build
	make up
	make install
