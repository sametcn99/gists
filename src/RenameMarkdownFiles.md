# Rename Markdown Files Utility

```csharp
using System;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Diagnostics;
using System.Windows.Forms;

public class MarkdownFileRenamer
{
    private readonly string selectedFolderPath;

    public MarkdownFileRenamer(string folderPath)
    {
        selectedFolderPath = folderPath;
    }

    // Method to rename and move files
    private void RenameFiles()
    {
        // Get the parent folder of the selected folder
        string parentFolder = Path.GetDirectoryName(selectedFolderPath);
        // Create a new folder for the renamed files
        string newFolderPath = Path.Combine(parentFolder, "RenamedFiles");

        // Check if the new folder doesn't exist, and if not, create it
        if (!Directory.Exists(newFolderPath))
        {
            Directory.CreateDirectory(newFolderPath);
        }

        // Check if the selected folder exists
        if (Directory.Exists(selectedFolderPath))
        {
            // Get a list of Markdown files in the selected folder
            string[] markdownFiles = Directory.GetFiles(selectedFolderPath, "*.md");
            foreach (var markdownFile in markdownFiles)
            {
                // Read the content of the Markdown file
                string markdownContent = File.ReadAllText(markdownFile);
                string newFileName = GetTitle(markdownContent);

                if (!string.IsNullOrEmpty(newFileName))
                {
                    // Create a new file path for the renamed file
                    string newFilePath = Path.Combine(newFolderPath, newFileName + ".md");
                    // Copy the original file to the new location
                    try
                    {
                        File.Copy(markdownFile, newFilePath);
                    }
                    catch (Exception)
                    {
                        MessageBox.Show("Files already exist");
                        break;
                    }
                }
            }
            // Open the new folder with Windows Explorer
            Process.Start("explorer.exe", newFolderPath);
        }
    }

    // Method used to extract the title from the content of a Markdown file
    static string GetTitle(string content)
    {
        // Split the content into lines
        string[] lines = content.Split(new string[] { "\r\n", "\n" }, StringSplitOptions.None);
        if (lines.Length >= 2)
        {
            // Extract the second line as the title line
            string titleLine = lines[1];
            if (titleLine.Length >= 10)
            {
                // Remove unnecessary characters from the title
                titleLine = titleLine.Remove(0, 8);
                titleLine = titleLine.Remove(titleLine.Length - 1);
                // Sanitize the title by removing special characters
                string sanitizedString = SanitizeString(titleLine);
                return sanitizedString;
            }
            else
            {
                Console.WriteLine("Something is wrong.");
            }
        }
        else
        {
            Console.WriteLine("Title not found.");
        }
        return "";
    }

    // Method to sanitize a string by removing special characters
    static string SanitizeString(string input)
    {
        // Replace Turkish characters with their English equivalents
        string result = input
            .Replace("ç", "c")
            .Replace("Ç", "C")
            .Replace("ğ", "g")
            .Replace("Ğ", "G")
            .Replace("ı", "i")
            .Replace("İ", "I")
            .Replace("ö", "o")
            .Replace("Ö", "O")
            .Replace("ş", "s")
            .Replace("Ş", "S")
            .Replace("ü", "u")
            .Replace("Ü", "U");

        // Replace other characters with "-"
        result = new string(result
            .ToCharArray()
            .Select(c => char.IsLetterOrDigit(c) || c == '-' ? c : '-')
            .ToArray());

        // Replace multiple "-" signs with a single "-"
        result = Regex.Replace(result, @"-+", "-");

        return result;
    }
}
```
