# SimpleDeploy

This repository contains scripts to help with the deployment of Ceramic nodes.

View the guide on how to use these scripts [here](https://composedb.js.org/docs/0.4.x/guides/composedb-server/running-in-the-cloud#running-composedb-server-on-kubernetes).

Once you arrive at the sentence starting with "You can now follow the existing guides" use the following steps:

1. Run `npm install` within the root directory to download the required dependencies
2. Run `npm run dev` after your dependencies have been installed
3. You can now perform your GraphQL queries using the following endpoint: `http://localhost:5005/graphql`

## Ansible

In the [ansible](ansible) directory you will find a set of Ansible playbooks to deploy Ceramic nodes on a set of servers.

Refer to the [README](ansible/README.md) in that directory for more information.
