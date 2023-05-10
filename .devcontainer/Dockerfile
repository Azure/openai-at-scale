# Install Python 
# [Choice] Python version (use -bullseye variants on local arm64/Apple Silicon): 3, 3.10, 3.9, 3.8, 3.7, 3.6, 3-bullseye, 3.10-bullseye, 3.9-bullseye, 3.8-bullseye, 3.7-bullseye, 3.6-bullseye, 3-buster, 3.10-buster, 3.9-buster, 3.8-buster, 3.7-buster, 3.6-buster
ARG VARIANT=3.10-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/python:${VARIANT}

# Install Node.js
# [Choice] Node.js version: none, lts/*, 16, 14, 12, 10
ARG NODE_VERSION="16"
RUN if [ "${NODE_VERSION}" != "none" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# Install Azure CLI
RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash
