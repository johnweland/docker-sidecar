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

<h3 align="center">A generic Docker sidecar</h3>

<p align="center">
    A solid template to jumpstart your Typescript written nodejs projects running with Docker!
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