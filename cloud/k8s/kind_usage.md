
# Usage of kind

[kind](https://kind.sigs.k8s.io/) is the Kubernetes in docker.

## Installation

After `go 1.11+`, `docker`, and `kubernetes-cli` installed, run

```
GO111MODULE="on" go get sigs.k8s.io/kind@v0.7.0
# make sure $(go env GOPATH)/bin is in the PATH
kind create cluster
```

Then

```
kubectl cluster-info --context kind-kind  
```

or 

```
kubectl config set-context kind-kind
kubectl cluster-info
```
Note that, the `kind` is the default cluster name, and `kind-` is the prefix of the context name. In the following commands, we assume the context is set, e.g. `kind-kind`.

If there is error like `Unable to connect to the server: x509: certificate has expired or is not yet valid`. Renew the certificate in docker container

```
sudo docker exec -it kind-control-plane bash
kubeadm alpha certs renew all
```

## Web UI

### Create sample user

Prepare a `sample_user.yaml` to register user `admin-user` as follows:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
```

Then

```
kubectl apply -f sample_user.yaml
```

The login token for `admin-user` is

```
kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep admin-user | awk '{print $1}')
```

### Deploy kubernetes-dashboard

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta8/aio/deploy/recommended.yaml
```

### Start Web UI

```
kubectl proxy
```

Access the [url](http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/) in browser.

## Multiple nodes cluster

Prepare `multi-nodes.yaml` as follows:

```yaml
# three node (two workers) cluster config
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
- role: worker
```

Run

```
kubectl apply -f multi-nodes.yaml --name kind-multiple
kubectl config set-context kind-kind-multiple
kubectl get all
kubectl get nodes
```

## References

  * [Create Sample User](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md)
  * [Web UI (Dashboard)](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)
  * [Kind quick-start](https://kind.sigs.k8s.io/docs/user/quick-start/)

