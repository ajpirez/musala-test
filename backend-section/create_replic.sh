# sudo ./create_replic.sh --fork
 mkdir -p rs1 rs2 rs3
 mongod --replSet replic --logpath "1.log" --dbpath rs1 --port 27017 -fork &
 mongod --replSet replic --logpath "2.log" --dbpath rs2 --port 27018 &
 mongod --replSet replic --logpath "3.log" --dbpath rs3 --port 27019 &