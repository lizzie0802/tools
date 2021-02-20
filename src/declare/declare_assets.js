import fs from "fs";
import path from "path";

const folder = process.argv[process.argv.length - 1];

const template = `import { ComponentClass, SVGProps } from 'react';
declare const SvgComp: ComponentClass<SVGProps<SVGSVGElement>>;
export default SvgComp;
`;

const files = fs.readdirSync(path.join(folder));

files.forEach((f) => {
  const declarePath = path.join(folder, f + ".d.ts");
  if (fs.existsSync(declarePath)) {
    return;
  }
  fs.writeFileSync(declarePath, template);
});
