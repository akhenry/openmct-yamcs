.PHONY: all clone-quickstart install-quickstart start-quickstart install-openmct-yamcs sanity-test build-example test-getopensource test-e2e clean

test-all: clone-quickstart install-quickstart install-openmct-yamcs sanity-test build-example test-e2e

start-all: clone-quickstart install-quickstart install-openmct-yamcs sanity-test build-example start-openmct

clone-quickstart:
	@echo "Running target: clone-quickstart"
	@echo "Current working directory: $(shell pwd)"
	if [ ! -d "quickstart" ]; then \
		git clone https://github.com/yamcs/quickstart; \
	else \
		echo "Directory 'quickstart' already exists."; \
	fi

install-quickstart:
	@echo "Running target: install-quickstart"
	@cd quickstart/docker && $(MAKE) wait-for-sent

start-quickstart:
	@echo "Running target: start-quickstart"
	@cd quickstart/docker && $(MAKE) all

reset-quickstart:
	@echo "Running target: reset-quickstart"
	@cd quickstart/docker && $(MAKE) yamcs-simulator-restart

install-openmct-yamcs:
	@echo "Running target: install-openmct-yamcs"
	npm install

sanity-test:
	@echo "Running target: sanity-test"
	npm run wait-for-yamcs

build-example: #This will run build example based on the current branch of openmct-yamcs and fallback to master
	@echo "Running target: build-example"
	current_branch=$(shell git rev-parse --abbrev-ref HEAD); \
	echo "Current branch of openmct-yamcs: $$current_branch checking if it exists in openmct repository"; \
	if git ls-remote --exit-code --heads https://github.com/nasa/openmct.git refs/heads/$$current_branch; then \
		echo "Branch $$current_branch exists in openmct repository. Running build:example:currentbranch"; \
		npm run build:example:currentbranch || { echo "Failed to run build:example:currentbranch"; exit 1; }; \
	else \
		echo "Branch $$current_branch does not exist in openmct repository. Running build:example:master"; \
		npm run build:example:master || { echo "Failed to run build:example:master"; exit 1; }; \
	fi

start-openmct:
	@echo "Running target: start-openmct"
	npm start

test-e2e:
	@echo "Running target: test-e2e"
	npm run test:getopensource
	npm run test:e2e:quickstart:local

clean:
	@echo "Running target: clean"
	npm run clean
	echo "Ran npm run clean."
	@if [ -d "quickstart/docker" ]; then \
		echo "Directory 'quickstart/docker' exists. Running make clean in quickstart/docker."; \
		cd quickstart/docker && $(MAKE) clean; \
		cd ../..; \
		rm -rf quickstart; \
		echo "Removed 'quickstart' directory."; \
	else \
		echo "Directory 'quickstart/docker' does not exist. Skipping."; \
	fi
