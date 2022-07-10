import crypto from "crypto";
interface Shape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements Shape {
  public readonly hash: string;
  constructor(
    public readonly prevHash: string,
    public readonly height: number,
    public readonly data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class BlockChian {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (!this.blocks.length) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  private getLenght() {
    return this.blocks.length + 1;
  }
  public addBlock(data: string) {
    const newBlock = new Block(this.getPrevHash(), this.getLenght(), data);
    this.blocks.push(newBlock);
  }
  public getAllBlocks(): readonly Block[] {
    return [...this.blocks]; // avoid connecting directly to the state of blocks
  }
}

const blockChain = new BlockChian();
blockChain.addBlock("first");
blockChain.addBlock("second");
blockChain.addBlock("third");

console.log(blockChain.getAllBlocks());
