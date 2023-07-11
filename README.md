# SimpleDeploy

This guide explains how to run a pre-built cloud deployment, which references [this guide](https://composedb.js.org/docs/0.4.x/guides/composedb-server/running-in-the-cloud).

As explained in the guide, you will need to install the command line tools for Kubernetes ([kubectl](https://kubernetes.io/docs/tasks/tools/)) and DigitalOcean ([doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/)).

You must then create a Kubernetes Cluster [guide here](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/)

Follow each step carefully to make sure you're able to successfully authenticate yourself based on your personal access token.

Continue following the guide (and ignore #1 of the "Clone the simpledeploy repository" section since the repository you are current in replaces that).

Once you arrive at the sentence starting with "You can now follow the existing guides" use the following steps:

1. Run `npm install` within the root directory to download the required dependencies
2. Run `npm run dev` after your dependencies have been installed
3. You can now perform your GraphQL queries using the following endpoint: `http://localhost:5005/graphql`

If you want to use the client app to see an example in action, use the following directions:
1. In a new terminal, run `cd client` to enter the client folder
2. Run `npm install` within the client directory to download the required dependencies
3. Run `npm run dev` after your dependencies have been installed to experiment with a pre-built mutation query using your new endpoint
4. Navigate to http://localhost:3000/ to perform mutations on your ModeSetting data model

## Ansible

In the [ansible](ansible) directory you will find a set of Ansible playbooks to deploy Ceramic nodes on a set of servers.

Refer to the [README](ansible/README.md) in that directory for more information.
