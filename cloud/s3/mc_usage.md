
# Usage of mc

`mc` is the MinIO Client.

## Install

### macOS

```
brew install minio-mc
mc --help
```

### Linux

```
wget https://dl.min.io/client/mc/release/linux-amd64/mc
chmod +x mc
./mc --help
```

### Windows

[64bit Download link](https://dl.min.io/client/mc/release/windows-amd64/mc.exe).

## Usage

### Config a server

```
mc add minio1 http://127.0.0.1:9000 minioadmin minioadmin
```

### Simple usages

```
mc ls minio1
mc mb minio1/bucket1
mc cp ./local.txt minio1/bucket1
mc ls minio1/bucket1
```

## References

  * [minio-client quickstart guide](https://docs.min.io/docs/minio-client-quickstart-guide)

