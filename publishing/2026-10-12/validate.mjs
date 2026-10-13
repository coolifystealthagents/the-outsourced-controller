import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'../..');
const manifest=JSON.parse(fs.readFileSync(path.join(import.meta.dirname,'manifest.json'),'utf8'));
const failures=[];const check=(ok,msg)=>{if(!ok)failures.push(msg)};
check(manifest.site==='TheOutsourcedController','site label mismatch');
check(manifest.domain==='theoutsourcedcontroller.com','canonical domain mismatch');
check(manifest.repository==='coolifystealthagents/the-outsourced-controller','repository mismatch');
check(manifest.branch==='main','branch mismatch');
check(manifest.publicationDate==='2026-10-12'&&manifest.visibleDate==='October 12, 2026','publication date mismatch');
check(manifest.blog.length===12,'expected exactly 12 Blog items');check(manifest.research.length===5,'expected exactly 5 Research items');
const all=[...manifest.blog.map(x=>({...x,type:'blog'})),...manifest.research.map(x=>({...x,type:'research'}))];
check(new Set(all.map(x=>x.slug)).size===17,'slugs must be unique');check(new Set(all.map(x=>x.title)).size===17,'titles must be unique');check(new Set(all.map(x=>x.thumbnail)).size===17,'thumbnails must be unique');
for(const item of all){
  check(!/2026|october\s+12|\b10[\/-]12\b/i.test(item.title),`date found in title: ${item.title}`);
  const file=path.join(root,item.thumbnail);check(fs.existsSync(file),`missing thumbnail: ${item.thumbnail}`);if(fs.existsSync(file)){const svg=fs.readFileSync(file,'utf8');check(/width="1200" height="630"/.test(svg),`thumbnail dimensions: ${item.slug}`);check(svg.includes(`<title id="title">${item.title}</title>`),`thumbnail title mismatch: ${item.slug}`)}
}
for(const item of manifest.research)check(item.sources===10,`Research source depth must be 10: ${item.slug}`);
const blog=fs.readFileSync(path.join(root,'lib/october12-blog.ts'),'utf8');const research=fs.readFileSync(path.join(root,'lib/october12-research.ts'),'utf8');const renderer=fs.readFileSync(path.join(root,'components/October12Article.tsx'),'utf8');
for(const item of manifest.blog){check(blog.includes(`"slug": "${item.slug}"`),`Blog registry missing ${item.slug}`);check(blog.includes(`"title": "${item.title}"`),`Blog title missing ${item.slug}`)}
for(const item of manifest.research){check(research.includes(`"slug": "${item.slug}"`),`Research registry missing ${item.slug}`);check(research.includes(`"title": "${item.title}"`),`Research title missing ${item.slug}`)}
check((research.match(/"url": "https:\/\//g)||[]).length===50,'Research must contain 50 authoritative HTTPS source entries');
const allowed=['sec.gov','pcaobus.org','fasb.org','gao.gov','coso.org','irs.gov','nist.gov','federalreserve.gov','fdic.gov','sba.gov','dol.gov','ftc.gov'];
for(const url of [...research.matchAll(/"url": "(https:[^"]+)"/g)].map(x=>x[1]))check(allowed.some(host=>new URL(url).hostname.endsWith(host)),`non-authoritative source: ${url}`);
check(renderer.includes('Published {article.visibleDate}'),'visible publication date missing');check(renderer.includes('<Related type="blog"')&&renderer.includes('<Related type="research"'),'related content missing');check(renderer.includes('className="sidebar"'),'article sidebar missing');check(renderer.includes('Authoritative sources reviewed'),'Research source display missing');check(!renderer.split('\n').some(line=>line.startsWith('+')),'invalid leading patch marker in article renderer');
for(const [file,needles] of [['app/blog/page.tsx',['october12Blogs','Latest guidance']],['app/research/page.tsx',['october12Research','Latest research']],['app/blog/[slug]/page.tsx',['october12BlogBySlug','LegacyBlog']],['app/research/[slug]/page.tsx',['october12ResearchBySlug','LegacyResearch']],['app/sitemap.xml/route.ts',['october12Blogs','october12Research']]]){const body=fs.readFileSync(path.join(root,file),'utf8');for(const n of needles)check(body.includes(n),`${file} missing ${n}`)}
const prose=[];for(const text of [blog,research])for(const match of text.matchAll(/"([^"\\]*(?:\\.[^"\\]*)*)"/g)){let value;try{value=JSON.parse('"'+match[1]+'"')}catch{continue}if(value.split(/\s+/).length>=14)prose.push(value.toLowerCase().replace(/[^a-z0-9 ]/g,'').replace(/\s+/g,' ').trim())}
const seen=new Set();for(const p of prose){check(!seen.has(p),`duplicate substantive prose: ${p.slice(0,80)}`);seen.add(p)}
if(failures.length){console.error('FAIL');for(const f of failures)console.error('- '+f);process.exit(1)}
console.log('PASS: 12 Blog + 5 Research; publication depth; 10 authoritative HTTPS sources per Research item; exact visible date; date-free titles; 17 unique exact-title 1200x630 thumbnails; separate registries/routes/indexes; sidebars, sitemap, and related content; no duplicate substantive prose.');
