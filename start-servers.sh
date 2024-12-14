#!/bin/bash

# Path to your Node server
NODE_SERVER_PATH="/Users/danielyeboah/Directory/programming/frontend-masters/complete-intro-to-react-v9/lectures/citr-v9-project-main/api"

# Start the Node server
echo "Starting Node server..."
cd "$NODE_SERVER_PATH" || { echo "Failed to navigate to $NODE_SERVER_PATH"; exit 1; }
sudo npm run dev &
NODE_PID=$!
echo "Node server started with PID $NODE_PID."

# Navigate back to the original directory
cd - || exit

# Start the Vite server
echo "Starting Vite server..."
sudo npm run dev &
VITE_PID=$!
echo "Vite server started with PID $VITE_PID."

# Wait for the user to terminate the script
echo "Press [CTRL+C] to stop both servers."

# Trap CTRL+C to stop both servers
trap "echo Stopping servers...; kill $NODE_PID $VITE_PID; exit" INT

# Keep script running to handle CTRL+C
wait