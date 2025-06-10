#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// 상위 폴더명
const parentFolder = process.argv[2];
if (!parentFolder) {
  console.error("❌ 상위 폴더명을 입력하세요.");
  process.exit(1);
}

// 문제 이름
const rawName = process.argv.slice(3).join(" ");
const folderName = rawName.trim().replace(/\s+/g, "_");

if (!folderName) {
  console.error("❌ 문제 이름을 입력해주세요.");
  process.exit(1);
}

// 최종 경로
const dir = path.join(__dirname, parentFolder, folderName);
// 이미 폴더가 있으면 에러
if (fs.existsSync(dir)) {
  console.error("❗ 이미 해당 문제 폴더가 존재합니다.");
  process.exit(1);
}

// 폴더 생성
fs.mkdirSync(dir);

// 코드 템플릿 생성
fs.writeFileSync(path.join(dir, "solution.js"), `// ${folderName}\n\n`);

// 설명 템플릿 생성
fs.writeFileSync(
  path.join(dir, "README.md"),
  `# ${rawName}\n\n> 문제 링크: [바로가기]() \n\n## 🌱 문제 설명\n\n\n## 🤔 접근 방식\n\n\n`
);

console.log(`✅ '${folderName}' 폴더가 생성되었습니다.`);
