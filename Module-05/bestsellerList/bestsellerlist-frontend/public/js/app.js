import createAuth0Client from '@auth0/auth0-spa-js';

let auth0 = null;

// initialize using the values from the auth_config.json file by calling the endpoint on the frontend Auth0 server (3009)
const fetchAuthConfig = () => fetch("/auth_config.json");

// fetchAuthConfig to download the configuration file and initialize the auth0 variable
const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();

    auth0 = await createAuth0Client({
        domain: config.domain,
        client_id: config.clientId
    });
};

window.onload = async () => {
    await configureClient();

    updateUI();

    const updateUI = async () => {
        const isAuthenticated = await auth0.isAuthenticated();
        document.getElementById("btn-logout").disabled = !isAuthenticated;
        document.getElementById("btn-login").disabled = isAuthenticated;
    };
};

const login = () => {
    console.log("you have logged in")
}

// When checking each step results you should perform a full page refresh ignoring the cache. This can be achieved by using the CMD+SHIFT+R keys.

// module.exports = {fetchAuthConfig, configureClient, login}