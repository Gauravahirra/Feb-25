using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Contact
    {
        public int Id { get; set; }
        
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        
        [Required]
        [EmailAddress]
        [StringLength(255)]
        public string Email { get; set; }
        
        [Required]
        [StringLength(200)]
        public string Subject { get; set; }
        
        [Required]
        [StringLength(2000)]
        public string Message { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public bool IsRead { get; set; } = false;
        
        public DateTime? ReadAt { get; set; }
    }
} 