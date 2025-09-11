# Learn-DSA

## Contributing Guidelines

Welcome to the DSA Repository 🎉
This repo is a collaborative effort where we solve Data Structures & Algorithms problems in multiple languages. Please follow these rules to keep everything organized.

## 📂 Repository Structure

Each problem lives in its own folder, grouped by topic. Inside, we keep language-specific subfolders.

```
Learn-DSA/
│
├── PROBLEM_ONE/
│   ├── two_sum/
│   │   ├── cpp/
│   │   │   └── solution.cpp
│   │   ├── python/
│   │   │   └── solution.py
│   │   ├── java/
│   │   │   └── Solution.java
│   │   └── README.md   <-- problem statement + approach
│   ├── inorder_traversal/
│   │   ├── python/
│   │   │   └── solution.py
│   │   └── README.md
├── PROBLEM_TWO/
│   ├── inorder_traversal/
│   │   ├── python/
│   │   │   └── solution.py
│   │   └── README.md
│
└── README.md   <-- repo overview

```

## How to Contribute
### 1. Fork & Clone

   ```bash
   git clone https://github.com/4ssh1/Learn-DSA.git
   cd Learn-DSA
   ```


### 2. Create a Branch

Name your branch after your username + problem:

```bash
   git checkout -b <username>-<problem-name>
```
Example:

git checkout -b alice-two-sum



### 3. Add Your Solution

Navigate to the correct topic folder (e.g. arrays/).

### TIP

Add comments top explain your approach, time and space complexity


### 4. Commit

Use clear commit messages:

```bash
   git add .
   git commit -m "Add [arrays/two_sum] solution in Python"

```


### 5. Push & Pull Request

```bash
   git push origin <branch-name>

```

### Then open a Pull Request (PR) into main.


## ✅ Rules

- One problem per folder → Multiple solutions go inside language subfolders.

- Don’t overwrite others’ work → If the folder already exists, just add your solution inside the correct language folder.

- Commit messages should be descriptive.

- Keep code clean & readable → Use proper formatting.


## 👥 Code Reviews

All PRs will be reviewed before merging.

Reviewers may request changes for formatting, naming, or structure.

Once approved, your PR will be merged into main.
