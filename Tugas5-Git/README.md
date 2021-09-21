## 01-the-basics
link : https://github.com/sabrinalydias/Tugas5-Git-01/tree/master

## 02-porfolio-and-cv
link : https://github.com/sabrinalydias/Tugas5-Git-02

1. Membuat sebuah folder kosong dengan namamu sendiri
mkdir sasab

2. Membuat sebuah file dengan nama README.md, isi file tersebut dengan kalimat
"Halo perkenalkan aku halaman utama"
touch README.md
echo -e "Halo perkenalkan aku halaman utama\n\n" >> README.md

3. Insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan commit dengan pesan
"Inisialisasi Git Repository"
git init .
git add .
git commit -m "Inisialisasi Git Repository"

4. Buat branch baru dengan nama cv, hal ini berguna agar histori kita tidak tercampur
git branch cv

5.Pindah branch kedalam cv, kemudian buat file dengan nama cv.txt dan isi file tersebut dengan kalimat:
"Ini adalah file CV"
git checkout cv
touch cv.txt
echo "Ini adalah file CV >> cv.txt

6.Kemudian dokumentasikan menggunakan commit dengan pesan
"Inisialisasi CV"
git add .
git commit -m "inisialisasi cv"

7.Tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan commit
echo "Google" >> cv.txt
git add .
git commit -m "tambah Google"

echo "BI" >> cv.txt
git add .
git commit -m "BI"

echo "Shopee" >> cv.txt
git add .
git commit -m "Shopee"
Kembali ke branch master
git checkout master

8. Ubah file README.md menjadi
Halo perkenalkan aku halaman utama
Ini adalah update pertama pada branch master
echo "Ini adalah update pertama pada branch master" >> README.md

9. Jangan lupa untuk mendokumentasikannya menggunakan commit dengan pesan
"update master pertama"
git add .
git commit -m "update master pertama"

10.Gabungkan branch cv kedalam branch master menggunakan perintah git merge
git merge cv

11. Unggah Git Repository tersebut kedalam GitHub
git remote add origin https://github.com/rosaamalia/05-Git-and-Github.git
git push origin master

## 03-branch-and-merge
#### 1. What does `git clean` do?
`git-clean` - Remove untracked files from the working tree
Cleans the working tree by recursively removing files that are not under version control, starting from the current directory.
Normally, only files unknown to Git are removed, but if the -x option is specified, ignored files are also removed. This can, for example, be useful to remove all build products.
If any optional `<path>...` arguments are given, only those paths are affected.

#### 2. What do the `-d` and `-f` flags for `git clean` do?
`-d` 
Normally, when no `<path>` is specified, git clean will not recurse into untracked directories to avoid removing too much. Specify -d to have it recurse into such directories as well. If any paths are specified, -d is irrelevant; all untracked files matching the specified paths (with exceptions for nested git directories mentioned under --force) will be removed.

`-f`
`--force`
If the Git configuration variable clean.requireForce is not set to false, git clean will refuse to delete files or directories unless given -f or -i. Git will refuse to modify untracked nested git repositories (directories with a .git subdirectory) unless a second -f is given.

#### 3. What `git` command creates a branch?
`git-branch` - List, create, or delete branches
`git branch <branch name>`

#### 4. What is the difference between a fast-forward and recursive merge?
fast-forward
Often the current branch head is an ancestor of the named commit. This is the most common case especially when invoked from `git pull`: you are tracking an upstream repository, you have committed no local changes, and now you want to update to a newer upstream revision. In this case, a new commit is not needed to store the combined history; instead, the HEAD (along with the index) is updated to point at the named commit, without creating an extra merge commit.

recursive 
This can only resolve two heads using a 3-way merge algorithm. When there is more than one common ancestor that can be used for 3-way merge, it creates a merged tree of the common ancestors and uses that as the reference tree for the 3-way merge. This has been reported to result in fewer merge conflicts without causing mismerges by tests done on actual merge commits taken from Linux 2.6 kernel development history. Additionally this can detect and handle merges involving renames, but currently cannot make use of detected copies. This is the default merge strategy when pulling or merging one branch.<br>

#### 5. What `git` command changes to another branch?
`git checkout <branch name>`

#### 6. How do you remove modified or deleted files from the working directory?
`git add -u` 

#### 7. What `git` command deletes a branch?
`git branch -b <branchname>`

#### 8. What does the `git diff` command do?
`git-diff` Show changes between the working tree and the index or a tree, changes between the index and a tree, changes between two trees, changes resulting from a merge, changes between two blob objects, or changes between two files on disk. 

#### 9. How do you remove files from the staging area?
`git-rm` - Remove files from the working tree and from the index 

#### 10. How do merge conflicts happen? 
A merge conflict happens when two branches both modify the same region of a file and are subsequently merged. Git can't know which of the changes to keep, and thus needs human intervention to resolve the conflict.

## 04-more-advanced
#### 1. What is the difference between git reset and git revert. When would you use one over the other?
Git reset
This command is somewhat complicated. It actually does a couple of different things depending on how it is invoked. The command modifies the index (the so-called “staging area”). 
It can also change which commit a branch head is currently pointing at. This command may alter existing history (by changing the commit that a branch references).

