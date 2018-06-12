'use strict';

var ulitecore = module.exports;

// module information
ulitecore.version = 'v' + require('./package.json').version;
ulitecore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of ulitecore-lib found. ' +
      'Please make sure to require ulitecore-lib and check that submodules do' +
      ' not also include their own ulitecore-lib dependency.';
    throw new Error(message);
  }
};
ulitecore.versionGuard(global._ulitecore);
global._ulitecore = ulitecore.version;

// crypto
ulitecore.crypto = {};
ulitecore.crypto.BN = require('./lib/crypto/bn');
ulitecore.crypto.ECDSA = require('./lib/crypto/ecdsa');
ulitecore.crypto.Hash = require('./lib/crypto/hash');
ulitecore.crypto.Random = require('./lib/crypto/random');
ulitecore.crypto.Point = require('./lib/crypto/point');
ulitecore.crypto.Signature = require('./lib/crypto/signature');

// encoding
ulitecore.encoding = {};
ulitecore.encoding.Base58 = require('./lib/encoding/base58');
ulitecore.encoding.Base58Check = require('./lib/encoding/base58check');
ulitecore.encoding.BufferReader = require('./lib/encoding/bufferreader');
ulitecore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
ulitecore.encoding.Varint = require('./lib/encoding/varint');

// utilities
ulitecore.util = {};
ulitecore.util.buffer = require('./lib/util/buffer');
ulitecore.util.js = require('./lib/util/js');
ulitecore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
ulitecore.errors = require('./lib/errors');

// main bitcoin library
ulitecore.Address = require('./lib/address');
ulitecore.Block = require('./lib/block');
ulitecore.MerkleBlock = require('./lib/block/merkleblock');
ulitecore.BlockHeader = require('./lib/block/blockheader');
ulitecore.HDPrivateKey = require('./lib/hdprivatekey.js');
ulitecore.HDPublicKey = require('./lib/hdpublickey.js');
ulitecore.Networks = require('./lib/networks');
ulitecore.Opcode = require('./lib/opcode');
ulitecore.PrivateKey = require('./lib/privatekey');
ulitecore.PublicKey = require('./lib/publickey');
ulitecore.Script = require('./lib/script');
ulitecore.Transaction = require('./lib/transaction');
ulitecore.URI = require('./lib/uri');
ulitecore.Unit = require('./lib/unit');

// dependencies, subject to change
ulitecore.deps = {};
ulitecore.deps.bnjs = require('bn.js');
ulitecore.deps.bs58 = require('bs58');
ulitecore.deps.Buffer = Buffer;
ulitecore.deps.elliptic = require('elliptic');
ulitecore.deps.scryptsy = require('scryptsy');
ulitecore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
ulitecore.Transaction.sighash = require('./lib/transaction/sighash');
