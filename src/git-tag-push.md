# Git Tag and Push Script

```bash
#!/bin/bash

# Check if version tag is provided
if [ -z "$1" ]; then
  echo "Please provide a version tag (e.g., v1.0.0)"
  exit 1
fi

VERSION=$1

# Ensure we're on main branch
git checkout main

# Pull latest changes
git pull origin main

# Create and push tag
git tag -a $VERSION -m "Release $VERSION"
git push origin $VERSION

# Push all changes
git push origin main

echo "Successfully tagged and pushed version $VERSION"
```

## Usage

```bash
# Make the script executable
chmod +x git-tag-push.sh

# Run the script with a version number
./git-tag-push.sh v1.0.0
```
