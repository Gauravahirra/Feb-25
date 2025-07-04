using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/contact")]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _db;
        public ContactController(AppDbContext db) => _db = db;

        [HttpPost]
        public async Task<IActionResult> SubmitMessage(Contact contact)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _db.Contacts.Add(contact);
            await _db.SaveChangesAsync();
            
            return Ok(new { message = "Message sent successfully!", id = contact.Id });
        }

        [HttpGet]
        public async Task<IActionResult> GetMessages()
        {
            var messages = await _db.Contacts
                .OrderByDescending(c => c.CreatedAt)
                .ToListAsync();
            return Ok(messages);
        }

        [HttpPut("{id}/read")]
        public async Task<IActionResult> MarkAsRead(int id)
        {
            var message = await _db.Contacts.FindAsync(id);
            if (message == null) return NotFound();

            message.IsRead = true;
            message.ReadAt = DateTime.UtcNow;
            await _db.SaveChangesAsync();
            
            return Ok(new { message = "Message marked as read" });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessage(int id)
        {
            var message = await _db.Contacts.FindAsync(id);
            if (message == null) return NotFound();

            _db.Contacts.Remove(message);
            await _db.SaveChangesAsync();
            
            return Ok(new { message = "Message deleted successfully" });
        }
    }
} 