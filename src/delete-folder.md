# Delete Folder PowerShell Script

## Overview

This PowerShell script provides a secure and interactive approach to deleting directories with recursive content. It implements a user-friendly command-line interface that guides users through the deletion process with confirmation prompts and comprehensive error handling. The script performs validation checks to ensure the target path exists and is a directory before proceeding with deletion. This utility is particularly valuable for system administrators, developers cleaning up workspace environments, or anyone needing a safe way to remove directory structures while maintaining full control over the operation through interactive prompts.

```powershell
# Prompt the user for the full path of the folder to delete
$folderPath = Read-Host "Enter the full path of the folder you want to delete"

# Check if the entered path is a valid folder
if (Test-Path -Path $folderPath -PathType Container) {
    # Ask for confirmation from the user
    $confirm = Read-Host "Are you sure you want to delete this folder and all its contents? (Y/N)"
    if ($confirm -eq "Y") {
        try {
            Remove-Item -Path $folderPath -Recurse -Force
            Write-Output "Folder successfully deleted: $folderPath"
        }
        catch {
            Write-Output "An error occurred: $_"
        }
    }
    else {
        Write-Output "Deletion canceled."
    }
} else {
    Write-Output "The provided path is not a valid folder: $folderPath"
}
```
