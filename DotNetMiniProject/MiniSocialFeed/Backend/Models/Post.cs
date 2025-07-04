using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Content { get; set; }


        public string? Image { get; set; }
        public User? Author { get; set; }

        public int AuthorId { get; set; }
     
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public List<Comment> Comments { get; set; } = new();

        public List<PostLike> Likes { get; set; } = new();
    }
}
