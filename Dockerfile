#################################################################
#	Dockerfile to build angular app container images			#
#################################################################
FROM node:8
RUN mkdir -p /usr/api/app
WORKDIR /usr/api/app
COPY . /usr/api/app
RUN npm install
EXPOSE 3000
CMD npm run dev