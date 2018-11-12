
# Docker

## Usage

  * pull image: `docker pull sebp/elk`
  * run image as container: `docker run -p 80:8080 --name elk sebp/elk`
  * list all images: `docker images`
  * list all containers: `docker ps`
  * save image as image tarball: `docker save sebp/elk >elk.tar`
  * load image tarball as image: `docker load <elk.tar`
  * export container as container tarball: `docker export container-id >container.tar`
  * import image from image/container tarball: `docker import container.tar`

## References

  * [Understanding Volumes in Docker](https://container-solutions.com/understanding-volumes-docker/)
  * [Docker Commands Reference](https://docs.docker.com/engine/reference/commandline/docker/)
