.DEFAULT_GOAL := help
SHELL=bash

# Containerization Parameters
CONTAINER_BIN=docker
CONTAINER_COMPOSE_BIN=${CONTAINER_BIN} compose
TM_SIMULATOR_RATE=1

ifeq (${CONTAINER_BIN},podman)
export CONTAINER_COMPOSE=${CONTAINER_BIN}-compose
endif

ifdef (${DEPLOYMENT_ENVIRO})
export DEPLOYMENT_ENVIRO := ${DEPLOYMENT_ENVIRO}
endif

ifdef (${HTTP_PROXY})
export HTTP_PROXY := ${HTTP_PROXY}
endif

ifdef (${HTTPS_PROXY})
export HTTPS_PROXY := ${HTTPS_PROXY}
endif

ifdef (${NO_PROXY})
export NO_PROXY := ${NO_PROXY}
endif

export MAVEN_HTTPS_PROXY=-s./settings.xml

ifdef (${MAVEN_SETTINGS_FILE})
export MAVEN_SETTINGS_FILE := ${MAVEN_SETTINGS_FILE}
endif

all-pull: ## Pre-pull images for openmct and yamcs, because in proxied enviro dockerfile cannot find docker.io!
	$(MAKE) yamcs-pull
	$(MAKE) openmct-pull

all-build: | setup-maven all-pull ## build essentials
	${CONTAINER_COMPOSE_BIN} -f ./compose.yaml build

all-up: | all-build ## Bring up essentials in detached state (attached state doesn't work for some reason)
	${CONTAINER_COMPOSE_BIN} -f ./compose.yaml up -d --remove-orphans --build --force-recreate

all-down: ## Bring down all containers
	${CONTAINER_COMPOSE_BIN} -f ./compose.yaml down --remove-orphans

yamcs-pull: ## Pull maven image for yamcs, because in proxied enviro dockerfile cannot find docker.io!
	${CONTAINER_BIN} pull maven:3.9.9-eclipse-temurin-17

yamcs-build: ## Build yamcs
	${CONTAINER_COMPOSE_BIN}  -f ./compose.yaml build yamcs 

yamcs-up: | yamcs-build ## Bring up yamcs
	${CONTAINER_COMPOSE_BIN} -f ./compose.yaml up -d yamcs --remove-orphans

yamcs-simulator: | yamcs-up ## Run yamcs simulator
	@echo "Starting yamcs-simulator in 15 seconds...";sleep 15
	${CONTAINER_BIN} exec -it deployments-yamcs bash -c "cd /opt/yamcs/quickstart && ./simulator.py --rate=${TM_SIMULATOR_RATE}"

yamcs-down: ## Bring down yamcs
	${CONTAINER_COMPOSE_BIN} -f ./compose.yaml down yamcs --remove-orphans

openmct-pull: ## Pull ubuntu image for openmct, because in proxied enviro dockerfile cannot find docker.io!
	${CONTAINER_BIN} pull ubuntu:25.04

openmct-build: ## Build openmct
	${CONTAINER_COMPOSE_BIN} -f ./compose.yaml build openmct

openmct-up: | openmct_build ## Bring up openmct
	${CONTAINER_COMPOSE_BIN} -f ./compose.yaml up -d --build openmct --remove-orphans

openmct-down: ## Bring down openmct
	${CONTAINER_COMPOSE_BIN} -f ./compose.yaml down openmct --remove-orphans

purge-containers: ## WARNING: purge docker/podman images, cache, volumes, and networks
	@$(MAKE) all-down || true
	@yes | ${CONTAINER_BIN} image prune --filter "dangling=true" || true
	@yes | ${CONTAINER_BIN} system prune -a || true
	@yes | ${CONTAINER_BIN} volume prune || true
	@yes | ${CONTAINER_BIN} network prune || true
	@echo

env-create: ## Create .env file 
	./env.sh > ./.env

setup-maven:
	echo "<settings><proxies></proxies></settings>" > ./yamcs/settings.xml
	if [ "${DEPLOYMENT_ENVIRO}" == "vmmoc" ]; then cp ${MAVEN_SETTINGS_FILE} ./yamcs/ || true; fi

#---
RESET  = \033[0m
PURPLE = \033[0;35m
GREEN  = \033[0;32m
LINE   = $(PURPLE)----------------------------------------------------------------------------------------$(RESET)

help:
	@echo
	@printf "\033[37m%-30s\033[0m %s\n" "#----------------------------------------------------------------------------------------"
	@printf "\033[37m%-30s\033[0m %s\n" "# Makefile targets                                                                       "
	@printf "\033[37m%-30s\033[0m %s\n" "#----------------------------------------------------------------------------------------"
	@echo 
	@printf "\033[37m%-30s\033[0m %s\n" "#-target-----------------------description-----------------------------------------------"
	@grep -E '^[a-zA-Z_-].+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo 

print-%  : ; @echo $* = $($*)
