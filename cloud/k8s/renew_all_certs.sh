#!/bin/bash

#
# A script to renew the certs on the k8s nodes, to avoid the problem:
#     Unable to connect to the server:
#     x509: certificate has expired or is not yet valid
#

if (( $# < 1 )); then
	echo "USAGE:"
	echo "     $0 container-name-or-id-1 container-name-or-id-2 ..."
	echo "NOTE: All related container should be renewed"
	exit 1
fi

while (($#)); do
	sudo docker exec -it $1 kubeadm alpha certs renew all
	shift
done

