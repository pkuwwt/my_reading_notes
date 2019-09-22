
# Docker

## Usage

  * start service
    * `sudo docker --registry-mirror=https://registry.docker-cn.com daemon`
    * `sudo service docker start`
  * pull image: `docker pull sebp/elk`
  * run image as container: `docker run -p 80:8080 --name elk sebp/elk`
  * list all images: `docker images`
  * list all containers: `docker ps`
  * save image as image tarball: `docker save sebp/elk >elk.tar`
  * load image tarball as image: `docker load <elk.tar`
  * export container as container tarball: `docker export container-id >container.tar`
  * import image from image/container tarball: `docker import container.tar`
  
## Speedup by changing registry mirror

Pass `--registry-mirror` to daemon command line or revise `/etc/docker/daemon.json`

```json
{
    "registry-mirrors": ["https://registry.docker-cn.com daemon"]
}
```

## Debug

```
docker events
docker run ...
docker logs <container-name-or-id>
```

## Change Storage Dir for Docker

Method1: add `-g` option for docker
  * For ubuntu/debian, set `DOCKER_OPTS="-dns 8.8.8.8 -dns 8.8.4.4 -g /mnt"` in `/etc/default/docker`
  * For fedora/centOS, set `other_args="-g /var/lib/testdir"` in `/etc/sysconfig/docker`
  * Note: this method may not work for ubuntu for some version
  
  
Method2: symlink
  * stop all containers: `docker kill ${docker ps -q}`
  * stop docker service: `sudo service docker stop` or `sudo systemctl stop docker`. Make sure there is no docker running: `ps aux | grep docker`
  * backup `/var/lib/docker`: `sudo tar -czC /var/lib/ docker >docker_backup.tar.gz`
  * move `/var/lib/docker` to a new place: `sudo mv /var/lib/docker /mnt/disk/docker`
  * make symlink: `sudo ln -s /mnt/disk/docker /var/lib/docker`

## References

  * [Understanding Volumes in Docker](https://container-solutions.com/understanding-volumes-docker/)
  * [Docker Commands Reference](https://docs.docker.com/engine/reference/commandline/docker/)
