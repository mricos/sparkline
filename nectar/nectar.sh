#!/bin/bash
source nectar.sh
node="/snap/bin/node"
node_server="./node-server.js"
node_port=9900 # this should be set by sparkline.service
nectar-start-sparkline() {
  #$node $node_server $node_port
  systemctl start sparkline
}
