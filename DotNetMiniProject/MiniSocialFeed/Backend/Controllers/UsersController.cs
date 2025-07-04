using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _db;
        public UsersController(AppDbContext db) => _db = db;

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _db.Users.FindAsync(id);
            if (user == null) return NotFound();
            return Ok(user);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _db.Users.ToListAsync();
            return Ok(users);
        }

        //[HttpPut("{id}")]
        ////public async Task<IActionResult> UpdateUser(int id, User updated)
        ////{
        ////    // Debug logging: log incoming payload
        ////    System.Console.WriteLine($"UpdateUser called for id={id} with: FirstName={updated.FirstName}, LastName={updated.LastName}, Email={updated.Email}, Role={updated.Role}");

        ////    if (string.IsNullOrEmpty(updated.FirstName) || string.IsNullOrEmpty(updated.LastName) || string.IsNullOrEmpty(updated.Email) || string.IsNullOrEmpty(updated.Role))
        ////    {
        ////        return BadRequest(new { error = "All fields (FirstName, LastName, Email, Role) are required." });
        ////    }

        ////    var user = await _db.Users.FindAsync(id);
        ////    if (user == null) return NotFound();
        ////    user.FirstName = updated.FirstName;
        ////    user.LastName = updated.LastName;
        ////    user.Email = updated.Email;
        ////    user.Role = updated.Role;
        ////    // Only update PasswordHash if a new value is provided (optional)
        ////    if (!string.IsNullOrEmpty(updated.PasswordHash))
        ////    {
        ////        user.PasswordHash = updated.PasswordHash;
        ////    }
        ////    await _db.SaveChangesAsync();
        ////    // Debug logging: log updated user
        ////    System.Console.WriteLine($"User updated: Id={user.Id}, FirstName={user.FirstName}, LastName={user.LastName}, Email={user.Email}, Role={user.Role}");
        ////    return Ok(new { user.Id, user.FirstName, user.LastName, user.Email, user.Role });
        ////}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] User updated)
        {
            Console.WriteLine($"UpdateUser called for id={id} with: FirstName={updated.FirstName}, LastName={updated.LastName}, Email={updated.Email}, Role={updated.Role}");

            if (string.IsNullOrEmpty(updated.FirstName) || string.IsNullOrEmpty(updated.LastName) ||
                string.IsNullOrEmpty(updated.Email) || string.IsNullOrEmpty(updated.Role))
            {
                return BadRequest(new { error = "All fields (FirstName, LastName, Email, Role) are required." });
            }

            var user = await _db.Users.FindAsync(id);
            if (user == null) return NotFound();

            user.FirstName = updated.FirstName;
            user.LastName = updated.LastName;
            user.Email = updated.Email;
            user.Role = updated.Role;

            if (!string.IsNullOrWhiteSpace(updated.PasswordHash))
            {
                user.PasswordHash = updated.PasswordHash;
            }

            await _db.SaveChangesAsync();

            Console.WriteLine($"User updated: Id={user.Id}, FirstName={user.FirstName}, LastName={user.LastName}, Email={user.Email}, Role={user.Role}");

            return Ok(new
            {
                user.Id,
                user.FirstName,
                user.LastName,
                user.Email,
                user.Role
            });
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _db.Users.FindAsync(id);
            if (user == null) return NotFound();

            // Delete user's posts (and their likes/comments)
            var posts = await _db.Posts
                .Include(p => p.Likes)
                .Include(p => p.Comments)
                .Where(p => p.AuthorId == id)
                .ToListAsync();
            foreach (var post in posts)
            {
                _db.Likes.RemoveRange(post.Likes);
                _db.Comments.RemoveRange(post.Comments);
                _db.Posts.Remove(post);
            }

            // Delete user's likes
            var likes = _db.Likes.Where(l => l.UserId == id);
            _db.Likes.RemoveRange(likes);

            // Delete user's comments
            var comments = _db.Comments.Where(c => c.AuthorId == id);
            _db.Comments.RemoveRange(comments);

            _db.Users.Remove(user);
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
} 