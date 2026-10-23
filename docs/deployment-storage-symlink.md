# Deployment note: public storage symlink on cPanel

## Context

The Laravel repository is deployed through cPanel Git Version Control.

- Repository path: `/home/mediast1/repositories/media-store-rtl`
- Git branch at the time of investigation: `main`
- Live domain: `https://web2022.ir`
- `/home/mediast1/public_html` is a symlink to `/home/mediast1/public`.
- The live web root is therefore `/home/mediast1/public`, which is separate from the repository's `/home/mediast1/repositories/media-store-rtl/public`.

## Root cause and fix applied on the server

The live web root had a stale `storage` symlink:

```text
/home/mediast1/public/storage -> /home/mediast1/storage/app/public
```

The actual uploaded image files are in the repository at:

```text
/home/mediast1/repositories/media-store-rtl/storage/app/public/images/
```

The live web-root symlink was corrected to:

```text
/home/mediast1/public/storage -> /home/mediast1/repositories/media-store-rtl/storage/app/public
```

After this change, this command returned HTTP 200:

```bash
curl -sS -o /dev/null -w "HTTP %{http_code}\n" https://web2022.ir/storage/images/samaneh-jame-anbarha.svg
```

The image URL then loaded successfully:
- `https://web2022.ir/storage/images/samaneh-jame-anbarha.svg`

## Important for future maintenance

1. The repository's `public/storage` symlink and the live site's `/home/mediast1/public/storage` are separate paths. Fixing the symlink inside the repository does not automatically fix the live web-root symlink.
2. If storage image URLs return 403 or 404 again, inspect both symlinks before changing permissions or `.htaccess`:
   ```bash
   readlink /home/mediast1/repositories/media-store-rtl/public/storage
   readlink /home/mediast1/public/storage
   ```
3. Expected target for the live symlink:
   `/home/mediast1/repositories/media-store-rtl/storage/app/public`
4. Do not use `chmod 777` as a workaround. Check the actual document root, symlink target, directory traversal permissions, and host security rules.
5. The image files added for the blog are:
   - `tax-compliance-1405.svg`
   - `samaneh-jame-tejarat.svg`
   - `samaneh-jame-anbarha.svg`
   They should be available under `/storage/images/<filename>` when the live symlink is correct.

## Verification status

Confirmed after the live symlink fix: `samaneh-jame-anbarha.svg` returned HTTP 200. The other two image URLs should be checked separately if needed.
