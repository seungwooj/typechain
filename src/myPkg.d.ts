interface Config {
	url: string;
}

declare module "myPkg" {
	function init(config: Config): boolean;
	function exit(code: number): number;
}
