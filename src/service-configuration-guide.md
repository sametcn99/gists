# Service Configuration Guide

## Overview

This configuration template provides a comprehensive setup guide for microservice architecture implementation. It establishes standardized patterns for service discovery, health checking, logging, and monitoring in distributed systems. The configuration includes environment-specific settings, security parameters, and integration points with external services. This guide is essential for teams implementing microservices, ensuring consistent configuration across services while maintaining security and operational best practices.

```csharp
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace MyApp.Services
{
    public static class ServiceConfiguration
    {
        public static IServiceCollection ConfigureServices(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            // Register configuration
            services.Configure<AppSettings>(
                configuration.GetSection(nameof(AppSettings)));

            // Register HTTP clients
            services.AddHttpClient();
            services.AddHttpClient("github", c =>
            {
                c.BaseAddress = new Uri("https://api.github.com/");
                c.DefaultRequestHeaders.Add("Accept", "application/vnd.github.v3+json");
                c.DefaultRequestHeaders.Add("User-Agent", "MyApp");
            });

            // Register services with their interfaces
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IAuthenticationService, AuthenticationService>();
            services.AddScoped<IEmailService, EmailService>();
            services.AddScoped<ICacheService, RedisCacheService>();

            // Register database context
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection")));

            // Register background services
            services.AddHostedService<BackgroundJobService>();
            services.AddHostedService<QueueProcessorService>();

            // Register logging
            services.AddLogging(builder =>
            {
                builder.AddConsole();
                builder.AddDebug();
                builder.AddApplicationInsights();
            });

            // Register cross-cutting concerns
            services.AddAutoMapper(typeof(MappingProfile));
            services.AddMediatR(typeof(Startup));
            services.AddValidatorsFromAssembly(typeof(Startup).Assembly);

            // Register options
            services.Configure<JwtOptions>(
                configuration.GetSection("JwtSettings"));
            services.Configure<SmtpOptions>(
                configuration.GetSection("SmtpSettings"));

            return services;
        }
    }
}
```
