<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />

<h3 align="center">A Docker Sidecar UNIX Domain Socket Server</h3>

<p align="center">
    A container for creating a unix domain socket server aswell as taking in and manipulating file descriptors
    <br />
    <a href="https://github.com/johnweland/docker-sidecar"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/johnweland/docker-sidecar/issues">Report Bug</a>
    ·
    <a href="https://github.com/johnweland/docker-sidecar/issues">Request Feature</a>
</p>




<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The idea here is to have a docker sidecar container that acts as a Unix Domain Socket server using node.js' `net` library. The sidecar will recieve a file descriptor and then take an action based on the data recieved.


### Built With

* [Typescript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/)
* [Docker](https://www.docker.com/)



<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

* [Node.js](https://nodejs.org/)
* [Docker](https://www.docker.com/)

### Installation

#### Development    
```bash
docker-compose up
```
#### Production
```sh
docker-composer -f docker-compose.yml -f docker-compose.production.yml up -d
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/johnweland/docker-sidecar/issues) for a list of proposed features (and known issues).

## Usage
* The Socket server image is based on the [node:14](https://hub.docker.com/_/node) Docker image
* The test client image is based on [ubuntu:latest](https://hub.docker.com/_/ubuntu) Docker image. The test-client also installs netcat via `apt-get`

### Client Testing for Socket Server
This is a simple Dockerfile and bash script to test that the UNIX domain socket is accepting connections.
### Docker Compose
1. builds the images for the socket-server && the test-client
    ```bash
    docker-compose build
    ```


2. Turns up the containers.
    ```bash
    docker-compose up
    ```
     Upon a successful connection you will see output from both the socket-server and the client like the example below.

    ```output
    socket-server | listening on /socket_dir/file.sock
    socket-server | Buffer size : 0
    socket-server | --------------- server details ---------------
    socket-server | Server is listening at port undefined
    socket-server | Server ip undefined
    socket-server | Server is IP4/IP6 : undefined
    socket-server | Server is listening at LOCAL port undefined
    socket-server | Server LOCAL ip undefined
    socket-server | ------------ remote client info --------------
    socket-server | REMOTE Socket is listening at port' undefined
    socket-server | REMOTE Socket ip : undefined
    socket-server | REMOTE Socket is IP4/IP6 : undefined
    socket-server | ----------------------------------------------
    socket-server | Number of concurrent connections to the server :  1
    socket-server | Bytes read : 13
    socket-server | Bytes written : 0
    socket-server | Data sent to server : Hello Socket
    socket-server | 
    socket-server | Data was flushed successfully from kernel buffer i.e written successfully!
    client        | Data :: Hello Socket
    ```



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. If you find a bug or feature that would benefit others and still fulfill the generic use case of the template, please feel free to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

John Weland - [Contact Info](https://github.com/johnweland)

Project Link: [https://github.com/johnweland/docker-sidecar](https://github.com/johnweland/docker-sidecar)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/johnweland/docker-sidecar?style=for-the-badge
[contributors-url]: https://github.com/johnweland/docker-sidecar/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/johnweland/docker-sidecar?style=for-the-badge
[forks-url]: https://github.com/johnweland/docker-sidecar/network/members
[stars-shield]: https://img.shields.io/github/stars/johnweland/docker-sidecar?style=for-the-badge
[stars-url]: https://github.com/johnweland/docker-sidecar/stargazers
[issues-shield]: https://img.shields.io/github/issues/johnweland/docker-sidecar?style=for-the-badge
[issues-url]: https://github.com/johnweland/docker-sidecar/issues
[license-shield]: https://img.shields.io/github/license/johnweland/docker-sidecar?style=for-the-badge
[license-url]: https://github.com/johnweland/docker-sidecar/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/johnweland