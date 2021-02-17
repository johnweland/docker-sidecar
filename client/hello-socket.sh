#!/bin/sh

sleep 5s

echo "Hello Socket" | nc -U /socket_dir/file.sock

echo "Goodbye!"

exit