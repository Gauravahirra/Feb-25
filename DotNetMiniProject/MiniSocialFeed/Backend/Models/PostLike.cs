using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    [Table("Likes")]
    public class PostLike
    {
        public int PostId { get; set; }
      
        [System.Text.Json.Serialization.JsonIgnore]
        public Post Post { get; set; }
        public int UserId { get; set; }
        // Optionally, add a User navigation property if needed
    }
} 