Git revert
This command can be considered an ‘undo’ type command. However, it is not a traditional undo operation. Instead of removing the commit from the project history, it figures out 
how to invert the changes introduced by the commit and appends a new commit with the resulting inverse content. This prevents Git from losing history, which is important for the 
integrity of your revision history and for reliable collaboration.

Which one to use?
Using git log when using git revert will have all the history of commits. If you want to remove the commits from the history, then revert is not a good choice, but if you want to 
maintain the commit changes in the history, then revert is the suitable command instead of reset.

#### 2. What is the difference between git merge and git rebase. When would you use one over the other?
Git merge
Git merge is a command that allows you to merge branches from Git. Merging is a common practice for developers. Whether branches are created for testing, bug fixes, or other reasons, 
merging commits changes to another branch. It takes the contents of a source branch and integrates it with a target branch.

When you use Git merge, only the target branch is changed. The source branch history remains. Advocates of Git merge like it because it preserves the history of a branch. 

Git rebase
Git rebase is a command that allows developers to integrate changes from one branch to another. Git rebase compresses all the changes into a single “patch.” Then it integrates the 
patch onto the target branch. Unlike merging, rebasing flattens history. It transfers the completed work from one branch to another. In the process, unwanted history is eliminated.

Advocates of Git rebase like it because it simplifies their review process.

Difference?
Git rebase and merge both integrate changes from one branch into another. Where they differ is how it's done. Git rebase moves a feature branch into a master. Git merge adds a 
new commit, preserving the history.

Which one to use?
If you're working alone or on a small team, use rebase. If you're working with a big team, use merge. 

#### 3. What is the difference between git stash pop and git stash apply. When would you use one over the other?
The key difference between git stash pop and apply involves the stash history. When a developer uses the git stash apply command, the most recently saved stash overwrites files in the current working tree but leaves 
the stash history alone. In contrast, the pop command restores files but then deletes the applied stash. If a developer ever feels the need to use that restored stash again, it will be saved in the local file system.

Think of the git stash pop command as a two-step process. It pulls the most recent stash from history, makes the appropriate changes to files in the local workspace and then deletes that entry from the stash history. 
Once the git stash pop command is successfully invoked, the stash is permanently deleted and can never be accessed again.

Which one to use?
Developers shouldn't shelve Git changes in the stash too often. Use the stash for temporary, short-term storage of file system changes. If changes must be stored over a prolonged period, commit those changes to a 
topic branch.

As such, the idea of a keeping a local stash around for an extended time runs counter to the basic philosophy of distributed version control with Git. That's why it's recommended that a developer use git stash pop 
to restore conflict-free files instead of the complementary git stash apply command.


#### 4. What kinds of things can you do in interactive mode when rebasing?
Interactive rebasing can be used for changing commits in many ways such as editing, deleting, and squashing. To tell Git where to start the interactive rebase, use the SHA-1 or index of the commit that immediately 
precedes the commit you want to modify. To start an interactive rebase, we need to tell Git which commits we want to modify. We do this by referencing the commit immediately prior to the earliest commit we want to 
modify. Or, put simply, we reference “the last commit [we] want to retain as-is,”

But be careful, If you modify a commit, that commit and all successive commits will have new SHA-1’s. This won’t affect anything if the commits that you have modified haven’t been pushed to a remote branch. However, 
if you did in fact complete an interactive rebase on commits that were already pushed to a remote branch and then pushed your branch again you would see an error.

## 05-submit-my-change
link : https://github.com/impactbyte/tech4impact-students-bio/pull/77

1. Fork repository GitHub https://github.com/impactbyte/tech4impact-students-bio.git menggunakan akun Github kamu
2. Clone remote repository dari hasil fork tersebut. Jangan clone dari repository originalnya. 
git clone https://github.com/sabrinalydias/tech4impact-students-bio/tree/sabrinalydias

3. Buatlah branch baru dengan nama lengkap kamu. Misalnya david-winalda. Jangan melakukan perubahan pada branch master. 
git branch sabrinalydias

4. Checkout ke dalam branch tersebut yang telah kamu buat image
git checkout sabrinalydias

5. Buatlah 1 file format .md dengan nama lengkap kamu. Contoh davidwinalda.md image
nano sabrinalydias.md

6. Isi file tersebut davidwinalda.md dengan konten di bawah ini: 
#isi file

7. Masukkan file .md tersebut ke dalam staging area image
git add sabrinalydias.md

8. Commit dengan memberikan pesan nama file .md kamu image
git commit -m "sabrinalydias.md"

9. Merge branch yang telah kamu buat ke dalam branch master image
git checkout master
git merge sabrinalydias

10. Push ke dalam branch master image
git push origin sabrinalydias

11. Lakukan pull request dari GitHub Repository yang telah kamu fork untuk digabungkan ke dalam branch master pada GitHub Repository aslinya. 
https://github.com/impactbyte/tech4impact-students-bio/pull/77

Screenshot :
![image](https://user-images.githubusercontent.com/83162422/134213872-e64ca2d3-b4f4-44ae-b7ab-58b1b5df0fca.png)
![image](https://user-images.githubusercontent.com/83162422/134214049-6e88148e-007b-4b4c-b65d-188c8cc4534e.png)
![image](https://user-images.githubusercontent.com/83162422/134214113-d38fab6c-6695-4e70-bc63-95b73599448a.png)

