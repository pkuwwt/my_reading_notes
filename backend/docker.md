
# Docker

## Usage

  * pull image: `docker pull sebp/elk`
  * run image as container: `docker run -p 80:8080 --name elk sebp/elk`
  * save image as tarball: `docker save sebp/elk >elk.tar`
  * load tarball as image: `docker load <elk.tar`

## References

  * [Understanding Volumes in Docker](https://container-solutions.com/understanding-volumes-docker/)
  * [Docker Commands Reference](https://docs.docker.com/engine/reference/commandline/docker/)
