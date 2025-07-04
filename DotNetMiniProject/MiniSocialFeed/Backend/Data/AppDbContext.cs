using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<PostLike> Likes { get; set; }
        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Table naming conventions
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Post>().ToTable("Posts");
            modelBuilder.Entity<Comment>().ToTable("Comments");
            modelBuilder.Entity<Contact>().ToTable("Contacts");

            // Optional: Seed demo users for testing
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    FirstName = "Admin",
                    LastName = "User",
                    Email = "admin@demo.com",
                    PasswordHash = "admin123", // In real apps, store hashed passwords
                    Role = "admin",
                    CreatedAt = DateTime.UtcNow
                },
                new User
                {
                    Id = 2,
                    FirstName = "Normal",
                    LastName = "User",
                    Email = "user@demo.com",
                    PasswordHash = "user123",
                    Role = "user",
                    CreatedAt = DateTime.UtcNow
                }
            );

            // You can also configure relationships here in the future
            // e.g., modelBuilder.Entity<Post>().HasMany(...);

            modelBuilder.Entity<PostLike>()
                .HasKey(pl => new { pl.PostId, pl.UserId });
        }
    }
}
