namespace Backend.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int AuthorId { get; set; }
        public User? Author { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
} 
