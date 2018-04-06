#!/bin/sh


echo "Building Complete App"
cd brimoAngular
ng build
cd ..


mv brimoAngular/dist ./
cp -r distLogin/ dist/dist

rm -r brimoServer/dist
mv dist brimoServer/dist