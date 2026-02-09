# Resident Live Chat Application

A chat application built with Angular, Node.js/Express and Socket.IO.

## Installation

### Prerequisites
- Node.js installed
- Angular CLI installed (`npm install -g @angular/cli`)

### Setup

1. Clone the repository
```bash
git clone https://github.com/giorgian96/resident-live-chat
cd resident-live-chat
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Install client dependencies
```bash
cd ../client
npm install
```

## Running the Application

1. Start the server
```bash
cd server
node index.js
```

2. Start the client (in a new terminal)
```bash
cd client
ng serve
```

3. Open your browser and navigate to `http://localhost:4200`

## Features

- Real-time messaging using Socket.IO