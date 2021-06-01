#!/bin/sh

git checkout inverse-control
cp -r . ../app
rm -rf ../app/.git
rm -rf ../app/bootstrap.sh
export boilerplate_repo=$(pwd)
cd ..
git add app
git commit -m 'Init boilerplate'
rm -rf $boilerplate_repo
