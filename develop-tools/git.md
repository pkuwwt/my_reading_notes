
# Git Recipes

## Branch

### Delete local branch

```
git branch -d my-branch
```

### Delete remote branch

```
git push origin --delete my-remote-branch
```

### Create local branch

```
git checkout -b new-branch
```

### Create remote branch

```
git checkout my-local-branch
git push -u origin my-remote-branch
```

### Switch to a remote branch

```
git checkout -b local_branch_name origin/remote-branch-name
```

## Revise commit
### Revise last commit message

```
git commit --amend -m 'new commit message'
```

### Add new files to last commit

```
git add new-file.txt
git commit --amend --no-edit
```

### Revise author of last commit

```
git commit --amend --author "new author"
```

NB: only use `amend` in local repositories.


## Rebasing

A diagram that explains `git checkout feature && git rebase release`:

```
release branch: commit1 -- commit2 -- commit3
feature branch: commit4 -- commit5
resulting branch: commit1 -- commit2 -- commit3 -- commit4 -- commit5
```

The `git rebase release` will do:

  1. point to head of `release` branch: `commit3`
  2. add `commit4` and `commit5` one by one, and resolve the conflicts manually
  
So different from `git merge`, which is often used to add your commits back to master branch, `git branch` doesn't generate new commits, which is suitable to keep your local repository update with remote repository.


## Tag

  * add tag: `git tag -a v1.0 -m 'version 1.0'`
  * show tag: `git show v1.0`
  * show all tags: `git tag`
  * push tag to remote: `git push origin v1.0`
  * push all tags to remote: `git push --tags`
  * Change to tag: `git checkout tag_name`
  * Back to newest commit: `git checkout master`

## References

  * [How to become a Git expert](https://medium.freecodecamp.org/how-to-become-a-git-expert-e7c38bf54826)
