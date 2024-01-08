FROM --platform=arm64 node:20.10.0

WORKDIR /app

RUN npm install -g bun

RUN apt-get update && apt-get -y upgrade

RUN apt-get -y install libgtk2.0-0 \
            libgtk-3-0 libgbm-dev  \
            libnotify-dev libnss3  \
            libxss1 libasound2     \
            libxtst6 xauth xvfb

COPY package*.json .

RUN npm install

COPY . .


EXPOSE 5173 4173 42819

CMD [ "bun", "run", "dev", "--host", "0.0.0.0" ]