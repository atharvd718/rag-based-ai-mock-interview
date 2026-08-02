const fs = require('fs');
const path = require('path');

const colorMap = {
  'from-cyan-[0-9]+': 'from-[#8B6F47]',
  'to-blue-[0-9]+': 'to-[#A0845C]',
  'from-purple-[0-9]+': 'from-[#8B6F47]',
  'to-pink-[0-9]+': 'to-[#A0845C]',
  'from-blue-[0-9]+': 'from-[#8B6F47]',
  'to-indigo-[0-9]+': 'to-[#A0845C]',
  'border-white/[0-9]+': 'border-[#C4B49A]',
  'border-slate-[0-9]+/?[0-9]*': 'border-[#C4B49A]',
  'border-gray-[0-9]+/?[0-9]*': 'border-[#C4B49A]',
  'border-blue-[0-9]+/?[0-9]*': 'border-[#C4B49A]',
  'border-cyan-[0-9]+/?[0-9]*': 'border-[#C4B49A]',
  'border-emerald-[0-9]+/?[0-9]*': 'border-[#C4B49A]',
  'text-white/[0-9]+': 'text-[#2C1810]',
  'text-white': 'text-[#2C1810]',
  'text-slate-[0-9]+': 'text-[#2C1810]',
  'text-gray-[0-9]+': 'text-[#2C1810]',
  'text-cyan-[0-9]+': 'text-[#8B6F47]',
  'text-blue-[0-9]+': 'text-[#8B6F47]',
  'text-emerald-[0-9]+': 'text-[#8B6F47]',
  'text-red-[0-9]+': 'text-[#8B6F47]',
  'text-black': 'text-[#2C1810]',
  'text-slate-950': 'text-[#2C1810]',
  'bg-black/[0-9]+': 'bg-[#EDE8DC]',
  'bg-black': 'bg-[#EDE8DC]',
  'bg-white/[0-9]+': 'bg-[#EDE8DC]',
  'bg-white': 'bg-[#EDE8DC]',
  'bg-slate-[0-9]+/?[0-9]*': 'bg-[#EDE8DC]',
  'bg-gray-[0-9]+/?[0-9]*': 'bg-[#EDE8DC]',
  'bg-cyan-[0-9]+/?[0-9]*': 'bg-[#8B6F47]',
  'bg-blue-[0-9]+/?[0-9]*': 'bg-[#8B6F47]',
  'bg-emerald-[0-9]+/?[0-9]*': 'bg-[#8B6F47]',
  'hover:text-white': 'hover:text-[#2C1810]',
  'hover:text-slate-[0-9]+': 'hover:text-[#2C1810]',
  'hover:text-cyan-[0-9]+': 'hover:text-[#8B6F47]',
  'hover:text-blue-[0-9]+': 'hover:text-[#8B6F47]',
  'hover:bg-white/[0-9]+': 'hover:bg-[#D4C5A9]',
  'hover:bg-white': 'hover:bg-[#D4C5A9]',
  'hover:bg-slate-[0-9]+': 'hover:bg-[#D4C5A9]',
  'hover:bg-cyan-[0-9]+': 'hover:bg-[#A0845C]',
  'hover:bg-blue-[0-9]+': 'hover:bg-[#A0845C]',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  for (const [pattern, replacement] of Object.entries(colorMap)) {
    const regex = new RegExp("(?<![a-zA-Z0-9_-])" + pattern + "(?![a-zA-Z0-9_-])", 'g');
    content = content.replace(regex, replacement);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated: ' + filePath);
  }
}

function traverseDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  });
}

['app', 'components', 'utils'].forEach(d => {
  const full = path.join(process.cwd(), d);
  if (fs.existsSync(full)) traverseDir(full);
});
