module.exports = {
  hooks: {
    'pre.deploy': {
      localCommand: 'meteor npm prune',
      localCommand: 'meteor npm install'
    },
  },
  servers: {
    one: {
      host: 'localhost',
      username: 'ubuntu',
      pem: '/home/ubuntu/keys/goodbettertest.pem',
    },
  },

  app: {
    name: 'goodbettertest',
    path: '../../',
    servers: {
      one: {},
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://localhost',
      MONGO_URL: 'mongodb://localhost/goodbettertest',
      PORT: 3000,
    },

    docker: {
      image: 'abernix/meteord:node-12.16.1-base',
    },
    enableUploadProgressBar: true,
  },
  mongo: {
    version: '3.4.1',
    servers: {
      one: {},
    },
  },
};
