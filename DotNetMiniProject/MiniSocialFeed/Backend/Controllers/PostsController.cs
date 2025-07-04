using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/posts")]
    public class PostsController : ControllerBase
    {
        private readonly AppDbContext _db;
        public PostsController(AppDbContext db) => _db = db;

        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            var posts = await _db.Posts
                .Include(p => p.Author)
                .Include(p => p.Comments)
                .ThenInclude(c => c.Author)
                .Include(p => p.Likes)
                .Select(p => new {
                    p.Id,
                    p.Content,
                    p.Image,
                    p.CreatedAt,
                    Author = p.Author,
                    Comments = p.Comments,
                    Likes = p.Likes,
                    LikesCount = p.Likes.Count,
                    CommentsCount = p.Comments.Count
                })
                .ToListAsync();
            return Ok(posts);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePost(Post post)
        {
            _db.Posts.Add(post);
            await _db.SaveChangesAsync();
            return Ok(post);
        }

        [HttpPut("{id}/likes")]
        public async Task<IActionResult> LikePost(int id, [FromBody] int userId)
        {
            var post = await _db.Posts.Include(p => p.Likes).FirstOrDefaultAsync(p => p.Id == id);
            if (post == null) return NotFound();

            var existingLike = post.Likes.FirstOrDefault(like => like.UserId == userId);
            if (existingLike != null)
            {
                _db.Likes.Remove(existingLike);
            }
            else
            {
                var newLike = new PostLike { PostId = id, UserId = userId };
                _db.Likes.Add(newLike);
            }
            await _db.SaveChangesAsync();

            var updatedLikesCount = await _db.Likes.CountAsync(like => like.PostId == id);
            return Ok(new { LikesCount = updatedLikesCount });
        }

        [HttpPost("{id}/comments")]
        public async Task<IActionResult> AddComment(int id, Comment comment)
        {
            var post = await _db.Posts.Include(p => p.Comments).FirstOrDefaultAsync(p => p.Id == id);
            if (post == null) return NotFound();
            post.Comments.Add(comment);
            await _db.SaveChangesAsync();
            return Ok(comment);
        }

        [HttpDelete("{postId}/comments/{commentId}")]
        public async Task<IActionResult> DeleteComment(int postId, int commentId)
        {
            var post = await _db.Posts.Include(p => p.Comments).FirstOrDefaultAsync(p => p.Id == postId);
            if (post == null) return NotFound();

            var comment = post.Comments.FirstOrDefault(c => c.Id == commentId);
            if (comment == null) return NotFound();

            _db.Comments.Remove(comment);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            var post = await _db.Posts
                .Include(p => p.Likes)
                .Include(p => p.Comments)
                .FirstOrDefaultAsync(p => p.Id == id);
            if (post == null) return NotFound();
            _db.Likes.RemoveRange(post.Likes);
            _db.Comments.RemoveRange(post.Comments);
            _db.Posts.Remove(post);
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
}

