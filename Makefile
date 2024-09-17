.PHONY: all clone-quickstart setup-quickstart setup-openmct-yamcs sanity-test build-example test-getopensource test-e2e clean

all: clone-quickstart setup-quickstart setup-openmct-yamcs sanity-test build-example test-getopensource test-e2e

clone-quickstart:
	@echo "Running target: clone-quickstart"
	@echo "Current working directory: $(shell pwd)"
	if [ ! -d "quickstart" ]; then \
		git clone https://github.com/yamcs/quickstart; \
	else \
		echo "Directory 'quickstart' already exists."; \
	fi

setup-quickstart:
	@echo "Running target: setup-quickstart"
	cd quickstart/docker && make wait-for-sent

setup-openmct-yamcs:
	@echo "Running target: setup-openmct-yamcs"
	npm install

sanity-test:
	@echo "Running target: sanity-test"
	npm run wait-for-yamcs

build-example:
	@echo "Running target: build-example"
	@current_branch=$(shell git rev-parse --abbrev-ref HEAD)
	@echo "Current branch of openmct-yamcs: $$current_branch checking if it exists in openmct repository"
	@if git ls-remote --exit-code --heads https://github.com/nasa/openmct.git refs/heads/$$current_branch; then \
		echo "Branch $$current_branch exists in openmct repository. Running build:example:current"; \
		npm run build:example:current || { echo "Failed to run build:example:current"; exit 1; }; \
	else \
		echo "Branch $$current_branch does not exist in openmct repository. Running build:example:master"; \
		npm run build:example:master || { echo "Failed to run build:example:master"; exit 1; }; \
	fi

test-getopensource:
	@echo "Running target: test-getopensource"
	npm run test:getopensource

test-e2e:
	@echo "Running target: test-e2e"
	npm run test:e2e:quickstart:local

clean:
	@echo "Running target: clean"
	npm run clean
	if [ -d "quickstart" ]; then \
		rm -rf quickstart; \
		echo "Removed 'quickstart' directory."; \
	else \
		echo "Directory 'quickstart' does not exist."; \
	fi
