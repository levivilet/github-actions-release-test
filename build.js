import { writeFile, mkdir } from "fs/promises";

const main = async () => {
  await mkdir("./out", { recursive: true, force: true });
  await writeFile("./out/file.txt", "test");
};

main();
