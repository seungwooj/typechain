"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    }
}
class BlockChian {
    constructor() {
        this.blocks = [];
    }
    getPrevHash() {
        if (!this.blocks.length)
            return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    getLenght() {
        return this.blocks.length + 1;
    }
    addBlock(data) {
        const newBlock = new Block(this.getPrevHash(), this.getLenght(), data);
        this.blocks.push(newBlock);
    }
    getAllBlocks() {
        return [...this.blocks]; // avoid connecting directly to the state of blocks
    }
}
const blockChain = new BlockChian();
blockChain.addBlock("first");
blockChain.addBlock("second");
blockChain.addBlock("third");
console.log(blockChain.getAllBlocks());
