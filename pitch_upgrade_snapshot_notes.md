# Pitch Upgrade Rollback Snapshot

Created: 20260610-175203 UTC

## Snapshot references

| Snapshot | Branch | Tag | Commit |
|---|---|---|---|
| Current live GitHub Pages version | `rollback/live-before-pitch-upgrade-20260610-175203` | `rollback-live-before-pitch-upgrade-20260610-175203` | `bc20a451daab6ff651a3693037cafcdc972efc3a` |
| Current source version | `rollback/source-before-pitch-upgrade-20260610-175203` | `rollback-source-before-pitch-upgrade-20260610-175203` | `1e77df5853288d4fc96d410246a982ccfe45f508` |

## Revert live site if needed

To revert GitHub Pages to the pre-upgrade live version:

```bash
git fetch origin
git checkout gh-pages
git reset --hard bc20a451daab6ff651a3693037cafcdc972efc3a
git push --force-with-lease origin gh-pages
```

## Revert source branch if needed

To restore the source branch to the pre-upgrade version:

```bash
git fetch origin
git checkout premium-visual-redesign-20260610
git reset --hard 1e77df5853288d4fc96d410246a982ccfe45f508
git push --force-with-lease origin premium-visual-redesign-20260610
```
