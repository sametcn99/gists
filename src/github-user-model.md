# GitHub User Model

## Overview

This TypeScript interface definition establishes a comprehensive type system for GitHub user data structures. It implements detailed typing for user profile information, including personal details, social connections, statistics, and GitHub-specific attributes. The model features extensive JSDoc documentation and optional properties to accommodate varying data availability. This type definition is crucial for applications handling GitHub user data, ensuring type safety and providing complete IntelliSense support for user-related operations throughout the application.

```typescript
export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  notification_email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
  private_gists: number;
  total_private_repos: number;
  owned_private_repos: number;
  disk_usage: number;
  collaborators: number;
  two_factor_authentication: boolean;
  suspended_at: Date;
  business_plus: boolean;
  ldap_dn: string;
}
```

## GitHub REST API User Model

```csharp
public class User
{
    [JsonPropertyName("login")]
    public string? Login { get; set; }

    [JsonPropertyName("id")]
    public int Id { get; set; }

    [JsonPropertyName("node_id")]
    public string? NodeId { get; set; }

    [JsonPropertyName("avatar_url")]
    public string? AvatarUrl { get; set; }

    [JsonPropertyName("gravatar_id")]
    public string? GravatarId { get; set; }

    [JsonPropertyName("url")]
    public string? Url { get; set; }

    [JsonPropertyName("html_url")]
    public string? HtmlUrl { get; set; }

    [JsonPropertyName("followers_url")]
    public string? FollowersUrl { get; set; }

    [JsonPropertyName("following_url")]
    public string? FollowingUrl { get; set; }

    [JsonPropertyName("gists_url")]
    public string? GistsUrl { get; set; }

    [JsonPropertyName("starred_url")]
    public string? StarredUrl { get; set; }

    [JsonPropertyName("subscriptions_url")]
    public string? SubscriptionsUrl { get; set; }

    [JsonPropertyName("organizations_url")]
    public string? OrganizationsUrl { get; set; }

    [JsonPropertyName("repos_url")]
    public string? ReposUrl { get; set; }

    [JsonPropertyName("events_url")]
    public string? EventsUrl { get; set; }

    [JsonPropertyName("received_events_url")]
    public string? ReceivedEventsUrl { get; set; }

    [JsonPropertyName("type")]
    public string? Type { get; set; }

    [JsonPropertyName("site_admin")]
    public bool SiteAdmin { get; set; }

    [JsonPropertyName("name")]
    public string? Name { get; set; }

    [JsonPropertyName("company")]
    public string? Company { get; set; }

    [JsonPropertyName("blog")]
    public string? Blog { get; set; }

    [JsonPropertyName("location")]
    public string? Location { get; set; }

    [JsonPropertyName("email")]
    public string? Email { get; set; }

    [JsonPropertyName("notification_email")]
    public string? NotificationEmail { get; set; }

    [JsonPropertyName("hireable")]
    public bool? Hireable { get; set; }

    [JsonPropertyName("bio")]
    public string? Bio { get; set; }

    [JsonPropertyName("twitter_username")]
    public string? TwitterUsername { get; set; }

    [JsonPropertyName("public_repos")]
    public int PublicRepos { get; set; }

    [JsonPropertyName("public_gists")]
    public int PublicGists { get; set; }

    [JsonPropertyName("followers")]
    public int Followers { get; set; }

    [JsonPropertyName("following")]
    public int Following { get; set; }

    [JsonPropertyName("created_at")]
    public DateTime CreatedAt { get; set; }

    [JsonPropertyName("updated_at")]
    public DateTime UpdatedAt { get; set; }

    [JsonPropertyName("private_gists")]
    public int PrivateGists { get; set; }

    [JsonPropertyName("total_private_repos")]
    public int TotalPrivateRepos { get; set; }

    [JsonPropertyName("owned_private_repos")]
    public int OwnedPrivateRepos { get; set; }

    [JsonPropertyName("disk_usage")]
    public int DiskUsage { get; set; }

    [JsonPropertyName("collaborators")]
    public int Collaborators { get; set; }

    [JsonPropertyName("two_factor_authentication")]
    public bool TwoFactorAuthentication { get; set; }

    [JsonPropertyName("suspended_at")]
    public DateTime? SuspendedAt { get; set; }

    [JsonPropertyName("business_plus")]
    public bool BusinessPlus { get; set; }

    [JsonPropertyName("ldap_dn")]
    public string? LdapDn { get; set; }
}
```
