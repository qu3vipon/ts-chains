import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ): string => CryptoJS.SHA256(index + previousHash + hash + timestamp + data).toString();

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "hash-1", "", "this is the first block", 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
