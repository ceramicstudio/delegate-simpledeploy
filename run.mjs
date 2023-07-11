import { writeFileSync } from "fs";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { readEncodedComposite } from "@composedb/devtools-node";
import shell from "shelljs";
import { fromString } from "uint8arrays/from-string";
import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { getResolver } from "key-did-resolver";
import ora from "ora";

const spinner = ora();
const ceramic = new CeramicClient("http://localhost:7007");

//Accessing your admin key to authenticate the session
const seed = shell.exec(
  `kubectl get secrets --namespace ceramic ceramic-admin -o json | jq -r '.data."private-key"' | base64 -d`
);

//Writing your admin key to local file below, commented out, as optional
// writeFileSync("admin_key.txt", seed.stdout, 'utf8');

//Creating a new admin DID based on your private key
const key = fromString(seed.stdout, "base16");
const did = new DID({
  resolver: getResolver(),
  provider: new Ed25519Provider(key),
});

spinner.info("Authenticating ceramic admin");
await did.authenticate();
ceramic.did = did;
/**
 * @param {Ora} spinner - to provide progress status.
 * @return {Promise<void>} - return void when composite finishes deploying.
 */

//Deploy the prebuilt composite using the same StreamIDs already pinned by HireNodes
spinner.info("deploying composite");
const deployComposite = await readEncodedComposite(
  ceramic,
  "./definition.json"
);
const id = deployComposite.modelIDs;
spinner.info(`Deployed the following models: ${id}`);
await deployComposite.startIndexingOn(ceramic);
spinner.succeed("composite deployed & ready for use");
spinner.succeed("compiling composite into runtime composite");
shell.exec(
  `composedb composite:compile definition.json runtime-composite.json`
);
spinner.succeed("establishing graphiql server");
shell.exec(
  `composedb graphql:server --graphiql runtime-composite.json --port=5005`
);
