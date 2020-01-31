#! /bin/bash
pid=`ps -ef | grep "node index" | grep -v grep | awk '{print $2}'`
kill -SIGTERM $pid