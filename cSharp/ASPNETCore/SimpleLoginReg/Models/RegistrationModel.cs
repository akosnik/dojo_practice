using System;
using System.ComponentModel.DataAnnotations;

namespace SimpleLoginReg.Models
{
  public class Registration
  {
    [Required]
    [MinLength(2, ErrorMessage = "First name must be at least 8 characters.")]
    [MaxLength(32)]
    [Display(Name = "First Name")]
    public string FirstName { get; set; }

    [Required]
    [MinLength(2, ErrorMessage = "Last name must be at least 8")]
    [MaxLength(32)]
    [Display(Name = "Last Name")]
    public string LastName { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [DataType(DataType.Password)]
    [MinLength(8, ErrorMessage = "Password must be at least 8 characters.")]
    public string Password { get; set; }

    [Required]
    [Compare("Password", ErrorMessage = "Passwords do not match.")]
    [Display(Name = "Confirm Password")]
    [DataType(DataType.Password)]
    public string ConfirmPass { get; set; }
  }
}