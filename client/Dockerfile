FROM ubuntu as base

WORKDIR /

RUN apt-get update && apt-get install -y netcat

ADD hello-socket.sh /hello-socket.sh

RUN chmod +x /hello-socket.sh

ENTRYPOINT [ "/hello-socket.sh" ]