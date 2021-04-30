FROM ubuntu

RUN apt update
RUN apt install wget -y

#instalo JAVA
RUN apt install default-jre -y
RUN apt install default-jdk -y

#instalo jenkins
RUN apt-get update && apt-get install -y gnupg2
RUN wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | apt-key add
RUN sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
RUN apt-get install software-properties-common -y
RUN add-apt-repository universe
RUN apt-get update
RUN apt-get install jenkins -y

#instalo node
RUN apt install nodejs -y

EXPOSE 8080