Challenge Server
=======================

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/MikeShi42/challenge-server.git

# Change directory
cd challenge-server

# Install NPM dependencies
npm install

node app.js

# Start mongo
mongod
```

To Test
-------

1. Visit http://localhost:3000/
2. Click login on the top right
3. Click sign in with github
4. Click Generate Private Key in the nav bar
5. Click Upload File in the nav bar after getting the private key
6. Select a file to upload and then click submit
7. Go to your downloads directory
8. Run `dec.js` with `node` with the first argument being the encrypted file
and the second argument being the private key.
ex. `node ~/Dropbox/Projects/challenge-server/dec.js file.enc id_rsa`
9. Alternatively, if your encrypted file is smaller than ~200 bytes, you
can decrypt it directly using `openssl`.
ex. `cat file.enc | openssl base64 -d -A | openssl rsautl -decrypt -oaep -inkey id_rsa`
