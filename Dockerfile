FROM jenkins/jenkins:lts

RUN apt update
RUN apt install nodejs -y

EXPOSE 8080