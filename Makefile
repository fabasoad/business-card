.PHONY: build install lint start test upgrade

.DEFAULT_GOAL := build

build:
	@yarn run build:prod

clean:
	@rm -f yarn.lock
	@rm -rf node_modules

install:
	@yarn install

reinstall: clean install

lint:
	@yarn run lint

start:
	@yarn run start:dev

test:
	@yarn run test

upgrade:
	@yarn upgrade-interactive
