# Google Palm API Demo

This is a demo repository for using the Google Palm API with Node.js, Axios, and dotenv for key management.

## Usage

1. Clone the repository
2. Install the dependencies by running `npm install`
3. Create a `.env` file in the root folder and add your API key as `API_KEY=YOUR_KEY`
4. Run the script with `node index.js`

This demo makes a request to the Google Palm API with a sample prompt and logs the response.

## Dependencies

- Axios: A promise-based HTTP client for making requests.
- dotenv: A package to load environment variables from a `.env` file.

## Configuration

This demo uses a `.env` file to store the API key. Make sure to create a `.env` file in the root folder of the project and add your API key as follows:

```
API_KEY=YOUR_KEY
```

Replace `YOUR_KEY` with your actual Palm API key. The script will load the key using the dotenv package.