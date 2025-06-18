# poc-gifo
A simple proof-of-concept to display a GIF of the day using script.js.

## Setup

Ensure you have Node.js (v10+) installed.

## Installation

No dependencies are required. Simply run:

```
npm install
```

## Environment Variables

Create a `.env` file in the project root to configure environment variables. Supported variables:

- `PORT`: port for the server (default 3001)
- `GIF_NUMBER`: index of the GIF to display (0-based; default 0)

Example `.env`:
```
PORT=3001
GIF_NUMBER=2
```

## Running Locally

### Development

Start the server with hot reload (requires nodemon):

```
npm run dev
```

### Production

Build and start the server:

```
npm start
```

Then open your browser and navigate to `http://localhost:3001` (or the port set in your `.env` file).

## Adding GIFs

Place GIF files in the `gifs` directory, named from `0.gif` to `14.gif` (total of 15 by default). script.js will select one deterministically based on the date.

## File Structure

- index.html: Main HTML file.
- script.js: JavaScript file to select and display the GIF.
- gifs/: Directory containing GIF files.
- server.js: Simple Node.js server to serve the files.
- package.json: Project configuration.