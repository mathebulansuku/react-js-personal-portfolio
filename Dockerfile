FROM ubuntu:latest
ENTRYPOINT ["echo", "Hello World"]
LABEL "Author"="Nsuku"
LABEL "Project"="React website"
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    ca-certificates \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build && npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "build", "-l", "5000"]

