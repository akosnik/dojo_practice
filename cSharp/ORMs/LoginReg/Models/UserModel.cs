using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginReg.Models
{
  public class User
  {
    [Key]
    public int UserId { get; set; }

    [Required]
    [Display(Name = "First Name")]
    [MinLength(2)]
    public string FirstName { get; set; }

    [Required]
    [Display(Name = "Last Name")]
    [MinLength(2)]
    public string LastName { get; set; }

    [Required]
    [Display(Name = "Email")]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [Display(Name = "Password")]
    [MinLength(8)]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;


    [NotMapped]
    [Display(Name = "Confirm Password")]
    [Compare("Password")]
    [DataType(DataType.Password)]
    public string ConfirmPass { get; set; }
  }
}