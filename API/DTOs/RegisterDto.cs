using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
  public class RegisterDto
  {
    [Required]
    [EmailAddress]
    // [RegularExpression("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$")]
    public string Email { get; set; }

    [Required]
    [RegularExpression("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()])(?!.*\\s).{8,}$", ErrorMessage = "Minimum 8 characters and at least one uppercase letter, one lowercase letter, one digit, and one special character")]
    public string Password { get; set; }

    [Required]
    public string DisplayName { get; set; }

    [Required]
    public string Username { get; set; }
  }
}