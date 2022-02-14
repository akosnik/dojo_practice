using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models
{
  public class User
  {
    [Required]
    [MinLength(2)]
    [MaxLength(32)]
    [Display(Name = "First Name")]
    public string FirstName { get; set; }

    [Required]
    [MinLength(2)]
    [MaxLength(32)]
    [Display(Name = "Last Name")]
    public string LastName { get; set; }

    [Required]
    [Range(0, 115)]
    public int Age { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [MinLength(8)]
    [MaxLength(32)]
    public string Password { get; set; }
  }
}