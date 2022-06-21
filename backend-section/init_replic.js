//mongo --port 27018 < init_replic.js
config = {
    _id: "replic", members: [
        {_id: 0, host: "localhost:27018"},
        {_id: 1, host: "localhost:27019"},
    ]
};
rs.initiate(config);
rs.status();